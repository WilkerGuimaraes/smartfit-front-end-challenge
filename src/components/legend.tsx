import { LEGEND } from "../constants/legends";

export function Legend() {
  return (
    <div
      className="my-10 mx-6 py-16 px-4 bg-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
      data-testId="legend"
    >
      {LEGEND.map((legend, index) => (
        <div key={index} className="flex flex-col gap-6 text-center">
          <h2 className="text-2xl font-gotham-black">{legend.description}</h2>
          <div className="flex justify-around">
            {legend.images.map((image, imgIndex) => (
              <div key={imgIndex} className="flex flex-col items-center">
                <img src={image.url} alt={image.alt} className="size-16" />
                <p className="text-lg font-gotham-book">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
