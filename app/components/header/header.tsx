export default function Header() {
  return (
    <header>
      <div className="flex justify-between w-full px-6 h-20">
        <div className="flex gap-2 items-center">
          <a className="font-bold text-xl" href="/">
            Speed Work
          </a>
          <h1>Bem vindo ao sistema de vagas</h1>
        </div>
        <div className="flex items-center">
          <span>31 de Jan. de 2024</span>
        </div>
      </div>
    </header>
  );
}
