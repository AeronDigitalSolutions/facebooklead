// import React from 'react'
import Slider from "react-slick";
import img from '../../assets/home/author-1.png';
import '../../styles/home/Testimonials.css'
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
//     const settings = {
//   dots: false,
// arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//    autoplay: true,
//   autoplaySpeed: 1000,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 640,
//       settings: {
//         slidesToShow: 1
//       }
//     }
//   ]
// };
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

  return (
    <>
  <section className="testimonials">
     
      <span className="testimonials-tag">TESTIMONIALS</span>

      <h2 className="testimonials-title">
        What our respectable <br />
        <span>clients says</span>
      </h2>
           <div className="slider-container">
      <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div> */}
        
          <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_testimonial'>
            <img src={img} alt='img'/>
            <div className='right_testimonial'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>
        

     <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_testimonial'>
            <img src={img} alt='img'/>
            <div className='right_testimonial'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>


         <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_testimonial'>
            <img src={img} alt='img'/>
            <div className='right_testimonial'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>

          <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_testimonial'>
            <img src={img} alt='img'/>
            <div className='right_testimonial'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>

         <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_testimonial'>
            <img src={img} alt='img'/>
            <div className='right_testimonial'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div> <div className="testimonial-card">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_testimonial'>
            <img src={img} alt='img'/>
            <div className='right_testimonial'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </section>
    </>
  )
}

export default Testimonials
