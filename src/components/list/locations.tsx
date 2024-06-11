import { useContext } from "react";
import { LocationItem } from "./location-item";

import { LocationsContext } from "../../contexts/LocationsContext";

export function Locations() {
  const { locationState } = useContext(LocationsContext);

  return (
    <div className="flex flex-col gap-4 px-5 mt-5">
      {locationState.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
}
