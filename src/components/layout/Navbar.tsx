import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollTo("hero")}>Home</li>
        <li onClick={() => scrollTo("menu")}>Menu</li>
        <li onClick={() => scrollTo("gallery")}>Who We Are</li>
        <li onClick={() => scrollTo("locate")}>Locate Us</li>
        <li onClick={() => scrollTo("contact")}>Contact Us</li>

               

      </ul>

      <div>
        <button>IT</button>
        <button>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
