import '../../styles/aboutpage/Aboutpage.css'
import { Link } from 'react-router-dom'
const AboutP = () => {
  return (
     <section className="about-wrapper">
      <div className="about-container4">
        
        <span className="blob blob-left"></span>
        <span className="blob blob-right"></span>

        
        <div className="about-content">
          <h1>About us</h1>
          <div className="breadcrumb">
            {/* <span>Home</span> */}
            <Link className='link' to='/'>Home</Link>
            <span className="arrow">›</span>
            <span className="active">About us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutP
