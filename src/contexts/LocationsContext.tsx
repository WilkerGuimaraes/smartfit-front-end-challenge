import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ILocation, LocationRoot } from "../types/location";

interface LocationContextType {
  locationState: ILocation[];
  filteredLocations: ILocation[];
  onSubmit: ({ period, showClosed }: FilterProps) => void;
}

interface LocationProviderProps {
  children: ReactNode;
}

interface FilterProps {
  period: string;
  showClosed: boolean;
}

export const LocationsContext = createContext({} as LocationContextType);

export function LocationProvider({ children }: LocationProviderProps) {
  const { data: locationsResponse } = useQuery<LocationRoot>({
    queryKey: ["get-locations"],
    queryFn: () =>
      fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      ).then((res) => res.json()),
  });

  const [locationState, setLocationsState] = useState<ILocation[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<ILocation[]>([]);

  useEffect(() => {
    if (locationsResponse) {
      const addUniqueIds = (locations: ILocation[]) => {
        return locations.map((location) => ({
          ...location,
          id: uuidv4(),
        }));
      };

      const locationsWithNewIds = addUniqueIds(locationsResponse.locations);
      setLocationsState(locationsWithNewIds);
    }
  }, [locationsResponse]);

  function onSubmit({ period, showClosed }: FilterProps) {
    const parseHour = (hourString: string) => {
      const [start, end] = hourString
        .split(" às ")
        .map((time) => parseInt(time.replace("h", ""), 10));
      return { start, end };
    };

    const filteredResult = locationState.filter((location) => {
      const isClosed = !location.opened || !location.schedules;
      const isInPeriod = location.schedules?.some((schedule) => {
        const { start, end } = parseHour(schedule.hour);

        if (period === "morning" && start >= 6 && end <= 12) return true;
        if (period === "afternoon" && start >= 12 && end <= 18) return true;
        if (period === "night" && start >= 18 && end <= 23) return true;

        return false;
      });

      if (showClosed) {
        return isClosed || isInPeriod;
      } else {
        return location.opened && isInPeriod;
      }
    });

    setFilteredLocations(filteredResult);
    console.log(filteredResult);
  }

  return (
    <LocationsContext.Provider
      value={{ locationState, filteredLocations, onSubmit }}
    >
      {children}
    </LocationsContext.Provider>
  );
}
