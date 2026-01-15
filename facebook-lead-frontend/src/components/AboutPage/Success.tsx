import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import '../../styles/aboutpage/Success.css'
import img from '../../assets/About/author-2.png'
const Success = () => {
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
     <section className="success">
      
      <span className="success-tag">Success Stories</span>

      <h2 className="success-title">
        Our clients share their <br />
          fitness
        <span> journey</span>
      </h2>
           <div className="slider-container">
      <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div> */}
        
          <div className="success-card">
          <div className="star">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_success'>
            <img src={img} alt='img'/>
            <div className='right_success'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>
        

     <div className="success-card">
          <div className="star">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_success'>
            <img src={img} alt='img'/>
            <div className='right_success'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>


         <div className="success-card">
          <div className="star">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_success'>
            <img src={img} alt='img'/>
            <div className='right_success'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>

          <div className="success-card">
          <div className="star">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_success'>
            <img src={img} alt='img'/>
            <div className='right_success'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>

         <div className="success-card">
          <div className="star">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_success'>
            <img src={img} alt='img'/>
            <div className='right_success'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div> <div className="success-card">
          <div className="star">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien
            fringilla, mattis ligula
          </p>
          <div className='footer_success'>
            <img src={img} alt='img'/>
            <div className='right_success'>
                <p>Bob E.Wiggins</p>
                <p style={{color:'gray'}}>Social Media Manger</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </section>
  )
}

export default Success
