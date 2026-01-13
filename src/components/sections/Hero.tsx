import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/src/assets/images/burgerimage.jpg",
  "/src/assets/images/burgerimage2.jpg",
  "/src/assets/images/burgerimage3.jpg", // add your 3rd image
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <h1>Welcome to Burger Bar</h1>
        <p>Delicious burgers made fresh every day.</p>
        <button>View Menu</button>
      </div>
    </section>
  );
};

export default Hero;
