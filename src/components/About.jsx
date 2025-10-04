/* eslint-disable react/prop-types */
import premiacion from "../assets/premiacion.jpg";
import lego from "../assets/lego.jpg";
import InglesGraduacion from "../assets/InglesGraduacion.jpg";
import grupoFotografico from "../assets/grupoFotografico.jpg";
import premiacionVivel from "../assets/premiacionVivel.jpg";
import yo3 from "../assets/yo3.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const About = ({ language }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots relative bottom-0 pt-4",
  };

  return (
    <div className="border-b border-neutral-900 pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="my-6 md:my-10 text-center text-3xl md:text-4xl"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {language === "es" ? "Sobre" : "About"}{" "}
          <span className="text-neutral-500">
            {language === "es" ? "mi" : "Me"}
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Carousel Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              <Slider {...settings} className="about-slider">
                {[
                  { src: yo3, alt: "Yo" },
                  { src: premiacion, alt: "Premiación" },
                  { src: lego, alt: "Premiacion lego" },
                  { src: grupoFotografico, alt: "Grupo fotografico" },
                  { src: InglesGraduacion, alt: "Ingles graduacion" },
                  { src: premiacionVivel, alt: "Premiación vivel" },
                ].map((img, index) => (
                  <div key={index} className="px-2">
                    {/* Use the native CSS aspect-ratio to create a stable frame and center images */}
                    <div
                      className="flex items-center justify-center overflow-hidden bg-neutral-900 rounded-xl md:rounded-2xl shadow-lg"
                      style={{ aspectRatio: "16 / 12" }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>

          {/* About Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex items-center"
          >
            <div className="w-full max-w-2xl mx-auto lg:mx-0">
              <p
                className="text-lg md:text-xl font-light tracking-tight md:tracking-tighter 
                leading-relaxed text-center lg:text-left px-4 lg:px-0 mt-4 lg:mt-0"
              >
                {ABOUT_TEXT[language]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
