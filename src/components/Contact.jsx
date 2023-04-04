
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log({
      email: formData.get("email"),
      message: formData.get("message"),
    });
    alert("Your message has been sent!");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h3 className="contact-heading text-center">Contact Us</h3>
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">
          <span className="contact-span">Your email:</span>
          <input
            type="email"
            name="email"
            required
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="contact-label">
          <span className="contact-span">Your message:</span>
          <textarea
            name="message"
            required
            className="contact-input contact-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}



