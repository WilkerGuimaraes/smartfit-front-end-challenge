export function Footer() {
  return (
    <footer
      className="flex flex-col justify-center items-center gap-4 h-56 px-16 text-center mt-16 bg-darkGrey"
      data-testId="footer"
    >
      <img src="/logo.svg" alt="logo" className="w-36" />
      <p className="text-zinc-300 text-xl">
        Todos os direitos reservados - 2020
      </p>
    </footer>
  );
}
