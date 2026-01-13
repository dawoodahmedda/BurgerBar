import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/sections/Menu";

import burgerBg1 from "./assets/images/burger4.jpg";
import burgerBg2 from "./assets/images/burger5.jpg";

import "./App.css";

function App() {
  const images = [burgerBg1, burgerBg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Track which section is active
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <Navbar onNavClick={setActiveSection} />

      <div className="section-content">
        {activeSection === "Home" && (
          <div className="home-section">
            <h1>Welcome to BurgerBar</h1>
          </div>
        )}

        {activeSection === "Menu" && <Menu />}

        {activeSection === "Gallery" && <div>Gallery Section Coming Soon</div>}
        {activeSection === "Contact" && <div>Contact Section Coming Soon</div>}
      </div>
    </div>
  );
}

export default App;
