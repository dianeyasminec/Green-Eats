// import "./Contact.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log({
      email: formData.get("email"),
      message: formData.get("message"),
    });
  };

  return (
    <div className="contact-container">
      <h3 className="contact-heading">Contact Us</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">
          <span className="contact-span">Your email:</span>
          <input
            type="email"
            name="email"
            required
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          <span className="contact-span">Your message:</span>
          <textarea
            name="message"
            required
            className="contact-input contact-textarea"
          ></textarea>
        </label>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
}

