export function Header() {
  return (
    <header
      className="flex justify-center items-center h-32 bg-black mb-16"
      data-testid="header"
    >
      <img src="/logo.svg" alt="logo" className="w-56" />
    </header>
  );
}
