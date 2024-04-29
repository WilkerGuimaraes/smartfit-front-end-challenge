import requiredMask from "../assets/images/required-mask.png";
import recommendedMask from "../assets/images/recommended-mask.png";
import requiredTowel from "../assets/images/required-towel.png";
import recommendedTowel from "../assets/images/recommended-towel.png";
import partialFountain from "../assets/images/partial-fountain.png";
import forbiddenFountain from "../assets/images/forbidden-fountain.png";
import requiredLockerroom from "../assets/images/required-lockerroom.png";
import partialLockerroom from "../assets/images/partial-lockerroom.png";
import forbiddenLockerroom from "../assets/images/forbidden-lockerroom.png";

export function Legend() {
  return (
    <div className="m-10 py-16 px-8 bg-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-gotham-black">Máscara</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <img src={requiredMask} alt="requiredMask" className="size-24" />
            <p className="text-xl font-gotham-book">Obrigatório</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={recommendedMask}
              alt="recommendedMask"
              className="size-24"
            />
            <p className="text-xl font-gotham-book">Recomendado</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-gotham-black">Toalha</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <img src={requiredTowel} alt="requiredMask" className="size-24" />
            <p className="text-xl font-gotham-book">Obrigatório</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={recommendedTowel}
              alt="recommendedMask"
              className="size-24"
            />
            <p className="text-xl font-gotham-book">Recomendado</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-gotham-black">Bebedouro</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img src={partialFountain} alt="requiredMask" className="size-24" />
            <p className="text-xl font-gotham-book">Parcial</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={forbiddenFountain}
              alt="recommendedMask"
              className="size-24"
            />
            <p className="text-xl font-gotham-book">Proibido</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-gotham-black">Vestiários</h2>
        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center">
            <img
              src={requiredLockerroom}
              alt="requiredMask"
              className="size-24"
            />
            <p className="text-xl font-gotham-book">Liberado</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={partialLockerroom}
              alt="recommendedMask"
              className="size-24"
            />
            <p className="text-xl font-gotham-book">Parcial</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={forbiddenLockerroom}
              alt="recommendedMask"
              className="size-24"
            />
            <p className="text-xl font-gotham-book">Proibido</p>
          </div>
        </div>
      </div>
    </div>
  );
}
