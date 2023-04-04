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
    <div className="contact text-dark">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required className="form-input" />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required className="form-input"></textarea>
        </label>
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
}
