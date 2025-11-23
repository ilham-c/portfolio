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
    <div className="contact_container">
      <h2>Vous pouvez me contactez via ce formulaire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
