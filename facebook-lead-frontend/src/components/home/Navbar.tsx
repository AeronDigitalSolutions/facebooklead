import { useState } from "react";
import "../../styles/home/Navbar.css";
import logo from "../../assets/home/logo (1).svg";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>

      
      <nav className="nav-menu desktop">
        <div className="nav-item">
          Home <span className="plus">×</span>
          <div className="dropdown">
            <a href="#">HomePage 01</a>
            <a href="#">HomePage 02</a>
            <a href="#">HomePage 03</a>

            {/* <div className="submenu">
              <span>
                Header Style <span className="arrow">›</span>
              </span>
              <div className="submenu-box">
                <a href="#">Header 01</a>
                <a href="#">Header 02</a>
                <a href="#">Header 03</a>
              </div>
            </div> */}
          </div>
        </div>

        <a className="nav-item" href="#">About</a>

        <div className="nav-item">
          Pages <span className="plus">+</span>
          <div className="dropdown">
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
            <a href="#">Team</a>
          </div>
        </div>

        <div className="nav-item">
          Services <span className="plus">+</span>
          <div className="dropdown">
            <a href="#">Services</a>
            <a href="#">Service Details</a>
          </div>
        </div>

        <a className="nav-item" href="#">Contact</a>
      </nav>

      <div className="nav-actions desktop">
        <button className="login-btn">Login</button>
        <button className="join-btn">Join now</button>
      </div>

      <button className="hamburger" onClick={() => setOpen(true)}>
        <HiOutlineMenuAlt3 />
      </button>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <HiX />
        </button>

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Services</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>

        <div className="mobile-actions">
          <button  className="login-btn">Login</button>
          <button className="join-btn">Join now</button>
        </div>
      </div>
    </header>
  );
}
