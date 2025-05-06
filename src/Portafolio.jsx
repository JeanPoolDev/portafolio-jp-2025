import { Header } from "./components/Header";
import { tecnologias } from "./data/tecnologias";
import { Github, Linkeding } from "./icons";

export function Portafolio() {
  return (
    <div className="h-auto w-[90%] mx-auto space-y-10">
      <Header />

      <div className="h-auto pt-[100px] bg-[url('/fondo.png')] bg-cover">
        <div className="flex items-center justify-center h-[300px]">
          <h1
            className="text-white text-4xl md:text-6xl px-0 xl:px-[400px] text-center
          text-degradado font-semibold z-20 p-1"
          >
            Soy Jean Pool, Front-End Developer y Diseñador UX/UI
          </h1>
        </div>
        <div className="flex justify-center items-center z-10 border">
          <img src="/yo.png" alt="" className="object-cover w-full md:w-[60%]" />
        </div>
      </div>

      <section className="h-auto lg:h-[500px] text-white px-2 md:px-10 grid place-content-center space-y-10">
        <h2 className="text-4xl md:text-7xl text-degrada font-semibold">
          "No fue suerte, fue experiencia. Las cosas no pasan por casualidad
          cuando sabes lo que estás haciendo."
        </h2>
        <p className="text-3xl md:text-5xl font-semibold py-1">
          ——— <span className="text-degradado">Ayanokōji Kiyotaka</span>
        </p>
      </section>

      <section className="h-auto text-white flex flex-col justify-center items-center space-y-10" id="tecnologias">
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
            <div className="glassmorphism px-5 md:px-10 py-8 md:py-12 space-y-10">
              {tec.icono}
              <h1 className="text-3xl">{tec.titulo}</h1>
              <p className="text-2xl">{tec.subtitulo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-white h-auto space-y-10" id="proyectos">
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
              className="w-full h-full object-cover efecto rounded-4xl"
            />
          </a>
        </div>

        <div className="h-screen p-0 md:p-10 cursor-pointer ">
          <a href="https://panaderia-delicia.vercel.app/" target="_blank">
            <img
              src="/pan.jpg"
              alt="imagen"
              className="w-full h-full object-cover efecto rounded-4xl"
            />
          </a>
        </div>
      </section>

      <footer className="flex justify-between text-white h-[100px] items-center">
        <h1 className="text-md md:text-xl  font-bold">
          Porfaolio de @Jean Pool
        </h1>
        <div className="flex gap-4">
          <a href="#" className="hover:scale-125 transition-all">
            <Github />
          </a>
          <a href="#" className="hover:scale-125 transition-all">
            <Linkeding />
          </a>
        </div>
      </footer>
    </div>
  );
}
