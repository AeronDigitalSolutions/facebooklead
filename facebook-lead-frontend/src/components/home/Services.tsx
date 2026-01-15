import '../../styles/home/Services.css'
import { PiSpeakerSimpleHighBold } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { FaSdCard } from "react-icons/fa";
import { MdRecordVoiceOver } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
      <section className="services">
      <div className="services-header">
        <span className="services-tag">OUR SERVICE</span>
        <h2>
          Experience our latest <br />
          <span>new features</span>
        </h2>
      </div>

      <div className="services-grid">

        <div className="service-card" data-aos="fade-left"
     data-aos-anchor-placement="center-bottom">
          <div className="icon"><PiSpeakerSimpleHighBold /></div>
          <h3>Digital marketers</h3>
          <p>
            Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
            <span className="highlight"> massa mi. Aliquam </span>
            in hendrerit urna..
          </p>
          <div className="card-footer">
            <span className="index">01</span>
            <button>Join now +</button>
          </div>
        </div>

       
        <div className="service-card" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className="icon"><RiNewspaperLine /></div>
          <h3>Content marketers</h3>
          <p>
            Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
            <span className="highlight"> massa mi. Aliquam </span>
            in hendrerit urna..
          </p>
          <div className="card-footer">
            <span className="index">02</span>
            <button>Join now +</button>
          </div>
        </div>


       
        <div className="service-card"data-aos="fade-right"
     data-aos-anchor-placement="center-bottom">
          <div className="icon"><FaRegLightbulb /></div>
          <h3>Founders</h3>
          <p>
            Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
            <span className="highlight"> massa mi. Aliquam </span>
            in hendrerit urna..
          </p>
          <div className="card-footer">
            <span className="index">03</span>
            <button>Join now +</button>
          </div>
        </div>

          
        <div className="service-card" data-aos="fade-right"
     data-aos-anchor-placement="center-bottom">
          <div className="icon"><FaPaintRoller /></div>
          <h3>Copy writer</h3>
          <p>
            Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
            <span className="highlight"> massa mi. Aliquam </span>
            in hendrerit urna..
          </p>
          <div className="card-footer">
            <span className="index">04
            </span>
            <button>Join now +</button>
          </div>
        </div>

          
        <div className="service-card" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className="icon"><MdRecordVoiceOver /></div>
          <h3>SEO pecialists</h3>
          <p>
            Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
            <span className="highlight"> massa mi. Aliquam </span>
            in hendrerit urna..
          </p>
          <div className="card-footer">
            <span className="index">05</span>
            <button>Join now +</button>
          </div>
        </div>

           
        <div className="service-card" style={{background:'#540fafff'}} data-aos="fade-left"
     data-aos-anchor-placement="center-bottom">
          <div className="icon"><FaSdCard /></div>
          <h3>More Services</h3>
          <p>
            Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
            <span className="highlight"> massa mi. Aliquam </span>
            in hendrerit urna..
          </p>
          <div className="card-footer">
            <span className="index">06</span>
            <button>Join now +</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
