import { Header } from "./components/Header";

export function Portafolio() {
  return (
    <div className="h-auto w-[90%] mx-auto space-y-10">

      <Header />

      <div className="h-auto pt-[100px] bg-[url('/fondo.png')] bg-cover">
        <div className="flex items-center justify-center h-[300px]">
          <h1 className="text-white text-6xl px-[400px] text-center
          text-degradado font-semibold z-20 p-1">
            Soy Jean Pool,
            Front-End Developer y Diseñador UX/UI
          </h1>
        </div>
        <div className="flex justify-center items-center z-10">
          <img src="/yo.png" alt="" className="object-cover w-[60%]" />
        </div>
      </div>

      <section className="h-[500px] text-white px-10 grid place-content-center space-y-10">
        <h2 className="text-7xl text-degrada font-semibold">
          "No fue suerte, fue experiencia. Las cosas no pasan por casualidad cuando sabes lo que estás haciendo."
        </h2>
        <p className="text-5xl font-semibold py-1"> ——— <span className="text-degradado">Ayanokōji Kiyotaka</span></p>
      </section>


    </div>
  );
};