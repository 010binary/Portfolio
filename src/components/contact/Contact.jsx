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
          <div className="Email me">
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
                <input
                  required=""
                  placeholder=""
                  type="text"
                  className="input"
                />
                <span>first name</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  className="input"
                />
                <span>last name</span>
              </label>
            </div>

            <label>
              <input
                required=""
                placeholder=""
                type="email"
                className="input"
              />
              <span>email</span>
            </label>

            <label>
              <input required="" type="tel" placeholder="" className="input" />
              <span>contact number</span>
            </label>
            <label>
              <textarea
                required=""
                rows="3"
                placeholder=""
                className="input01"
              ></textarea>
              <span>message</span>
            </label>

            <button className="fancy" href="#">
              <span className="top-key"></span>
              <span className="text">submit</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
