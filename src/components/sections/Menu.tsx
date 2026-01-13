import React from "react";
import menuPdfEn from "../../assets/menu/menuburgerbarcargoenglish.pdf";
import menuPdfIt from "../../assets/menu/menuburgerbarcargoitalian.pdf";
import "./Menu.css"; // import the CSS file

const Menu: React.FC = () => {
  return (
    <div className="menu-section">
      <h2>Our Menu</h2>

      <div className="menu-buttons">
        <a href={menuPdfEn} target="_blank" rel="noopener noreferrer">
          <button className="menu-btn">English Menu</button>
        </a>

        <a href={menuPdfIt} target="_blank" rel="noopener noreferrer">
          <button className="menu-btn">Italian Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Menu;
