import { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

function Contact() {
  // State du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = ({ target: { name, value } }) =>
    setFormData(prev => ({ ...prev, [name]: value }));

 
  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs
      .send(
        "service_3r2kcew",  
        "template_mg2v8ue",
        formData,        
        "6vFBSiYvKz6VNJBA6"     
      )
      .then(() => {
        alert("Message envoyé !");
        setFormData({ name: "", email: "", message: "" }); // reset du formulaire
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      });
  };

  return (
    <section id="Contact">
    <div className="contact_container">
      <h2>Vous pouvez me contactez via ce formulaire</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="visually_hidden">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <label htmlFor="email" className="visually_hidden">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label htmlFor="message" className="visually_hidden">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
    </section>
  );
}

export default Contact;
