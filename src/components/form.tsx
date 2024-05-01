export function Form() {
  return (
    <div className="rounded-lg border-[6px] border-zinc-200 p-6 mx-8">
      <form>
        <div className="flex items-center gap-4">
          <img src="/icon-hour.png" alt="iconHour" className="size-12" />
          <h2 className="text-2xl text-light-grey">Horário</h2>
        </div>

        <h1 className="text-4xl font-gotham-light text-light-grey pt-8 pb-5 border-b-2">
          Qual período quer treinar?
        </h1>

        <div className="flex py-4 border-b-2 font-gotham-book text-xl text-light-grey">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="period"
              value="morning"
              className="size-6 hover:cursor-pointer"
            />
            <label htmlFor="morning">Manhã</label>
          </div>
          <span className="ml-auto">06:00 às 12:00</span>
        </div>

        <div className="flex py-4 border-b-2 font-gotham-book text-xl text-light-grey">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="period"
              value="aftermoon"
              className="size-6 hover:cursor-pointer"
            />
            <label htmlFor="aftermoon">Tarde</label>
          </div>
          <span className="ml-auto">12:01 às 18:00</span>
        </div>

        <div className="flex py-4 border-b-2 font-gotham-book text-xl text-light-grey">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="period"
              value="night"
              className="size-6 hover:cursor-pointer"
            />
            <label htmlFor="night">Noite</label>
          </div>
          <span className="ml-auto">18:01 às 23:00</span>
        </div>

        <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="size-6 hover:cursor-pointer" />
            <span className="ml-3 font-gotham-book text-xl text-dark-grey">
              Exibir unidades fechadas
            </span>
          </div>
          <p className="ml-2 font-gotham-book text-xl text-dark-grey">
            Resultados encontrados: <span className="font-gotham-black">0</span>
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-center">
          <button className="px-[20%] py-5 bg-yellow font-gotham-black text-xl rounded-lg lg:px-28">
            ENCONTRAR UNIDADE
          </button>
          <button className="px-20 py-5 border-[3px] font-gotham-black text-xl rounded-lg lg:px-44">
            LIMPAR
          </button>
        </div>
      </form>
    </div>
  );
}
