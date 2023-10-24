import style from "./ContactForm.module.scss";

const ContactForm = (props) => {
  return (
    <div className={style.contact_form}>
      <h3 className={`${style.contact_form__title} ff-secondary fw-bold`}>
        Write to Us
      </h3>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Full Name" />
      </div>
      <div className="form-group">
        <input
          type="number"
          inputMode="numeric"
          className="form-control"
          placeholder="Phone Number"
        />
        <span className="form-error">Invalid phone number</span>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
        />
        <span className="form-error">Invalid email address</span>
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control"
          placeholder="Your Message"
        />
      </div>
      <button className="btn btn-primary w-100">SEND MESSAGE</button>
    </div>
  );
};

export default ContactForm;
