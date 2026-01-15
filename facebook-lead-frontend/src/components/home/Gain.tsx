// import React from 'react'
import { PiArrowElbowLeft } from "react-icons/pi";
import '../../styles/home/Gain.css'
import ai from '../../assets/home/AI.png'
const Gain = () => {
  return (
   <section className="ai">
      <div className="ai-container">

        
        <div className="ai-left">
          <span className="ai-tag">AI ANSWERS</span>

          <h2 className="ai-title">
            Gain <span>full control</span> of your <br />
            information docs and <br />
            many more
          </h2>

          <ul className="ai-list">
            <li><PiArrowElbowLeft />Create a personalized knowledge base on your own Braine library</li>
            <li><PiArrowElbowLeft />Use your trusted sources to find the answers you need</li>
            <li><PiArrowElbowLeft />Stay in the know with AI Q&amp;A and semantic search</li>
          </ul>

          <button className="ai-btn">Know more</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ai-right">
          <img
            src={ai}   
            alt="AI Interface"
            className="ai-image"
          />
        </div>

      </div>
    </section>
  )
}

export default Gain
