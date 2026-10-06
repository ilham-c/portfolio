import { useEffect, useState } from 'react';
import './style.css';

function Hero() {
  const fullText = "La naissance de votre projet commence ici";
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="hero_section">
      <div className="hero_overlay"></div>
      <div className="hero_bottom">
        <h1 className="hero_title">
          {displayed}<span className="hero_cursor">|</span>
        </h1>
        <p className="hero_subtitle">
          Sites vitrines sur mesure pour artisans, associations et micro-entreprises
        </p>
       <button 
  className="hero_cta"
  onClick={() => document.getElementById('Services').scrollIntoView({ behavior: 'smooth' })}
>
  Démarrer mon projet
</button>
      </div>
    </section>
  );
}

export default Hero;