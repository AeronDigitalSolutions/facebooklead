import { useState } from "react";
import '../../styles/home/Pricing.css'
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="pricing">
      <span className="pricing-tag">OUR PRICING</span>
      <h2 className="pricing-title">
        Join for <span>free</span> Today
      </h2>

      {/* Toggle */}
      <div className="toggle">
        <button
          className={plan === "monthly" ? "active" : ""}
          onClick={() => setPlan("monthly")}
        >
          Monthly
        </button>
        <button
          className={plan === "yearly" ? "active" : ""}
          onClick={() => setPlan("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* MONTHLY BOXES */}
      {plan === "monthly" && (
        <div className="cards fade">
          {/* <div className="card">
            <h4>Starter</h4>
            <p>Up to 2,000 words / mo</p>
            <hr></hr>
            <h1>$3<span>/mo</span></h1>
            <button>Start 1 month free trial</button>
          </div> */}
           {/* <div className="pricing-card">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>

          <div className="card active-card">
            <h4>Professional</h4>
            <p>Up to 10,000 words / mo</p>
            <hr></hr>
            <h1>$9<span>/mo</span></h1>
            <button className="primary">Start 1 month free trial</button>
          </div>

          <div className="card">
            <h4>Enterprise</h4>
            <p>Up to 10,000 words / mo</p>
            <hr></hr>
            <h1>$18<span>/mo</span></h1>
            <button>Start 1 month free trial</button>
          </div> */}

          <div className="pricing-card">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>

    <div className="pricing_active-card ">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>
 <div className="pricing-card">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>
    
        </div>
      )}

      {/* YEARLY BOXES */}
      {plan === "yearly" && (
        <div className="cards fade">
        <div className="pricing-card">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>

         <div className="pricing_active-card ">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>

         <div className="pricing-card">
      <h3 className="plan-title">Starter</h3>
      <p className="plan-subtitle">Up to 2,000 words / mo</p>

      <div className="divider"></div>

      <div className="price-row">
        <span className="price">$3</span>
        <span className="per">/mo</span>
        <span className="note">*Get Braine tailored</span>
      </div>

      <button className="trial-btn">Start 1 month free trail</button>

      <ul className="features">
        <li><FaCheck /> Up to 10,000 words</li>
        <li><FaCheck /> Access to basic tools</li>
        <li><FaCheck /> Access to AI copywriting tools</li>
        <li><FaCheck /> Email support only</li>
        <li><FaCheck /> Advance 700+ tools</li>
      </ul>
    </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
