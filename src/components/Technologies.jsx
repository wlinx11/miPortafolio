import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1, DiJava, DiPython } from "react-icons/di";
import { SiArduino } from "react-icons/si";
import { motion } from "framer-motion";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJira } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { DiScrum } from "react-icons/di";
import { SiAzuredevops } from "react-icons/si";
import { BsCamera } from "react-icons/bs";
import { RiBikeLine } from "react-icons/ri";
import { SiAdobelightroom } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsGitlab } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";

const PowerBIIcon = ({ className }) => (
  <svg
    viewBox="1 5 24 12"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="16.5" y="7" width="3" height="10" rx="0.3" />
    <rect x="11.5" y="9" width="3" height="8" rx="0.3" />
    <rect x="6.5" y="12" width="3" height="5" rx="0.3" />
  </svg>
);

const VBAIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cubo naranja (izquierda) */}
    <g>
      <path
        d="M2 8 L6 6 L6 12 L2 14 Z"
        fill="#FF8C00"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M2 8 L8 8 L8 14 L2 14 Z"
        fill="#FF6B00"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M6 6 L8 8 L8 14 L6 12 Z"
        fill="#E55100"
        stroke="#000"
        strokeWidth="0.3"
      />
    </g>

    {/* Cubo amarillo (centro-abajo) */}
    <g>
      <path
        d="M7 12 L11 10 L11 16 L7 18 Z"
        fill="#FFD600"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M7 12 L13 12 L13 18 L7 18 Z"
        fill="#FFC107"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M11 10 L13 12 L13 18 L11 16 Z"
        fill="#FF8F00"
        stroke="#000"
        strokeWidth="0.3"
      />
    </g>

    {/* Cubo azul (centro-arriba) */}
    <g>
      <path
        d="M10 4 L14 2 L14 8 L10 10 Z"
        fill="#42A5F5"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M10 4 L16 4 L16 10 L10 10 Z"
        fill="#1976D2"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M14 2 L16 4 L16 10 L14 8 Z"
        fill="#0D47A1"
        stroke="#000"
        strokeWidth="0.3"
      />
    </g>

    {/* Cubo magenta (derecha) */}
    <g>
      <path
        d="M16 8 L20 6 L20 12 L16 14 Z"
        fill="#E91E63"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M16 8 L22 8 L22 14 L16 14 Z"
        fill="#AD1457"
        stroke="#000"
        strokeWidth="0.3"
      />
      <path
        d="M20 6 L22 8 L22 14 L20 12 Z"
        fill="#880E4F"
        stroke="#000"
        strokeWidth="0.3"
      />
    </g>
  </svg>
);

const iconVariants = (duration) => ({
  initial: { y: -1 },
  animate: {
    y: [1, -1],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies({ language, darkMode }) {
  const sectionClass = "p-4 border-neutral-700";
  const titleClass =
    "my-6 md:my-10 text-xl md:text-2xl font-extrabold tracking-wide text-center";
  const gridClass = "flex flex-wrap items-center justify-center gap-3 md:gap-4";
  const iconBoxClass =
    "flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-2 md:p-4";
  const iconClass = "text-3xl md:text-5xl";
  const labelClass =
    "text-sm md:text-lg font-bold tracking-wide text-center mt-1";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-800 pt-8 md:pt-16">
      {/* Principal Technologies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={`${sectionClass} border-b md:border-r`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es"
            ? "Tecnologías Principales"
            : "Principal Technologies"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: RiReactjsLine, name: "REACT", color: "text-cyan-400" },
            {
              Icon: DiJavascript1,
              name: "Javascript",
              color: "text-yellow-500",
            },
            { Icon: DiHtml5, name: "HTML", color: "text-[#E34F26]" },
            { Icon: DiCss3, name: "CSS", color: "text-[#1572B6]" },
            { Icon: RiNodejsFill, name: "Node.js", color: "text-[#339933]" },
            { Icon: DiJava, name: "Java", color: "text-[#EC2125]" },
            { Icon: DiPython, name: "Python", color: "text-[#3F7CAD]" },
            { Icon: VBAIcon, name: "VBA", color: "text-[#217346]" },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tools and Frameworks */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={`${sectionClass} border-b`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es"
            ? "Herramientas y Frameworks"
            : "Tools and Frameworks"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: RiFirebaseFill, name: "Firebase", color: "text-[#FF9100]" },
            { Icon: BsGithub, name: "GitHub", color: "" },
            { Icon: BsGitlab, name: "GitLab", color: "text-[#e2432a]" },
            {
              Icon: RiTailwindCssFill,
              name: "Tailwind",
              color: "text-[#06B6D4]",
            },
            {
              Icon: PiMicrosoftExcelLogo,
              name: "Excel",
              color: "text-[#63BE7B]",
            },
            { Icon: PowerBIIcon, name: "Power BI", color: "text-[#F2C811]" },
            { Icon: SiCanva, name: "Canva", color: "text-[#00C4CC]" },
            { Icon: FaFigma, name: "Figma", color: "text-[#F24E1E]" },
            { Icon: SiJira, name: "Jira", color: "text-[#0052CC]" },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Work Methodologies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={`${sectionClass} border-b md:border-r`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es" ? "Metodologías de Trabajo" : "Work Methodologies"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: DiScrum, name: "Scrum", color: "text-[#0052CC]" },
            { Icon: SiAzuredevops, name: "DevOps", color: "text-[#0079BF]" },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1.3 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Skills and Personal Hobbies */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={sectionClass}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {language === "es"
            ? "Habilidades y Hobbies Personales"
            : "Skills and Personal Hobbies"}
        </motion.h1>
        <motion.div className={gridClass}>
          {[
            { Icon: SiArduino, name: "Arduino", color: "text-[#00979D]" },
            {
              Icon: BsCamera,
              name: language === "es" ? "Fotografia" : "Photography",
              color: "text-[#0052CC]",
            },
            {
              Icon: SiAdobelightroom,
              name: "Lightroom",
              color: "text-[#31A8FF]",
            },
            {
              Icon: RiBikeLine,
              name: language === "es" ? "Ciclismo" : "Cycling",
              color: "text-[#0079BF]",
            },
            {
              Icon: FaGamepad,
              name: language === "es" ? "Videojuegos" : "Videogames",
              color: "text-[#0079BF]",
            },
            {
              Icon: RiEnglishInput,
              name: language === "es" ? "Ingles B1" : "English B1",
              color: "text-[#0079BF]",
            },
          ].map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              variants={iconVariants(1.1 + index * 0.1)}
              initial="initial"
              animate="animate"
              className={iconBoxClass}
            >
              <Icon className={`${iconClass} ${color}`} />
              <h1 className={labelClass}>{name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
