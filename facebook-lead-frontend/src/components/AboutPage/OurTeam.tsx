import "../../styles/aboutpage/OurTeam.css";
import team1 from "@/assets/About/team-1.jpg";
import team2 from "@/assets/About/team-2.jpg";
import Slider from "react-slick";

const OurTeam = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,      
    slidesToScroll: 1,
    
    // arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <section className="team-section">
      <div className="team-container">
        
        <div className="team-content">
          <span className="team-tag">OUR TEAM</span>

          <h2 className="team-title">
            Team behind the <br />
            <span>innovation</span>
          </h2>

          <p className="team-desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            Aliquam hendrerit urna. Maecenas vitae mattis tellus.
          </p>
        </div>

       
        <div className="slider-container">
          <Slider {...settings}>
            <div className="team-card">
              <img src={team1} alt="Team member" />
             <h4 className="name">Kirti Rawat</h4>
              <p className="team_desc">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="team-card">
              <img src={team2} alt="Team member" />
                 <h4 className="name">Kirti Rawat</h4>
              <p className="team_desc">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="team-card">
              <img src={team1} alt="Team member" />
                <h4 className="name">Kirti Rawat</h4>
              <p className="team_desc">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="team-card">
              <img src={team2} alt="Team member" />
                 <h4 className="name">Kirti Rawat</h4>
              <p className="team_desc">Lorem ipsum dolor sit amet consectetur</p>
            </div>
            
          </Slider>
        </div>

        
      </div>
    </section>
  );
};

export default OurTeam;
