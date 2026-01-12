// import React from "react";
import "../../styles/home/BlogSection.css";
import Slider from "react-slick";
import new1 from '../../assets/home/news-1.jpg'
import news from '../../assets/home/news-3.jpg'
import news3 from '../../assets/home/news-3.jpg'
const BlogSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="blog_section">
      {/* HEADER */}
      <div className="blog_header">
        <p className="blog_tag">OUR BLOG</p>
        <h2 className="blog_title">
          Read our latest <span>blogs</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="slider-container">
        <Slider {...settings}>

          {/* SLIDE 1 */}
          <div>
            <div className="blog_card">
              <div className="blog_img">
                <img src={new1} alt="new1"/>
              </div>
              <h1>Transforming industries and shaping the future</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis
                tellus. Nullam quis mattis ligula consectetur.
              </p>
              <button>Read more</button>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div>
            <div className="blog_card">
              <div className="blog_img">
                <img src={news} alt="news"/>
              </div>
              <h1>Exploring the cutting-edge of artificial intelligence</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis
                tellus. Nullam quis mattis ligula consectetur.
              </p>
              <button>Read more</button>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div>
            <div className="blog_card">
              <div className="blog_img">
                <img src={news3} alt=" news"/>
              </div>
              <h1>Understanding the basics of artificial intelligence</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis
                tellus. Nullam quis mattis ligula consectetur.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <div>
            <div className="blog_card">
              <div className="blog_img">
                <img src={news} alt="news"/>
              </div>
              <h1>Understanding the basics of artificial intelligence</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis
                tellus. Nullam quis mattis ligula consectetur.
              </p>
              <button>Read more</button>
            </div>
          </div>

          {/* <div>
            <div className="blog_card">
              <div className="blog_img img3"></div>
              <h1>Understanding the basics of artificial intelligence</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis
                tellus. Nullam quis mattis ligula consectetur.
              </p>
              <button>Read more</button>
            </div>
          </div> */}

        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
