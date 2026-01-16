import "./Gallery.css";
import burger2 from "../../assets/images/burger5.jpg";
import pasta1 from "../../assets/images/pasta.jpg";
import steak from "../../assets/images/steak.jpg";
import wrap from "../../assets/images/wrap.jpg";
import patatine from "../../assets/images/patatine.jfif";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Left: Text */}
        <div className="gallery-left">
          <h2 className="gallery-title">Who We Are</h2>

          <p>
            <strong>Cargo Burger Bar</strong> is a restaurant located in Salerno,
            born from the desire to offer a varied and high-quality menu in a casual
            and welcoming atmosphere.
          </p>

          <p>
            Alongside our burgers, prepared with select ingredients and meticulous
            attention to detail, we also offer poke bowls, fresh salads, and select
            cuts of meat.
          </p>

          <p>
            Our goal is simple: to make every customer feel at home, offering
            carefully crafted, flavorful dishes that cater to a variety of tastes.
          </p>

          <p className="highlight">
            Whether it's a lunch break or dinner with friends, at Cargo there's
            always something delicious to share!
          </p>
        </div>

        {/* Right: Images */}
        <div className="gallery-right">
          <img src={burger2} alt="Burger" />
          <img src={pasta1} alt="Pasta" />
          <img src={steak} alt="Steak" />
          <img src={wrap} alt="Wrap" />
          <img src={patatine} alt="Patatine" className="large-img" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
