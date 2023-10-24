import Image from "next/image";
import style from "./DonateForm.module.scss";
import { Form } from "react-bootstrap";

const DonateForm = (props) => {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={`mx-auto ${style.form} position-relative`}>
          <div className={`stroke ${style.stroke} ${style.stroke_three}`}>
            <Image src="/images/shape1.svg" fill alt="shape" />
          </div>

          <div className={`stroke ${style.stroke} ${style.stroke_five}`}>
            <Image src="/images/shape5.svg" fill alt="shape" />
          </div>

          <h2 class="h2 ff-primary fw-bold mb-4">Donate Now</h2>

          <div className={`mb-4 ${style.form_btn}`}>
            <div className={style.form_btn_item}>
              <input
                name="donation"
                type="radio"
                class="btn-check"
                id="check1"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-sm" for="check1">
                ₹1000
              </label>
            </div>

            <div className={style.form_btn_item}>
              <input
                name="donation"
                type="radio"
                class="btn-check"
                id="check2"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-sm" for="check2">
                ₹1000
              </label>
            </div>
            <div className={style.form_btn_item}>
              <input
                name="donation"
                type="radio"
                class="btn-check"
                id="check3"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-sm" for="check3">
                ₹1000
              </label>
            </div>
            <div className={style.form_btn_item}>
              <input
                name="donation"
                type="radio"
                class="btn-check"
                id="check4"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-sm" for="check4">
                ₹1000
              </label>
            </div>
            <div className={style.form_btn_item}>
              <input
                name="donation"
                type="radio"
                class="btn-check"
                id="check5"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-sm" for="check5">
                ₹1000
              </label>
            </div>
            <div className={style.form_btn_item}>
              <input
                name="donation"
                type="radio"
                class="btn-check"
                id="check6"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary btn-sm" for="check6">
                Other
              </label>
            </div>
          </div>

          <div className={style.form_group}>
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
            />
          </div>

          <div className={style.form_group}>
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
            />
          </div>

          <div className={style.form_group}>
            <input
              type="text"
              placeholder="Email Address"
              className="form-control"
            />
          </div>

          <div className={style.form_group}>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="form-control"
            />
          </div>

          <Form.Check
            type={"checkbox"}
            id={`default1`}
            className="mb-3"
            label={`Make this an anonymous donation`}
          />
          <button className="btn btn-primary w-100">DONATE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;
