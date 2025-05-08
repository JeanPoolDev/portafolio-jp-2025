import { useState } from "react";
import { Header } from "./components/Header";
import { tecnologias } from "./data/tecnologias";
import { Github, Linkeding } from "./icons";

export function Portafolio() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="h-auto w-[90%] mx-auto ">

      <div className="flex md:hidden">
        <button
          onClick={() => setMenu(!menu)}
          className="fixed top-8 right-5 bg-black text-white outline outline-[#6201FC] px-3 py-2 rounded-xl font-semibold cursor-pointer 
          transition-all hover:bg-[#6201FC] z-40 ">
          Modal
        </button>
        <div className="fixed flex flex-col bg-[url('https://i.pinimg.com/736x/65/c2/73/65c27380f1ccc9c6cebc6a126855e7e6.jpg')] bg-cover w-screen h-screen z-30 
        text-white items-center justify-center text-4xl gap-5"
          style={{
            display: menu ? 'none' : 'flex'
          }}>
          <a href="#" className="-translate-4 transition-all hover:tracking-[.20em] font-semibold">Inicio</a>
          <a href="#proyectos" className="-translate-4 transition-all hover:tracking-[.20em] font-semibold">Proyectos</a>
          <a href="#tecnologias" className="-translate-4 transition-all hover:tracking-[.20em] font-semibold">Tecnologias</a>
        </div>
      </div>

      <Header />

      <div className="h-auto pt-[100px] bg-[url('/fondo.png')] bg-cover aspect-[16/9] mb-10">
        <div className="flex items-center justify-center h-[300px]">
          <h1
            className="text-white text-4xl md:text-6xl px-0 2xl:px-[400px] text-center
          text-degradado font-semibold z-20 p-1"
          >
            Soy Jean Pool, Front-End Developer y Diseñador UX/UI
          </h1>
        </div>
        <div className="flex justify-center items-center z-10 border">
          <img src="/yo.png" alt="" className="object-cover w-full md:w-[60%] aspect-3/2" />
        </div>
      </div>

      <section className="h-auto lg:h-[500px] text-white px-2 md:px-10 grid place-content-center space-y-10 mb-10">
        <h2 className="text-4xl md:text-7xl text-degrada font-semibold">
          "No fue suerte, fue experiencia. Las cosas no pasan por casualidad
          cuando sabes lo que estás haciendo."
        </h2>
        <p className="text-3xl md:text-5xl font-semibold py-1">
          ——— <span className="text-degradado">Ayanokōji Kiyotaka</span>
        </p>
      </section>

      <section className="h-auto text-white flex flex-col justify-center items-center space-y-10" id="tecnologias mb-10">
        <button
          className="py-4 px-6 border border-[#6201FC] rounded-full text-[#6201FC]
          text-lg md:text-3xl hover:bg-[#6201fc] hover:text-white transition-all cursor-cell"
        >
          Stack Tecnológico
        </button>

        <h1 className="font-bold text-4xl md:text-6xl text-center px-2 md:px-40">
          Tecnologías que utilizo para
          <span className="text-[#6201FC] font-normal">
            construir experiencias
          </span>
          web modernas
        </h1>

        <p className="text-2xl mb-20">
          Herramientas modernas para crear experiencias web eficientes, rápidas
          y responsivas.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-4 h-full w-full mb-10">
          {tecnologias.map((tec) => (
            <div
              key={tec.id}
              className="glassmorphism px-5 md:px-10 py-8 md:py-12 space-y-10">
              {tec.icono}
              <h1 className="text-3xl">{tec.titulo}</h1>
              <p className="text-2xl">{tec.subtitulo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-white h-auto space-y-10 mb-10" id="proyectos">
        <button
          className="py-4 px-6 border border-[#6201FC] rounded-full text-[#6201FC]
          text-lg md:text-3xl hover:bg-[#6201fc] hover:text-white transition-all cursor-cell"
        >
          Mis Proyectos Destacados
        </button>
        <h1 className="text-5xl md:text-8xl font-semibold pr-0 md:pr-[600px]">
          Ideas{" "}
          <span className="text-[#6201FC] font-normal">
            convertidas en experiencias
          </span>{" "}
          reales
        </h1>

        <div className="h-screen p-0 md:p-10 cursor-pointer ">
          <a href="https://music-jp.vercel.app/" target="_blank">
            <img
              src="/musicas.jpg"
              alt="imagen"
              className="w-full h-full object-cover efecto rounded-4xl aspect-[16/9]"
            />
          </a>
        </div>

        <div className="h-screen p-0 md:p-10 cursor-pointer ">
          <a href="https://panaderia-delicia.vercel.app/" target="_blank">
            <img
              src="/pan.jpg"
              alt="imagen"
              className="w-full h-full object-cover efecto rounded-4xl aspect-[16/9]"
            />
          </a>
        </div>
      </section>

      <footer className="flex justify-between text-white h-[100px] items-center mb-10">
        <h1 className="text-md md:text-xl  font-bold">
          Porfaolio de @Jean Pool
        </h1>
        <div className="flex gap-4">
          <a href="https://github.com/JeanPoolDev" target="_blank" className="hover:scale-125 transition-all">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/jean-pool-rojas-avila-70535b251/" target="_blank" className="hover:scale-125 transition-all">
            <Linkeding />
          </a>
        </div>
      </footer>
    </div>
  );
}
