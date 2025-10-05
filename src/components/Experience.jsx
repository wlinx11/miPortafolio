/* eslint-disable react/prop-types */
import { EXPERIENCES } from "../constants";
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

export default function Experience({ language }) {
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
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-6 md:my-10 text-center text-3xl md:text-4xl"
      >
        {language === "es" ? "Experiencia" : "Experience"}
      </motion.h2>

      <div className="container mx-auto px-4">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
              <div className="w-full lg:w-2/5">
                <div className="max-w-md mx-auto">
                  {exp.images && exp.images.length > 0 ? (
                    <Slider {...settings}>
                      {exp.images.map((img, i) => (
                        <div className="px-2" key={i}>
                          {/* If the image filename contains 'harmanLogo', render it on a white padded background for contrast */}
                          <div className="flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-neutral-900" style={{ aspectRatio: "16 / 9" }}>
                            {String(img).toLowerCase().includes('harmanlogo') ? (
                              <div className="bg-white p-4 rounded">
                                <img src={img} alt={`${exp.company} ${i}`} className="max-w-full max-h-40 object-contain" />
                              </div>
                            ) : (
                              <img src={img} alt={`${exp.company} ${i}`} loading="lazy" className="max-w-full max-h-full object-contain" />
                            )}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-neutral-900 rounded-xl shadow-lg">
                      <div className="text-neutral-400">{language === 'es' ? 'Fotos no disponibles' : 'No photos available'}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-2/3 px-4 md:px-0">
                <h5 className="text-xl md:text-2xl font-semibold mb-2 text-center lg:text-left">
                  {exp.company} - {exp.role[language]}
                </h5>
                <p className="text-sm md:text-base text-neutral-400 mb-4 text-center lg:text-left">
                  {exp.description[language]}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="rounded bg-neutral-900 px-3 py-1 md:px-4 md:py-2 text-sm md:text-base text-purple-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
