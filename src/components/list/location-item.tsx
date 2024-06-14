import { ILocation } from "../../types/location";

interface LocationItemProps {
  location: ILocation;
}

export function LocationItem({ location }: LocationItemProps) {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      {location.opened ? (
        <p className="text-green font-gotham-bold">Aberto</p>
      ) : (
        <p className="text-red font-gotham-bold">Fechado</p>
      )}

      <h2 className="text-2xl font-gotham-bold text-darkGrey my-2">
        {location.title}
      </h2>

      {location.schedules ? (
        <div
          className="text-lightGrey text-lg"
          dangerouslySetInnerHTML={{
            __html: location.content || "",
          }}
        ></div>
      ) : (
        <p className="text-lightGrey text-lg">
          {location.street}, {location.region}, {location.city_name} -
          {location.uf}
        </p>
      )}

      {location.opened && <div className="h-[1px] my-4 bg-zinc-300" />}

      <div className="flex gap-2 mt-4">
        {location.mask && (
          <img
            src={`${location.mask}-mask.png`}
            className="size-16 xl:size-20"
          ></img>
        )}
        {location.towel && (
          <img
            src={`${location.towel}-towel.png`}
            className="size-16 xl:size-20"
          ></img>
        )}
        {location.fountain && (
          <img
            src={`${location.fountain}-fountain.png`}
            className="size-16 xl:size-20"
          ></img>
        )}
        {location.locker_room && (
          <img
            src={`${location.locker_room}-lockerroom.png`}
            className="size-16 xl:size-20"
          ></img>
        )}
      </div>

      <div className="grid grid-cols-2 mt-4 gap-6">
        {location?.schedules?.map((schedule, index) => (
          <div key={index}>
            <h3 className="text-xl font-gotham-bold">{schedule.weekdays}</h3>
            <p className="text-lg">{schedule.hour}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
