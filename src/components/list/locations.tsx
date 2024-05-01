import { useQuery } from "@tanstack/react-query";
import { ILocation } from "../../types/location";
import { v4 as uuidv4 } from "uuid";

import { LocationItem } from "./location-item";

export function Locations() {
  const { data } = useQuery<{ locations: ILocation[] }>({
    queryKey: ["locations"],
    queryFn: () =>
      fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      ).then((res) => res.json()),
  });

  const addUniqueIds = (locations: ILocation[]) => {
    return locations.map((location) => ({
      ...location,
      id: uuidv4(),
    }));
  };

  return (
    <div className="flex flex-col gap-4 px-5 mt-5">
      {data?.locations &&
        addUniqueIds(data.locations).map((i) => (
          <LocationItem key={i.id} location={i} />
        ))}
    </div>
  );
}
