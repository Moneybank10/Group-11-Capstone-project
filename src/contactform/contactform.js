import React, { useState } from "react";
import "./contactform.css";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value.trim();
    const phoneNumber = e.target.phoneNumber.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Message:", message);

    try {
      const formData = new URLSearchParams();

      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("PASTE_API_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const responseText = await response.text();

      console.log("Response Status:", response.status);
      console.log("Response Text:", responseText);

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        e.target.reset();
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
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>

        <p>{status}</p>
      </form>
    </section>
  );
}

export default ContactForm;