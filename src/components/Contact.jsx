export default function Contact() {
    return (
      <div className="contact text-dark">
        <h3>Contact Us</h3>
        <form>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }