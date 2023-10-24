"use client";
import Image from "next/image";
import style from "./ContactUs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import EventForm from "../EventForm";
import EventCard from "../EventCard";
import ContactForm from "../ContactForm";

const ContactUs = (props) => {
  return (
    <section className={style.section}>
      <Container>
        <Row>
          <Col lg={7}>
            <h1 className={`${style.contact_title} h3 ff-secondary fw-bold`}>
              Contact Us
            </h1>
            <p className={`${style.contact_description} p-main`}>
              As the world leader in volunteerism we feel a responsibility to
              unite our broader community, and to use this momentum to become a
              stronger nation.
            </p>
            <div className={style.contact_details}>
              <div className={style.detail_item}>
                <Image
                  src="/images/phone-icon.svg"
                  width={15}
                  height={15}
                  alt=""
                  unoptimized
                />
                <a href="tel:+91 7034543210">+91 7034543210</a>
              </div>
              <div className={style.detail_item}>
                <Image
                  src="/images/mail-icon.svg"
                  width={15}
                  height={15}
                  alt=""
                  unoptimized
                />
                <a href="mailto:admin@keralapravasiassociationtrust.com">
                  admin@keralapravasiassociationtrust.com
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
