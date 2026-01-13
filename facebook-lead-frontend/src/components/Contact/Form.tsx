import '../../styles/Contact/Form.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Form = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-container">

        
        <div className="contact-left">
          <span className="contact-tag">CONTACT ME</span>

          <h2>
            Connect with us for <br />
            <span>assistance</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Ut et massa Aliquam in hendrerit urna.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF size={16} /></a>
            <a href="#"><FaTwitter size={16} /></a>
            <a href="#"><FaYoutube size={16} /></a>
            <a href="#"><IoLogoInstagram size={16} /></a>
          </div>
        </div>

        
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-grid">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <select>
                <option>Select service</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Consultation</option>
              </select>
            </div>

            <textarea placeholder="Type Comment here"></textarea>

            <button type="submit">Send now</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Form
