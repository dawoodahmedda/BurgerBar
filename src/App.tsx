import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/sections/Menu";
import Gallery from "./components/sections/Gallery";
import Locate from "./components/sections/Locate";
import Contact from "./components/layout/Contact";
import Hero from "./components/sections/Hero"; // <-- import Hero

import burgerBg1 from "./assets/images/burger4.jpg";
import burgerBg2 from "./assets/images/burger5.jpg";

import "./App.css";

function App() {
  const images = [burgerBg1, burgerBg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Optional background slideshow behind everything */}
      <div
        className="background"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />

      <Navbar />

      
      <section id="hero" className="section">
        <Hero />
      </section>
      

      <section id="menu" className="section">
        <Menu />
      </section>

      <section id="gallery" className="section">
        <Gallery />
      </section>

      <section id="locate" className="section">
        <Locate />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <footer className="footer">
        <p>© 2026 Cargo Burger Bar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
