import  { useEffect } from "react";
import "../../styles/home/About.css";
import aboutImg from "../../assets/home/tabs (1).png";
import { IoStar } from "react-icons/io5";
import AOS from "aos";
import { FaCheck } from "react-icons/fa6";
import "aos/dist/aos.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div
          className="about-image"
          data-aos="fade-right"
        >
          <img src={aboutImg} alt="About us" />

          <div className="button_about_side">
            <button><FaCheck />Terminology</button>
            <button className="discover"> <FaCheck /> Discover</button>
            <button> <FaCheck />Terminology</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="about-content"
          data-aos="fade-left"
        >
          <span className="about-tag">ABOUT US</span>

          <h2>
            Crafting of your digital <br />
            <span>narrative discover</span> our <br />
            journey
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            <span className="highlight"> Pellentesque sit amet </span>
            sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus.
          </p>

          {/* FOOTER */}
          <div className="about-footer">
            <button className="btn-primary">Know more</button>

            <div className="rating">
              <span className="score">4.7</span>
              <div className="stars">
                <IoStar /><IoStar /><IoStar /><IoStar />
                <p>Customer rating</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
