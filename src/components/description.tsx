export function Description() {
  return (
    <div data-testid="description">
      <div className="flex flex-col justify-start px-8 gap-6">
        <h1 className="text-4xl font-gotham-bold text-dark-grey">
          REABERTURA
          <br /> SMART FIT
        </h1>

        <span className="w-28 h-4 bg-darkGrey" />
      </div>

      <p className="my-12 px-8 text-xl font-gotham-book">
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
    </div>
  );
}
