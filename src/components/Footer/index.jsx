import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
      <p className="footer_title">© 2025 CHAIBA Elham, Portfolio, tous droits réservés.</p>
      <div className="footer_icons">
        <a
          href="https://github.com/ilham-c"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter mon profil Github"
        >
          <a href="/cgv.pdf" target="_blank">CGV</a>
          <img src="/assets/snap.svg" alt="" className="icon"/>
        </a>
         <a
          href="https://www.linkedin.com/in/elham-chaiba-552275368/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter mon profil Linkedin"
        >
          <img src="/assets/insta.svg" alt="" className="icon"/>
        </a>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
