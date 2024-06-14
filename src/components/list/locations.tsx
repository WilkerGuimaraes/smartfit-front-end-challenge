import { useContext } from "react";
import { LocationItem } from "./location-item";

import { LocationsContext } from "../../contexts/LocationsContext";

export function Locations() {
  const { filteredLocations } = useContext(LocationsContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 mt-5">
      {filteredLocations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
}
