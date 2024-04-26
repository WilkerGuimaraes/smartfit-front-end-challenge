import logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <header className="flex flex-col gap-4 w-full">
      <div className="flex justify-center items-center p-20 bg-black mb-44">
        <img src={logo} alt="logo" className="w-96" />
      </div>

      <div className="flex flex-col justify-start px-12 gap-14">
        <h1 className="text-6xl font-gotham-bold text-dark-grey">
          REABERTURA
          <br /> SMART FIT
        </h1>

        <span className="w-52 h-5 bg-dark-grey" />
      </div>

      <p className="my-20 px-12 text-3xl font-gotham-book">
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
    </header>
  );
}
