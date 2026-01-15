// import React from 'react'
import '../../styles/home/Faq.css'
import { IoIosArrowDown } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
const Faq = () => {
  return (
    <section className='question'>
    
      
 <div className='right_conatiner'>
        <p className='name_question'>FAQ</p>

        <h2 className='faq-title'>
          Frequently asked <span>questions</span>
        </h2>

        <p className='text_question'>
          Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus.
          Nullam quis mattis ligula consectetur.
        </p>

        <button className="contact-btn">
          Contact now
          <span className="arrow-icon">
            <FaPhone size={14} />
          </span>
        </button>
      </div>
      <div className="right-panel">
        <details className="accordion-item">
          <summary className="accordion-header" data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" >
            <span className="accordion-number">01.</span>
            <span className="accordion-question">What Services Do You Offer?</span>
            <span className="accordion-icon"><IoIosArrowDown /></span>
          </summary>
          <div className="accordion-body">
            <p>We provide a complete petrol pump management system covering sales, stock, staff, credit, POS, and accounting automation.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-header" data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" >
            <span className="accordion-number">02.</span>
            <span className="accordion-question">How Do You Measure System Performance?</span>
            <span className="accordion-icon"><IoIosArrowDown /></span>
          </summary>
          <div className="accordion-body">
            <p>We track accuracy, real-time sync, stock variance, sales reports, UPI logs, and operational efficiency improvements.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-header" data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" >
            <span className="accordion-number">03.</span>
            <span className="accordion-question">How Long Does It Take to See Results?</span>
            <span className="accordion-icon"><IoIosArrowDown /></span>
          </summary>
          <div className="accordion-body">
            <p>Most pumps experience smoother operations and better control within the first few weeks of using the platform.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-header" data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" >
            <span className="accordion-number">04.</span>
            <span className="accordion-question">How Much Does Your System Cost?</span>
            <span className="accordion-icon"><IoIosArrowDown /></span>
          </summary>
          <div className="accordion-body">
            <p>Pricing is customized based on modules, users, and integrations required for your petrol pump setup.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-header" data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" >
            <span className="accordion-number">05.</span>
            <span className="accordion-question">What Makes Your Platform Different?</span>
            <span className="accordion-icon"><IoIosArrowDown /></span>
          </summary>
          <div className="accordion-body">
            <p>We offer an all-in-one solution with automation, real-time UPI API sync, advanced reports, and reliable support.</p>
          </div>
        </details>
      </div>
    </section>
  )
}

export default Faq
