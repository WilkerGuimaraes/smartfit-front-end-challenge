import iconHour from "../assets/images/icon-hour.png";

export function Form() {
  return (
    <form className="rounded border-[6px] border-zinc-200 p-10 mx-12">
      <div className="flex items-center gap-4">
        <img src={iconHour} alt="iconHour" />
        <h2 className="text-3xl text-light-grey">Horário</h2>
      </div>

      <h1 className="text-5xl font-gotham-light text-light-grey px-4 py-8 border-b-2">
        Qual período quer treinar?
      </h1>

      <div className="flex py-4 border-b-2 font-gotham-book text-2xl text-light-grey">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="period"
            value="morning"
            className="w-8 h-8 hover:cursor-pointer"
          />
          <label htmlFor="morning">Manhã</label>
        </div>
        <span className="ml-auto">06:00 às 12:00</span>
      </div>

      <div className="flex py-4 border-b-2 font-gotham-book text-2xl text-light-grey">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="period"
            value="aftermoon"
            className="w-8 h-8 hover:cursor-pointer"
          />
          <label htmlFor="aftermoon">Tarde</label>
        </div>
        <span className="ml-auto">12:01 às 18:00</span>
      </div>

      <div className="flex py-4 border-b-2 font-gotham-book text-2xl text-light-grey">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="period"
            value="night"
            className="w-8 h-8 hover:cursor-pointer"
          />
          <label htmlFor="night">Noite</label>
        </div>
        <span className="ml-auto">18:01 às 23:00</span>
      </div>

      <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
        <div className="flex items-center">
          <input type="checkbox" className="w-7 h-7 hover:cursor-pointer" />
          <span className="ml-3 font-gotham-book text-2xl text-dark-grey">
            Exibir unidades fechadas
          </span>
        </div>
        <span className="ml-2 font-gotham-book text-2xl text-dark-grey">
          Resultados encontrados: 0
        </span>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:justify-center">
        <button className="px-20 py-5 bg-yellow font-gotham-black text-xl rounded lg:px-28">
          ENCONTRAR UNIDADE
        </button>
        <button className="px-20 py-5 border-[3px] font-gotham-black text-xl rounded lg:px-44">
          LIMPAR
        </button>
      </div>
    </form>
  );
}
