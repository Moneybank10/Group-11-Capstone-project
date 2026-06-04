import React, { useState } from "react";
import "./contactform.css";

function ContactForm() {
  const [status, setStatus] = useState("");
  const [charCount, setCharCount] = useState(100);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value.trim();
    const phoneNumber = e.target.phoneNumber.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    try {
      const formData = new URLSearchParams();

      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        e.target.reset();
        setCharCount(100);
      } else {
        setStatus("Submission failed.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Have Questions About Planetary Science?</h2>

          <p>
            Interested in learning more about space, astronomy, or how
            planetary data is collected and analyzed?
            <br />
            Reach out and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label>
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Phone Number<span>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Please enter a valid phone number."
                required
              />
            </div>

            <div className="form-group">
              <label>
                Message<span>*</span>
              </label>

              <textarea
                name="message"
                maxLength="100"
                placeholder="Enter your message"
                onChange={(e) =>
                  setCharCount(100 - e.target.value.length)
                }
                required
              ></textarea>

              <small>{charCount} characters</small>
            </div>

          </div>

          <button type="submit" className="submit-btn">
            Submit <span className="arrow">›</span>
          </button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;