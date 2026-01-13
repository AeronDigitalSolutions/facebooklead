import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import '../../styles/Contact/Call.css'

const Call = () => {
  return (
     <section className="contact-section">
      <div className="contact-grid">

        
        <div className="contact-card dark">
          <div className="icon-wrapper">
            <FaPhoneAlt  size={22}/>
          </div>

          <h3>Call us on</h3>
          <p>+415-864-8728</p>
          <p>+415-864-8729</p>
        </div>

        
        <div className="contact-card primary">
          <div className="icon-wrapper white">
            <IoMdMail size={22}/>

          </div>

          <h3>Email us</h3>
          <p>support@braine.com</p>
          <p>contact@braine.com</p>
        </div>

        
        <div className="contact-card dark">
          <div className="icon-wrapper">
            <FaLocationDot size={22}/>
          </div>

          <h3>Our location</h3>
          <p>
            1426 Center StreetBend, OR <br />
            97702, California, USA
          </p>
        </div>

      </div>
    </section>
  )
}

export default Call
