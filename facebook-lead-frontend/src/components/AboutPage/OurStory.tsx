import '../../styles/aboutpage/OurStory.css'
import storyImg from '../../assets/About/story.png'
const OurStory = () => {
  return (
    <section className="story-section">
      <div className="story-container">
       
        <div className="story-image">
          <img src={storyImg} alt="Our Story" />
        </div>

       
        <div className="story-content">
          <span className="story-tag">OUR STORY</span>

          <h2 className="story-title">
            Navigating the frontier of <br />
            our <span>intelligence</span>
          </h2>

          <p>
            The narrative unfolds as we delve into the inception of our company,
            tracing the roots of our vision for a future intertwined with
            artificial intelligence. Through the lens of this captivating
            chronicle, readers will witness the trials and triumphs that have
            shaped the story weaves together the intricate threads of innovation.
          </p>

          <p>
            Through anecdotes and case studies, readers will witness the tangible
            difference our innovations make in fields ranging from healthcare and
            finance to education and beyond.
          </p>

          <button className="story-btn">Know more</button>
        </div>
      </div>
    </section>
  )
}

export default OurStory
