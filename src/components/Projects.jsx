import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom navigation buttons with responsive sizing
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
    bg-black/50 hover:bg-black/70 transition-colors
    rounded-full w-8 h-8 md:w-10 md:h-10 
    flex items-center justify-center cursor-pointer z-10"
  >
    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
    bg-black/50 hover:bg-black/70 transition-colors
    rounded-full w-8 h-8 md:w-10 md:h-10 
    flex items-center justify-center cursor-pointer z-10"
  >
    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
  </div>
);

function Projects({ language, darkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots relative bottom-0 pt-4",
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-8 md:my-20 text-center text-3xl md:text-5xl"
      >
        {language === "es" ? "Proyectos" : "Projects"}
      </motion.h1>

      <div className="container mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 md:mb-12 flex flex-col lg:flex-row items-center gap-6 md:gap-16"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 xl:w-1/3"
            >
              <div className="max-w-full mx-auto">
                <Slider {...settings}>
                  <div className="px-2">
                    <ProjectImage
                      project={project}
                      language={language}
                      imageType="image"
                    />
                  </div>
                  <div className="px-2">
                    <ProjectImage
                      project={project}
                      language={language}
                      imageType="secondImage"
                    />
                  </div>
                  {project.thirdImage && (
                    <div className="px-2">
                      <ProjectImage
                        project={project}
                        language={language}
                        imageType="thirdImage"
                      />
                    </div>
                  )}
                  {project.fourthImage && (
                    <div className="px-2">
                      <ProjectImage
                        project={project}
                        language={language}
                        imageType="fourthImage"
                      />
                    </div>
                  )}
                  {project.fifthImage && (
                    <div className="px-2">
                      <ProjectImage
                        project={project}
                        language={language}
                        imageType="fifthImage"
                      />
                    </div>
                  )}
                </Slider>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 xl:w-2/3 px-4 md:px-0"
            >
              <h6 className="mb-3 md:mb-4 font-semibold text-xl md:text-2xl text-center lg:text-left">
                {project.title[language] ===
                  "Sandar Inmuebles - Página Inmobiliaria" ||
                project.title[language] ===
                  "Sandar Inmuebles - Real Estate Platform" ? (
                  <a
                    href="https://sandarinmuebles.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors flex items-center"
                  >
                    {project.title[language]}
                    <span className="ml-2 text-xs bg-green-500 text-white rounded px-2 py-1">
                      {language === "es"
                        ? "Página disponible"
                        : "Page Available"}
                    </span>
                  </a>
                ) : (
                  project.title[language]
                )}
              </h6>
              <p className="mb-4 md:mb-6 text-base md:text-lg text-neutral-400 text-center lg:text-left">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 md:px-4 md:py-2 text-sm md:text-base text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}


function ProjectImage({ project, language, imageType }) {
  const imageUrl = project[imageType];
  const altText = `${project.title[language]}${
    imageType === "secondImage"
      ? " - Second Image"
      : imageType === "thirdImage"
      ? " - Third Image"
      : imageType === "fourthImage"
      ? " - Fourth Image"
      : imageType === "fifthImage"
      ? " - Fifth Image"
      : ""
  }`;

  const ImageComponent = (
    <div className="flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-neutral-900" style={{ aspectRatio: "16 / 9" }}>
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );

  if (project.title[language] === "Sandar Inmuebles - Página Inmobiliaria") {
    return (
      <a
        href="https://sandarinmuebles.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity"
      >
        {ImageComponent}
      </a>
    );
  }

  return ImageComponent;
}

export default Projects;
