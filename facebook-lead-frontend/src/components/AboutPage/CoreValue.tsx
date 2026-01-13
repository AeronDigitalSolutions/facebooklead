import '../../styles/aboutpage/CoreValue.css'
import { IoPersonSharp } from "react-icons/io5";
import { RiLightbulbLine } from "react-icons/ri";
import { SiTransmission } from "react-icons/si";

const CoreValue = () => {
  return (
   <section className="values-section">
      <div className="values-header">
        <span className="values-tag">CORE VALUE</span>
        <h2>  Unveiling our <span>core values</span><br /> for lasting impact.</h2>
      </div>

      <div className="values-cards">
        <div className="value-card">
          <div className="icon-circle"> <IoPersonSharp /></div>
          <h3>People</h3><p>
            The impact of our AI solutions on the broader world forms a central
            theme, highlighting real-world applications and the positive
            changes
          </p>
        </div>

        
        <div className="value-card active">
          <div className="icon-circle white">
            <RiLightbulbLine />
          </div>
          <h3>Innovation</h3>
          <p>
            The impact of our AI solutions on the broader world forms a central
            theme, highlighting real-world applications and the positive
            changes
          </p>
        </div>

        
        <div className="value-card">
          <div className="icon-circle"><SiTransmission /></div>
          <h3>Mission</h3>
          <p>
            The impact of our AI solutions on the broader world forms a central
            theme, highlighting real-world applications and the positive
            changes
          </p>
        </div>
      </div>

      <button className="values-btn">Join braine today</button>
    </section>
  )
}

export default CoreValue
