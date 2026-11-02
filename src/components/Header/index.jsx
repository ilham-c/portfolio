import "./style.css";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? "open" : ""}>
      <div className="header_brand">
        <a href="#" className="logo" aria-label="EC Web Design - retour en haut">
          <span className="logo_monogram" aria-hidden="true">
            <span className="logo_e">E</span>
            <span className="logo_c">C</span>
          </span>
          <span className="logo_text">WEB DESIGN</span>
          <span className="logo_line" aria-hidden="true"></span>
        </a>

        {/* <div className="header_title">
          <h1 className="name">CHAIBA Elham,</h1>
          <p className="job">Développeuse web</p>
        </div> */}
      </div>

          {/* Hamburger visible en mobile */}
      <button 
        className="burger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

        <nav className="header_nav">
        <ul className="header_titles">
          {/* <li className="navItem"><a href="#about_section">A propos</a></li> */}
          <li className="navItem"><a href="#Projects">Réalisations </a></li>
          {/* <li className="navItem"><a href="#Skills">Compétences</a></li> */}
          <li className="navItem"><a href="#Services">Services</a></li>
          <li className="navItem"><a href="#Contact">Contact </a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
