// import React from 'react'
import Slider from "react-slick";
import heroImg from '../../assets/home/image-1 (1).png'
import '../../styles/home/hero.css'
import '../../styles/home/React.css'
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
     const settings = {
    // dots: true,
    infinite: true,
      autoplay: true,
    speed: 500,
    slidesToShow: 1,
     arrows: false,   
    slidesToScroll: 1
  };
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div className="slider-container" style={{background:'#7b2cff'}}>
      <Slider {...settings}>
        <section className="hero">
      <div className="hero-container">
        <div className="hero-left" data-aos="fade-up-right">
          <span className="badge">👋 AI makes content fast & easy</span>

          <h1>
            Crafting digital <br />
            brilliance <span>AI-Driven</span> <br />
            copywriting
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Ut et massa mi. Aliquam in hendrerit urna.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get started free</button>
            
            <button className="btn-play" > <a href='https://youtu.be/ZmcBC9-wAXM?si=8tTB4wIxt1v_Aue0'><span>▶</span></a>
              {/* <span>▶</span> */}
            </button>
          </div>
        </div>

      
        <div className="hero-right" data-aos="fade-right"
  data-aos-duration="2000"
  data-aos-easing="ease-in-out">
          <img src={heroImg} alt="Hero" />
          <div className="efficiency-card">
            <h4>↑ 90%</h4>
            <p>efficiency</p>
          </div>

          {/* <div className="graph-card">
            <h3>Annual Goals</h3>
              <img src={graph} alt='graph'/>
            <div className="graph"></div>
          </div> */}
        </div>

      </div>
    </section>
        {/* <div>
          <h3>2</h3>
        </div> */}
         <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="badge">👋 AI makes content fast & easy</span>

          <h1>
            Crafting digital <br />
            brilliance <span>AI-Driven</span> <br />
            copywriting
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Ut et massa mi. Aliquam in hendrerit urna.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get started free</button>
            
            <button className="btn-play" > <a href='https://youtu.be/ZmcBC9-wAXM?si=8tTB4wIxt1v_Aue0'><span>▶</span></a>
              {/* <span>▶</span> */}
            </button>
          </div>
        </div>

      
        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
          <div className="efficiency-card">
            <h4>↑ 90%</h4>
            <p>efficiency</p>
          </div>

          {/* <div className="graph-card">
            <h3>Annual Goals</h3>
              <img src={graph} alt='graph'/>
            <div className="graph"></div>
          </div> */}
        </div>

      </div>
    </section>
     <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="badge">👋 AI makes content fast & easy</span>

          <h1>
            Crafting digital <br />
            brilliance <span>AI-Driven</span> <br />
            copywriting
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Ut et massa mi. Aliquam in hendrerit urna.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get started free</button>
            
            <button className="btn-play" > <a href='https://youtu.be/ZmcBC9-wAXM?si=8tTB4wIxt1v_Aue0'><span>▶</span></a>
              {/* <span>▶</span> */}
            </button>
          </div>
        </div>

      
        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
          <div className="efficiency-card">
            <h4>↑ 90%</h4>
            <p>efficiency</p>
          </div>

          {/* <div className="graph-card">
            <h3>Annual Goals</h3>
              <img src={graph} alt='graph'/>
            <div className="graph"></div>
          </div> */}
        </div>

      </div>
    </section>
        {/* <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div> */}
     
      </Slider>
    </div>
  )
}

export default Hero
