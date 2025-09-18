import React, { useState } from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFilePdf,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styled from "styled-components";

const IconWrapper = styled.a`
  position: relative;
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  color: #fff;
  background: #333;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease-in-out, background-color 0.3s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transform: scale(0.9);
    background-color: #0077b5;
  }

  /* Tamaño más pequeño en móviles */
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const WhatsappIconWrapper = styled(IconWrapper)`
  &:hover {
    background-color: #25d366;
  }
`;

const PdfIconWrapper = styled(IconWrapper)`
  position: relative;
  flex-direction: column;

  /* Tooltip visible solo en pantallas grandes */
  @media (min-width: 769px) {
    &:hover span {
      opacity: 1;
      transform: translateY(0);
    }

    span {
      position: absolute;
      bottom: -1.5rem;
      background-color: #333;
      color: #fff;
      padding: 0.2rem 0.4rem;
      border-radius: 0.3rem;
      font-size: 0.75rem;
      opacity: 0;
      transform: translateY(0.5rem);
      transition: opacity 0.3s ease, transform 0.3s ease;
      white-space: nowrap;
    }
  }

  /* Ocultar texto en móviles para ahorrar espacio */
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1.9px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* Contenedor para iconos sociales - siempre visible */
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.3rem; /* Menos espacio en móviles */
  }
`;

/* Contenedor para elementos del menú hamburguesa */
const MenuContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 280px;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    backdrop-filter: blur(10px);
    gap: 2rem;

    /* Centrar contenido verticalmente */
    justify-content: center;
  }
`;

const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #6b7280;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({ darkMode }) =>
    darkMode === "dark" ? "transparent" : "#f1f5f9"};
  color: ${({ darkMode }) => (darkMode === "dark" ? "#fff" : "#1f2937")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ darkMode }) =>
      darkMode === "dark" ? "#1e293b" : "#e2e8f0"};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    width: 200px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #fff;
`;

const Switch = ({ darkMode, toggleDarkMode, language }) => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            type="checkbox"
            className="checkbox"
            checked={darkMode === "dark"}
            onChange={toggleDarkMode}
          />
          <span className="slider" />
        </label>
      </div>
      <SwitchLabel>
        {language === "es"
          ? darkMode === "dark"
            ? "Modo Oscuro"
            : "Modo Claro"
          : darkMode === "dark"
          ? "Dark Mode"
          : "Light Mode"}
      </SwitchLabel>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .toggle-switch {
    position: relative;
    width: 60px;
    height: 30px;
    --light: #d8dbe0;
    --dark: #28292c;
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 15px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: inset 8px -4px 0px 0px var(--light);
    background-color: var(--dark);
    transform: translateY(-50%);
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    transform: translate(28px, -50%);
    background-color: var(--dark);
    box-shadow: none;
  }
`;

const SwitchLabel = styled.span`
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

/* Componente para los CVs que solo aparece en el menú hamburguesa */
const CVSection = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const CVButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 200px;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const Navbar = ({ language, toggleLanguage, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledNavbar>
      <LeftSection>
        {/* Logo o espacio para logo */}
        <div className="m-4 flex items-center justify-center gap-2 text-2xl"></div>
      </LeftSection>

      <RightSection>
        {/* Iconos sociales - siempre visibles */}
        <SocialIcons>
          <IconWrapper
            href="https://www.linkedin.com/in/roboam-ismael-rangel-ceja-87a2b72b6/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </IconWrapper>

          <WhatsappIconWrapper
            href="https://wa.me/+524432381825?text=Hola,%20quisiera%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </WhatsappIconWrapper>

          {/* CVs solo visibles en desktop */}
          <PdfIconWrapper
            href="/Roboam_Ismael_Rangel_Ceja.pdf"
            download
            target="_blank"
            style={{ display: window.innerWidth > 768 ? "flex" : "none" }}
          >
            <FaFilePdf />
            <span>CV Español</span>
          </PdfIconWrapper>

          <PdfIconWrapper
            href="/Roboam_Ismael_Rangel_Ceja_English.pdf"
            download
            target="_blank"
            style={{ display: window.innerWidth > 768 ? "flex" : "none" }}
          >
            <FaFilePdf />
            <span>CV English</span>
          </PdfIconWrapper>
        </SocialIcons>

        {/* Botón del menú hamburguesa */}
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
      </RightSection>

      {/* Menú hamburguesa */}
      <MenuContent isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu}>
          <FaTimes />
        </CloseButton>

        <LanguageButton
          onClick={() => {
            toggleLanguage();
            closeMenu();
          }}
          darkMode={darkMode}
        >
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </LanguageButton>

        {/* CVs en el menú móvil */}
        <CVSection>
          <CVButton
            href="/Roboam_Ismael_Rangel_Ceja.pdf"
            download
            target="_blank"
            onClick={closeMenu}
          >
            <FaFilePdf />
            CV Español
          </CVButton>

          <CVButton
            href="/Roboam_Ismael_Rangel_Ceja_English.pdf"
            download
            target="_blank"
            onClick={closeMenu}
          >
            <FaFilePdf />
            CV English
          </CVButton>
        </CVSection>

        <Switch
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          language={language}
        />
      </MenuContent>
    </StyledNavbar>
  );
};

export default Navbar;
