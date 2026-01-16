import "./Locate.css";

const Locate = () => {
  return (
    <section className="locate-section">
      <h2 className="locate-title">How to Find Us</h2>

      <div className="locate-container">
        {/* Left side: Address & Hours */}
        <div className="locate-left">
          <div className="locate-block">
            <h3>📍 Address</h3>
            <p>
              Corso Vittorio Emanuele, 82<br />
              84121 Salerno (SA)
            </p>
          </div>

          <div className="locate-block">
            <h3>⏰ Opening Hours</h3>
            <p className="highlight">
              11:00 AM – Midnight<br />
            
            </p>
          </div>
        </div>

        {/* Right side: Map */}
        <div className="locate-right">
          <div className="locate-block map-block">
            <h3>🗺 Location on Map</h3>

            <a
              href="https://www.google.com/maps/place/Corso+Vittorio+Emanuele,+84,+84121+Salerno+SA,+Italy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                title="Cargo Burger Bar Location"
                className="google-map"
                src="https://www.google.com/maps?q=Corso+Vittorio+Emanuele,+84,+84121+Salerno+SA&output=embed"
                loading="lazy"
              ></iframe>
            </a>

            <p className="map-hint">Click on the map to open in Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locate;
