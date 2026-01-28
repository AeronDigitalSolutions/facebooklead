
// import React from "react";
import "../../styles/home/HowIt.css";

const HowIt = () => {
  return (
    <section className="howit-section">

      <div className="orbit-wrapper">

       
        <div className="step-card step-1">
          <span className="step-badge">Step 01</span>
          <h4>Algorithm processing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa.
          </p>
        </div>

        
        <div className="step-card step-2">
          <span className="step-badge">Step 02</span>
          <h4>Input & data gathering</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa.
          </p>
        </div>

        
        <div className="step-card step-3">
          <span className="step-badge">Step 03</span>
          <h4>Content generation & refinement</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa.
          </p>
        </div>

        
        <div className="solar">
          <i className="neptune"></i>

          <div className="circle-content">
            <span className="tag">HOW IT WORKS</span>
            <h2>
              Braine typically operate <br /> in three steps
            </h2>
            <button>Know more</button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default HowIt;

