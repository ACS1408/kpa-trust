import style from "./VolunteerForm.module.scss";

const VolunteerForm = (props) => {
  return (
    <div className={style.volunteer_form}>
      <h3 className={`${style.volunteer_form__title} ff-secondary fw-bold`}>
        Provide your details
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
      <button className="btn btn-primary w-100">
        I WANT TO BE A VOLUNTEER
      </button>
    </div>
  );
};

export default VolunteerForm;
