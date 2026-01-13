// src/components/layout/Navbar.tsx
import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <div>
        <button>IT</button>
        <button>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
