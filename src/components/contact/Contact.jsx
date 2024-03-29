/* eslint-disable no-undef */
import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Message,
  Location,
  Contacts,
  Design,
  ContactDesign,
} from "../Icons";

const Contact = () => {
  const serviceKey = import.meta.env.VITE_SERVICE_ID;
  const templateKey = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("Message sent successfully Thank you🙂");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error sending message please try again, Thank you🙂");
        }
      );
  };
  return (
    <div className="contact__section">
      <img src={Design} alt="Side design" className="contact-side-design" />
      <div className="container">
        <img src={Contacts} alt="design" className="abs" id="hide" />
        <div className="contact__section--header">
          <h4>
            Let’s Discuss Your <span className="blue-text">Project</span>
          </h4>
          <p>
            Let’s make something new, different and more meaningful or make
            <span className="block">thing more visual or conceptual</span>
          </p>
        </div>
        <div className="contact__section--content">
          <div className="contact__section--content--sidebar">
            <a href="tel:+2348113417474" className="call-me">
              <div className="img">
                <img src={Phone} alt=" Phone icon" />
              </div>
              <div className="information">
                <p className="label">Call me</p>
                <p>+234-811-3417-474</p>
              </div>
            </a>
            <a href="mailto:Augustine32fg@gmail.com" className="Email-me">
              <div className="img">
                <img src={Message} alt="Email icon" />
              </div>
              <div className="information">
                <p className="label">Email me</p>
                <p>Augustine32fg@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/6%C2%B036'04.5%22N+3%C2%B021'24.2%22E/@6.6012573,3.3547803,17z/data=!3m1!4b1!4m4!3m3!8m2!3d6.6012533!4d3.3567263?entry=ttu"
              className="Address"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img">
                <img src={Location} alt="Location icon" />
              </div>
              <div className="information">
                <p className="label">Address</p>
                <p>Ikeja, Lagos, Nigeria.</p>
              </div>
            </a>
          </div>
          <div className="contact__section--content--form">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="flex">
                <label>
                  <input
                    className="input"
                    type="text"
                    name="user_name"
                    required
                  />
                  <span>Fullname</span>
                </label>

                <label>
                  <input
                    className="input"
                    type="email"
                    name="user_email"
                    required
                  />
                  <span>Email</span>
                </label>
              </div>

              <div className="flex">
                <label>
                  <input
                    className="input"
                    type="tel"
                    name="phone_number"
                    required
                  />
                  <span>Phone number</span>
                </label>

                <label>
                  <input className="input" type="text" name="Topic" required />
                  <span>Topic</span>
                </label>
              </div>
              <label>
                <textarea
                  className="textarea"
                  name="message"
                  rows="9"
                  cols="50"
                  required
                ></textarea>
                <span>Message</span>
              </label>
              <input type="submit" value="Submit" className="submit" />
            </form>
          </div>
        </div>
      </div>
      <img
        src={ContactDesign}
        alt="Side design"
        className="contact-side-design2"
      />
    </div>
  );
};

export default Contact;
