import { useEffect } from "react";
import { useState } from "react";

export function Header() {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])


  return (
    <header className="fixed w-[90%] h-[100px] flex items-center justify-between z-20">
      <h1 className="text-3xl text-[#6201FC] font-bold">JPOL</h1>

      <div className="rounded-xl hidden md:flex gap-4 p-3 text-lg font-semibold">
        <a
          href="#"
          className="px-5 py-2 rounded-xl
             text-white btn-degradado"
        >
          Inicio
        </a>
        <a
          href="#proyectos"
          className="px-3 py-2 rounded-xl btn-degradado 
           text-white"
        >
          Proyectos
        </a>
        <a
          href="#tecnologias"
          className="px-3 py-2 rounded-xl btn-degradado 
           text-white"
        >
          Tecnologias
        </a>
        <div
          className="inset-0 "
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid white',
            borderRadius: '50%',
            opacity: enabled ? '0.8' : '0',
            pointerEvents: 'none',
            left: -90,
            top: -20,
            width: '60px',
            height: '60px',
            transform: `translate(${position.x}px, ${position.y}px)`
          }} />
        <button
          onClick={() => setEnabled(!enabled)}
          className="bg-black text-white outline outline-[#6201FC] px-3 py-2 rounded-xl font-semibold cursor-pointer 
          transition-all hover:bg-[#6201FC]">
          {enabled ? 'Desactivado' : 'Activar'} puntero
        </button>
      </div>



    </header>
  );
}
