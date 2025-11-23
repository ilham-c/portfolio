import './style.css';

function Card({ project }) {
  return (
    <div className='card_container'>
      <div className='card_content'>
        <img src={project.image} alt={project.title} />
        <h2 className='card_title'>{project.title}</h2>
        <p className='card_description'>{project.description}</p>
      </div>
      <div className='card_tools'>
        <ul>
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
