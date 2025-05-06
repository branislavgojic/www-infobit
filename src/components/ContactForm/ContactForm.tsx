import styles from "./ContactForm.module.scss";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const sending = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_8097j1o",
        "template_lo1gbbn",
        formRef.current,
        "IQY6XdJksHp7YmZGO"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitted(true);
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={styles.section}>
      <div className={`${styles.text} ${styles.cell}`}>
        <div>
          <h1>Request a Consultation</h1>
        </div>
        <div>
          <p>
            Connect with our team to discuss your software development
            requirements.
          </p>
        </div>
      </div>
      <section id="contact-form" className={`${styles.wrapper} ${styles.cell}`}>
        {submitted ? (
          <div className={styles.success}>
            ✅ Thank you! Your message has been successfully sent.
            <br />
            We will get back to you as soon as possible.
          </div>
        ) : (
          <form
            ref={formRef}
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First name*"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last name*"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address*"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number*"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                rows="5"
                required
                minLength={10}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default ContactForm;
