// import React from 'react'
import '../../styles/home/WhyChoose.css'
import { FaInstagram } from "react-icons/fa";
const WhyChoose = () => {
  return (
     <section className="why">
      <p className="why-tag">WHY CHOSE US</p>

      <h2 className="why-title">
        Reason to chose our <br />
        <span>platform</span>
      </h2>

      <div className="why-cards">
        <div className="why-card">
          <FaInstagram className="why-icon" />
          <h3>8,000+</h3>
{/* <div className="loader"></div> */}

          <p>
            More than 8,000 customers <br />
            have experimented with Kafkai
          </p>
        </div>

        <div className="why-card">
          <FaInstagram className="why-icon" />
          <h3>500,000+</h3>
          <p>
            More than 8,000 customers <br />
            have experimented with Kafkai
          </p>
        </div>

        <div className="why-card">
          <FaInstagram className="why-icon" />
          <h3>200,000+</h3>
          <p>
            More than 8,000 customers <br />
            have experimented with Kafkai
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
