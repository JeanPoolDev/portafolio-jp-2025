import {
  BaseDatos,
  Javacript,
  Next,
  Reac,
  Tailwind,
  Typescript,
} from "../icons";

// src/data/technologies.ts
export const tecnologias = [
  {
    id: 1,
    titulo: "React",
    subtitulo:
      "Biblioteca JavaScript centrada en la creación de interfaces de usuario rápidas, reactivas y modulares. Ideal para construir aplicaciones web interactivas que escalan con facilidad.",
    icono: <Reac />,
  },
  {
    id: 2,
    titulo: "Next.js",
    subtitulo:
      "Framework de React que potencia el rendimiento gracias al renderizado del lado del servidor (SSR), generación estática (SSG) y optimización automática. Lo utilizo para construir aplicaciones web completas, rápidas y preparadas para SEO.",
    icono: <Next />,
  },
  {
    id: 3,
    titulo: "Firebase",
    subtitulo:
      "Plataforma de desarrollo de Google que proporciona servicios backend como autenticación, base de datos en tiempo real y hosting. Lo uso para acelerar el desarrollo de aplicaciones con funcionalidades listas para producción.",
    icono: <BaseDatos />,
  },
  {
    id: 4,
    titulo: "TypeScript",
    subtitulo:
      "Superset de JavaScript que añade tipado estático. Aporta seguridad al desarrollo, facilita la detección de errores y mejora la mantenibilidad del código.",
    icono: <Typescript />,
  },
  {
    id: 5,
    titulo: "JavaScript",
    subtitulo:
      "Lenguaje fundamental del desarrollo web. Permite crear experiencias dinámicas, interactivas y conectar toda la lógica del frontend.",
    icono: <Javacript />,
  },
  {
    id: 6,
    titulo: "Tailwind CSS",
    subtitulo:
      "Framework de clases utilitarias para estilizar rápidamente componentes sin necesidad de escribir CSS desde cero. Ideal para diseñar interfaces modernas, limpias y responsivas.",
    icono: <Tailwind />,
  },
];
