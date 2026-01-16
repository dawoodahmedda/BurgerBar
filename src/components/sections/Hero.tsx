import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/src/assets/images/burgerimage.jpg",
  "/src/assets/images/burgerimage2.jpg",
  "/src/assets/images/burgerimage3.jpg",
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
        <h1>Welcome to Cargo Burger Bar</h1>
        <p>
          Located in the heart of Salerno, Italy, Cargo Burger Bar serves the best
          gourmet burgers, fresh salads, pasta dishes, and homemade sides. Every
          meal is crafted with quality ingredients and passion for flavor.
        </p>

        <p>
          Enjoy a casual dining experience, fast service, and friendly atmosphere.
          Whether you're craving juicy burgers, fresh wraps, or crispy fries,
          Cargo Burger Bar has something for everyone!
        </p>

        <p>
          Open every day from 11:00 AM to 12:00 midnight. Perfect for lunch, dinner,
          or a late-night snack. Dine in, take out, or order online!
        </p>

        <p>
          Follow us on Instagram and Facebook for daily specials, promotions, and
          updates. Discover why Cargo Burger Bar is the go-to spot for food lovers
          in Salerno.
        </p>

        
      </div>
    </section>
  );
};

export default Hero;
