import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const burgerMenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "28px",
    height: "22px",
    right: "24px",
    top: "28px",
  },
  bmBurgerBars: {
    background: "#212121",
    borderRadius: "2px",
    height: "3px",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#212121",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "#ffffff",
    padding: "3rem 1.5rem 0",
    fontSize: "1.15em",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "1rem 0",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "0",
    left: "0",
  },
};

const navLinks = [
  { href: "#startseite", label: "Startseite" },
  { href: "#uber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Dienstleistungen" },
  { href: "#projekte", label: "Projekte" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className="w-full bg-white relative z-50">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          <div className="shrink-0 flex items-center">
            <a href="/">
              <img
                src="/syntechlogo.svg"
                alt="SynTech Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop: Links (hidden at ≤1024px) */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-poppins font-normal text-[16px] text-[#212121B2] hover:text-[#0000FF] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop: CTA Button (hidden at ≤1024px) */}
          <div className="hidden lg:flex items-center">
            <a
              href="mailto:admin@syn-tech.ch"
              className="flex items-center rounded-full bg-[#0000FF] border border-[#5235F6] py-[6px] transition-transform hover:scale-105"
            >
              <span className="font-poppins font-medium text-white pl-[27px] pr-[12px] my-auto">
                Kontakt aufnehmen
              </span>
              <img src="/navButton.svg" alt="Nav Button" className="mr-[7px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: Burger Menu (visible at ≤1024px) */}
      <div className="lg:hidden">
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          styles={burgerMenuStyles}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-poppins font-normal text-[16px] text-[#212121B2] hover:text-[#0000FF] transition-colors no-underline cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:admin@syn-tech.ch"
            className="flex items-center justify-center rounded-full bg-[#0000FF] border border-[#5235F6] py-[10px] px-[20px] mt-4 no-underline transition-transform hover:scale-105"
          >
            <span className="font-poppins font-medium text-white text-[14px]">
              Kontakt aufnehmen
            </span>
          </a>
        </Menu>
      </div>
    </nav>
  );
};

export default Navigation;
