import './style.css';

function AboutMe(){
  return (
    <section id='about_section'>
      <div className='about_container'>
        <img src="\assets\becher2.webp" alt="C'est une fiole rose qui dégage des fumées HTML, CSS, elle symbolise mon parcours de laborantine vers le développement web"
        className='about_img' />
        <div className='about_text_block'>
        <h2 className='about_title'>A propos de moi</h2>
        <p className='about_text'>
         Moi, c'est Elham, développeuse front-end junior, diplômée du parcours Intégrateur Web chez Openclassrooms.
         J'ai passé plusieurs années à exercer le métier de laborantine, où j'ai cultivé la rigueur, l'organisation et l'esprit d'équipe: des qualités qui me servent aujourd'hui dans le développement web,
         un domaine qui me passionne et dans lequel je m’épanouis pleinement.
         Ce qui m'anime, c'est de créer des interfaces modernes, accessibles
         et agréables à utiliser. Curieuse et motivée, je me forme en continu pour enrichir mes compétences et rester à jour sur 
         les technologies du web. Mon objectif est d'intégrer une équipe bienveillante où je pourrai poursuivre ma progression et mettre
         mes compétences au service de projets inspirants.        
        </p>
        </div>
      </div>
   </section>
  );
}
export default AboutMe;