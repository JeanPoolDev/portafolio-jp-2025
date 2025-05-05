export function Header() {
  return (
    <header className="fixed w-[90%] h-[100px] flex items-center justify-between ">
      <h1 className="text-3xl text-[#6201FC] font-bold">JPOL</h1>
      <div className="rounded-xl flex gap-4 p-3 text-lg font-semibold">
        <a href="#"
          className="px-5 py-2 rounded-xl
             text-white btn-degradado">
          Inicio
        </a>
        <a href="#" className="px-3 py-2 rounded-xl btn-degradado 
           text-white">
          Proyectos
        </a>
        <a href="#" className="px-3 py-2 rounded-xl btn-degradado 
           text-white">
          Tecnologias
        </a>
      </div>
    </header>
  );
};