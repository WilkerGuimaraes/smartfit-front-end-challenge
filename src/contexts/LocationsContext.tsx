import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { ILocation, LocationRoot } from "../types/location";

interface LocationContextType {
  locationState: ILocation[];
  filteredLocations: ILocation[];
  onSubmit: ({ period, showClosed }: FilterProps) => void;
  onReset: () => void;
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
    queryFn: async () => {
      const response = await axios.get(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      );

      return response.data;
    },
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
        if (isClosed) return false;

        const { start, end } = parseHour(schedule.hour);

        if (period === "morning" && start <= 6 && end >= 12) return true;
        if (period === "afternoon" && start <= 12 && end >= 18) return true;
        if (period === "night" && start <= 18 && end >= 21) return true;

        return false;
      });

      if (showClosed) {
        return isClosed || isInPeriod;
      } else if (!showClosed && !period) {
        return location.opened;
      } else {
        return isInPeriod;
      }
    });

    setFilteredLocations(filteredResult);
  }

  function onReset() {
    setFilteredLocations([]);
  }

  return (
    <LocationsContext.Provider
      value={{ locationState, filteredLocations, onSubmit, onReset }}
    >
      {children}
    </LocationsContext.Provider>
  );
}
