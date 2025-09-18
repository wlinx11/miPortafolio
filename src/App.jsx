import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [language, setLanguage] = useState("es"); // Estado para controlar el idioma

  // Función para cambiar de idioma
  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Función para detectar el modo preferido del sistema
  const getSystemTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  // Inicializar con el modo del sistema
  const [darkMode, setDarkMode] = useState(getSystemTheme());

  // useEffect para escuchar cambios en el modo del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Función que se ejecuta cuando cambia el modo del sistema
    const handleSystemThemeChange = (e) => {
      setDarkMode(e.matches ? "dark" : "light");
    };

    // Agregar el listener
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Cleanup: remover el listener cuando el componente se desmonte
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Función para alternar manualmente el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${
        darkMode === "dark" ? "text-neutral-300" : "text-neutral-900"
      }`}
    >
      {/* Fondo dinámico basado en el modo */}
      <div className="fixed top-0 -z-10 h-full w-full">
        {darkMode === "dark" ? (
          <div className="relative h-full w-full bg-slate-950">
            {/* Ajuste intermedio en la opacidad de la mancha morada */}
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.13),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.18),rgba(255,255,255,0))]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px), bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-[-50%] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        )}
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto px-8">
        <Navbar
          language={language}
          toggleLanguage={toggleLanguage}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Hero language={language} darkMode={darkMode} />
        <Technologies language={language} darkMode={darkMode} />
        <Projects language={language} darkMode={darkMode} />
        <About language={language} darkMode={darkMode} />
        <Contact language={language} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
