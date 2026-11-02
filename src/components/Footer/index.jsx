import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <p className="footer_title">© {new Date().getFullYear()} EC Web Design, tous droits réservés.</p>
        <div className="footer_links">
          <div className="footer_icons">
            {/* TODO : remplacer "#" par l'URL de ton profil Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil Instagram"
              className="footer_icon_link"
            >
              <img src="/assets/insta.svg" alt="" className="icon" />
            </a>
            {/* TODO : remplacer "#" par l'URL de ton profil Snapchat */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil Snapchat"
              className="footer_icon_link"
            >
              <img src="/assets/snap.svg" alt="" className="icon" />
            </a>
            {/*
            <a
              href="https://www.linkedin.com/in/elham-chaiba-552275368/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil Linkedin"
              className="footer_icon_link"
            >
              <img src="/assets/linkedin.svg" alt="" className="icon" />
            </a>
            */}
          </div>
          <a
            href="/cgv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_cgv"
          >
            CGV
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
