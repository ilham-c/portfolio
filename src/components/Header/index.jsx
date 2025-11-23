import "./style.css";

function Header() {
  return (
    <header>
      <div className="header_title">
        <p className="name">CHAIBA Elham,</p>
        <p className="job">Développeuse web</p>
      </div>  
      <nav className="header_nav">
        <ul className="header_titles">
          <li className="navItem"><a href="#home">Accueil</a></li>
          <li className="navItem"><a href="#AboutMe">A propos </a></li>
          <li className="navItem"><a href="#home">Projets </a></li>
          <li className="navItem"><a href="#Contact">Contact </a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
