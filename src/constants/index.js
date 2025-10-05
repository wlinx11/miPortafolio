import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import sandar from "../assets/projects/sandar.jpg";
import VIVEL from "../assets/projects/VIVEL.jpg";
import SISOGEM from "../assets/projects/SISOGEM.jpg";
import SISOGEM3 from "../assets/projects/SISOGEM3.jpg";
import sandar6 from "../assets/projects/sandar6.jpg";
import sandar3 from "../assets/projects/sandar3.jpg";
import sandar4 from "../assets/projects/sandar4.jpg";
import sandar5 from "../assets/projects/sandar5.jpg";
import notaria641 from "../assets/projects/notaria641.jpg";
import notaria642 from "../assets/projects/notaria642.jpg";
import notaria643 from "../assets/projects/notaria643.jpg";
import harmanLogo from "../assets/experience/harmanLogo.png";
import scorecardExcel from "../assets/experience/scorecardExcel.jpg";
import scorecardPowerBI from "../assets/experience/scorecardPowerBI.jpg";
import OTDStandard from "../assets/experience/OTDStandard.jpg";
import automatizacionSAP from "../assets/experience/automatizacionSAP.jpg";
import controlDeIntervenciones from "../assets/experience/controlDeIntervenciones.jpg";

export const HERO_CONTENTS = {
  en: `I am a Junior Web Developer, soon to graduate as a Computer Systems Engineer from the Instituto Tecnológico de Morelia, with a specialization in Software Engineering.`,

  es: `Soy un Desarrollador Web Junior, próximo a titularme como Ingeniero en Sistemas Computacionales en el Instituto Tecnológico de Morelia, con especialidad en Ingeniería de Software.`,
};

export const ABOUT_TEXT = {
  en: `My name is Roboam Ismael Rangel Ceja. I am 26 years old and I am about to graduate with a degree in Computer Systems Engineering from the Instituto Tecnológico de Morelia, after completing my professional residency at Harman Querétaro.
Throughout my training, I have gained experience in software development, especially in frontend technologies such as React and Next.js.

In addition to my passion for programming, I am eager to keep learning in areas such as business intelligence, video game development, data science, and application development. I have a good level of English and I stand out for my adaptability in teams and when facing complex challenges.`,

  es: `Mi nombre es Roboam Ismael Rangel Ceja. Tengo 26 años y actualmente estoy por titularme como Ingeniero en Sistemas Computacionales en el Instituto Tecnológico de Morelia, tras realizar mis residencias profesionales en Harman Querétaro.
A lo largo de mi formación, he adquirido experiencia en el desarrollo de software, especialmente en frontend con tecnologías como React y Next.js.

Además de mi pasión por la programación, me interesa seguir aprendiendo en áreas como inteligencia de negocios, desarrollo de videojuegos, ciencia de datos y desarrollo de aplicaciones. Tengo un buen nivel de inglés y me destaco por mi capacidad de adaptación en equipos y al enfrentar retos complejos.`,
};

export const PROJECTS = [
  {
    title: {
      en: "VIVEL Entrepreneurship Academy",
      es: "VIVEL Academia de emprendimiento",
    },
    image: project1,
    secondImage: VIVEL,
    description: {
      en: "I participated in the development of a comprehensive online course platform with features such as admin panel, payment gateway, and live virtual sessions.",
      es: "Participe en el desarrollo de una plataforma completa de cursos en linea con características como administrador, pasarela de pagos y sesiones virtuales en vivo.",
    },
    technologies: ["CodeIgniter", "PHP", "JavaScript", "Bootstrap 5", "MySQL"],
  },
  {
    title: {
      en: "SISOGEM - Government Organs System of the State of Michoacán",
      es: "SISOGEM - Sistema de Órganos de Gobierno del Estado de Michoacán",
    },
    image: SISOGEM,
    secondImage: SISOGEM3,
    thirdImage: project2,
    description: {
      en: "I participated in the development of a governmental platform with features like digital signatures, real-time document editor, and file management, improving efficiency in the state’s administrative processes.",
      es: "Participé en el desarrollo de una plataforma gubernamental con características como firmas digitales, editor de documentos en tiempo real y gestión de archivos, mejorando la eficiencia en los procesos administrativos del estado.",
    },
    technologies: [
      "REACT",
      "Node.JS",
      "AWS",
      "Express.JS",
      "MongoDB",
      "Ant Design",
    ],
  },
  {
    title: {
      en: "Sandar Inmuebles - Real Estate Platform",
      es: "Sandar Inmuebles - Página Inmobiliaria",
    },
    image: sandar,
    secondImage: sandar4,
    thirdImage: sandar5,
    fourthImage: sandar6,
    fifthImage: sandar3, 
    description: {
      en: "I developed a real estate platform with property management services, analytics generation, messaging box, and comprehensive property management, facilitating interaction between users and agents.",
      es: "Desarrollé una plataforma inmobiliaria con servicios de administración de propiedades, generación de analíticas, buzón de mensajería y gestión integral de inmuebles, facilitando la interacción entre usuarios y agentes.",
    },
    technologies: ["REACT", "Tailwind CSS", "FireBase", "Ant Design"],
  },
  {
    title: {
      en: "Notaria 64 - Administrative System",
      es: "Notaria 64 - Sistema Administrativo",
    },
    image: notaria641,
    secondImage: notaria642,
    thirdImage: notaria643,
    description: {
      en: "I was involved in the development of an administrative system for a notarial firm where processes such as wills, procedures, comparisons and powers of attorney are managed. Where you can record progress, notify, check statistical data, etc.",
      es: "Estuve involucrado en el desarrollo de un sistema administrativo para una firma notarial en donde se manejan procesos tales como testamentos, tramites, cotejos y poderes notariales. En donde se puede registrar avances, notificar, checar datos estadisticos, etc.",
    },
    technologies: ["Next.js", "FireBase", "Shadcn", "Lucide"],
  },
];

export const CONTACT = {
  address:{ 
    en: "Morelia, Michoacán (availability for relocation)",
    es: "Morelia, Michoacán (disponibilidad para reubicación)"
  },
  phoneNo: "443-238-1825 (WhatsApp)",
  email: "wlinx11@gmail.com",
};

export const EXPERIENCES = [
  {
    company: "Harman Querétaro",
    role: {
      en: "Professional Intern",
      es: "Residente Profesional",
    },
    period: "2025",
    description: {
      en: "I worked as a process automation intern in the MBU area, designing, developing and improving internal processes to save time and provide better business intelligence for interpreting key data. I collaborated with internal and external teams, both on joint initiatives and by delivering solutions for their individual projects.",
      es: "Trabajé como automatizador de procesos para el área de MBU, diseñando, desarrollando y mejorando procesos internos para ahorrar tiempo y proporcionar mayor inteligencia de negocios en la interpretación de datos relevantes. Colaboré con equipos internos y externos, tanto en iniciativas conjuntas como entregando soluciones para sus propios proyectos.",
    },
    technologies: ["Excel", "Visual Basic for Applications", "PowerBI", "SAP "],
    images: [harmanLogo, scorecardExcel, scorecardPowerBI, automatizacionSAP, controlDeIntervenciones, OTDStandard],
  },
];
