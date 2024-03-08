import "./Contact.scss";
import { Phone, Message, Location } from "../Icons";

const Contact = () => {
  return (
    <div className="contact__section">
      <img src="" alt="" />
      <div className="contact__section--header">
        <h4>
          Let’s Discuss Your <span className="blue-text">Project</span>
        </h4>
        <p>
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="contact__section--content">
        <div className="contact__section--content--sidebar">
          <div className="call-me">
            <div className="img">
              <img src={Phone} alt=" Phone icon" />
            </div>
            <div className="information">
              <p className="label">Call me</p>
              <p>+234-811-3417-474</p>
            </div>
          </div>
          <div className="Email-me">
            <div className="img">
              <img src={Message} alt="Email icon" />
            </div>
            <div className="information">
              <p className="label">Email me</p>
              <p>Augustine32fg@gmail.com</p>
            </div>
          </div>
          <div className="Address">
            <div className="img">
              <img src={Location} alt="Location icon" />
            </div>
            <div className="information">
              <p className="label">Address</p>
              <p>Ikeja, Lagos, Nigeria.</p>
            </div>
          </div>
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
                className="input"
                name="message"
                rows="5"
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
  );
};

export default Contact;
