import React from "react";
import "./ContactUs.css"; // Import the CSS file

const ContactUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  setTimeout(() => {
    scrollToTop();
  }, 10);

  return (
    <div className="contact-us-container reversed-layout">
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form
          action="https://formsubmit.co/vivekchahar1960@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
  <label htmlFor="class">Class:</label>
  <select id="class" name="class" className="custom-select" required>
    <option value="">Select Class</option>
    {[...Array(12)].map((_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
  </select>
</div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Feel free to reach out using the details
          below.
        </p>
        <div className="contact-info">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.4706562292376!2d77.04018717550568!3d28.765217475592504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d070059d42753%3A0xcdba2a72c2cb3344!2sSaatvik%20Study%20Station!5e0!3m2!1sen!2sin!4v1747036128631!5m2!1sen!2sin"
              height="300"
              width="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Google Maps"
            ></iframe>
          </div>
          <p className="address">
            <strong>Address:</strong> 400 , SultanPur Dabas , N-delhi 110039
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="mail">
            <strong>Email:</strong>
            <a href="mailto:sss@saatvikstudies.com"> sss@saatvikstudies.com</a>
          </p>
          <p className="phone">
            <strong>Phone:</strong>
            <a href="tel:9773888338">+91 9773888338 </a>,
            <a href="tel:8383030389">+91 8383030389</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
