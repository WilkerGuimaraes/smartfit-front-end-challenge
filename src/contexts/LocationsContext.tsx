import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ILocation, LocationRoot } from "../types/location";

interface LocationContextType {
  locationState: ILocation[];
}

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationsContext = createContext({} as LocationContextType);

export function LocationProvider({ children }: LocationProviderProps) {
  const { data: locationsResponse } = useQuery<LocationRoot>({
    queryKey: ["locations"],
    queryFn: () =>
      fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      ).then((res) => res.json()),
  });

  const [locationState, setLocationsState] = useState<ILocation[]>([]);

  useEffect(() => {
    if (locationsResponse) {
      const addUniqueIds = (locations: ILocation[]) => {
        return locations.map((location) => ({
          ...location,
          id: uuidv4(),
        }));
      };

      setLocationsState(addUniqueIds(locationsResponse.locations));
    }
  }, [locationsResponse]);

  console.log(locationState);

  return (
    <LocationsContext.Provider value={{ locationState }}>
      {children}
    </LocationsContext.Provider>
  );
}
