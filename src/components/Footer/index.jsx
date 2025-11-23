import "./style.css";

function Footer() {
  return (
    <footer className="footer_container">
      <p className="footer_title">© 2025 CHAIBA Elham, Portfolio,tous droits réservés.</p>
      <div className="footer_icons">
        <a
          href="https://github.com/ilham-c"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <img src="/assets/github.svg" alt="Icon de github" className="icon"/>
        </a>
         <a
          href="https://www.linkedin.com/in/elham-chaiba-552275368/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <img src="/assets/linkedin.svg" alt="Icon de linkedin" className="icon"/>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
