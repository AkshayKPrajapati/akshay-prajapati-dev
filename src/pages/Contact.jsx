import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("description");

    const emailBody = `Hello Akshay,

Message:
${message}

Best Regards,
Name: ${name}
Phone: ${phone || "Not provided"}
Email: ${email}`.trim();

    const mailtoUrl =
      `mailto:akshay.prajapati2552@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    setFormStatus(
      "Your email client should open now. Please send the prepared message."
    );

    form.reset();

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-content">
        <div className="section-label">07 / CONTACT</div>

        <div className="contact-heading">
          <div>
            <h2>
              Let's work
              <br />
              <span>together.</span>
            </h2>
          </div>

          <p>
            Have a project, opportunity, or idea you'd like to discuss? Fill
            out the form and I'll get back to you as soon as possible.
          </p>
        </div>


        {/* action="https://formsubmit.co/akshay.prajapati2552@email.com" method="POST" */}
        <form className="contact-form" onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project / Job opportunity"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Message</label>

            <textarea
              id="description"
              name="description"
              rows="7"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message
            <span>↗</span>
          </button>

          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>

        <div className="contact-bottom">
          <a href="mailto:akshay.prajapati2552@gmail.com">
            akshay.prajapati2552@gmail.com
          </a>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/akshayprajapati2552/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/AkshayKPrajapati"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
