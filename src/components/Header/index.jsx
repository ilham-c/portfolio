import "./style.css";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? "open" : ""}>
      <div className="header_title">
        <p className="name">CHAIBA Elham,</p>
        <p className="job">Développeuse web</p>
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
          <li className="navItem"><a href="#AboutMe">A propos </a></li>
          <li className="navItem"><a href="#Projects">Projets </a></li>
          <li className="navItem"><a href="#Skills">Compétences</a></li>
          <li className="navItem"><a href="#Contact">Contact </a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
