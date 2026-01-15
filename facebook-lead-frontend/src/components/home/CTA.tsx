import '../../styles/home/Cta.css'
import cta from '../../assets/home/cta.png'
const Cta = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-card">
        
       
        <div className="cta-left">
          <h1>
            Craft your next great <br />
            <span>content now.</span>
          </h1>

          <button className="cta-btn">Get started free</button>
        </div>

        
        <div className="cta-right">
          {/* <div className="badges">
            <p>classs</p>
          </div> */}

          <img
            className="cta-person"
            src={cta}
            alt="person"
          />
        </div>

      </div>
    </section>
  )
}

export default Cta
