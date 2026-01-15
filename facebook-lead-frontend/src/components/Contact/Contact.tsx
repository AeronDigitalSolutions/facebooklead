import '../../styles/Contact/Contact.css'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import Call from './Call'
import Form from './Form'
import Map from './Map'
import Cta from '../home/CTA'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <Navbar/>
   <section className="contact-hero">
    
      <span className="blob blob-left"></span>
      <span className="blob blob-right"></span>

      <div className="hero-content">
        <h1>Contact Us</h1>

        <div className="breadcrumb">
          <Link className='link' to='/'>Home</Link>
          <span className="arrow">›</span>
          <span className="active">Contact Us</span>
        </div>
      </div>
    </section>
    <Call/>
    <Form/>
    <Map/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default Contact
