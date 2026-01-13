// src/components/layout/Navbar.tsx
import React from "react";
import "./Navbar.css";

interface NavbarProps {
  onNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => onNavClick("Home")}>Home</li>
        <li onClick={() => onNavClick("Menu")}>Menu</li>
        <li onClick={() => onNavClick("Gallery")}>Gallery</li>
        <li onClick={() => onNavClick("Contact")}>Contact</li>
      </ul>
      <div>
        <button>IT</button>
        <button>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
