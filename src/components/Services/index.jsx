import './style.css';

const services = [
  {
    title: "Site vitrine one-page",
    price: "500€ - 700€",
    description: "Une page unique qui regroupe toutes les informations essentielles : présentation, services, et contact. Idéal pour les artisans, indépendants et petites structures qui veulent une présence en ligne simple, claire et efficace."
  },
  {
    title: "Site vitrine multi-pages",
    price: "800€ - 1200€",
    description: "Un site structuré en plusieurs pages (Accueil, Services, À propos, Contact...) pour présenter votre activité en détail. Parfait pour les associations et entreprises souhaitant offrir une navigation plus complète à leurs visiteurs."
  },
  {
    title: "Optimisation SEO",
    price: "200€ - 300€",
    description: "Audit et optimisation de votre site existant : balises, structure, vitesse de chargement et accessibilité. Améliorez votre visibilité sur Google et attirez davantage de visiteurs qualifiés."
  },
  {
    title: "Maintenance à la demande",
    price: "40€ - 60€ / intervention",
    description: "Mises à jour de contenu, ajout de pages, corrections ou petites modifications. Une solution flexible et sans engagement pour garder votre site à jour."
  }
];

function Services() {
  return (
    <section id="Services">
      <h2 className="services_title">Services</h2>
      <div className="services_grid">
        {services.map((service, index) => (
          <div className="flip_card" key={index}>
            <div className="flip_card_inner">
              <div className="flip_card_front">
                <h3 className="service_title">{service.title}</h3>
                <p className="service_price">{service.price}</p>
              </div>
              <div className="flip_card_back">
                <p className="service_description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="services_note">
        Chaque projet est unique — contactez-moi pour un devis personnalisé et sans engagement.
      </p>
    </section>
  );
}

export default Services;