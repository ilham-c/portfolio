import './style.css';

function AboutMe(){
  return (
    <section id='about_section'>
      <div className='about_container'>
        <img src="\assets\becher2.webp" alt="C'est une fiole qui dégage des fumées HTML, CSS"
        className='about_img' />
        <div className='about_text_block'>
        <h2 className='about_title'>A propos de moi</h2>
        <p className='about_text'>
         Moi, c'est Elham, développeuse front-end, diplômée du parcours Intégrateur Web chez Openclassrooms.
         J'ai passé plusieurs années à exercer le métier de laborantine, où j'ai cultivé la rigueur, l'organisation et l'esprit d'équipe: des qualités qui me servent aujourd'hui dans le développement web.
         <br />
         Ce qui m'anime, c'est de créer des interfaces modernes, accessibles
         et agréables à utiliser. Curieuse et motivée, je me forme en continu pour enrichir mes compétences et rester à jour sur 
         les technologies du web.
        </p>
        <p className='about_quote'><em>"Persévérance, secret de tous les triomphes"</em>
          <br />
          <em>Victor Hugo</em>
        </p>
        </div>
      </div>
   </section>
  );
}
export default AboutMe;