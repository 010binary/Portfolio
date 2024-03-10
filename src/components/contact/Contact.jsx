import "./Contact.scss";
import { Phone, Message, Location, Contacts, Design } from "../Icons";

const Contact = () => {
  return (
    <div className="contact__section">
      <img src={Design} alt="Side design" className="contact-side-design" />
      <div className="container">
        <img src={Contacts} alt="design" className="abs" />
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
            <form className="form">
              <div className="flex">
                <label>
                  <input className="input" type="text" required />
                  <span>Fullname</span>
                </label>

                <label>
                  <input className="input" type="email" required />
                  <span>Email</span>
                </label>
              </div>

              <div className="flex">
                <label>
                  <input className="input" type="tel" required />
                  <span>Phone number</span>
                </label>

                <label>
                  <input className="input" type="text" required />
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
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
