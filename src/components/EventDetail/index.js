"use client";
import Image from "next/image";
import style from "./EventDetail.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import StoryCard from "../StoryCard";
import EventForm from "../EventForm";
import EventCard from "../EventCard";

const EventDetail = (props) => {
  return (
    <section className={style.section}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className={style.event_detail}>
              <h1
                className={`${style.event_detail__title} h3 ff-secondary fw-bold`}
              >
                Blood donation campaign by KPA UAE chapter
              </h1>
              <figure className={`${style.event_detail__image} ratio`}>
                <Image
                  src="/images/event-detail-img.png"
                  fill
                  alt="news-image"
                  sizes="(min-width: 1200px) 50vw, 100vw"
                  quality={90}
                />
              </figure>

              <div className={`${style.event_detail__details}`}>
                <div
                  className={`${style.detail_item} d-flex align-items-center`}
                >
                  <Image
                    src="/images/icon-calender-lg.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <div className={style.detail_item__contents}>
                    <span className={style.item_title}>Event Date</span>
                    <div
                      className={`${style.item_description} ff-secondary fw-semi`}
                    >
                      November 20th, 2023
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.detail_item} d-flex align-items-center`}
                >
                  <Image
                    src="/images/icon-location-lg.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <div className={style.detail_item__contents}>
                    <span className={style.item_title}>Location</span>
                    <div
                      className={`${style.item_description} ff-secondary fw-semi`}
                    >
                      Highway Bridge Auditorium
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.detail_item} d-flex align-items-center`}
                >
                  <Image
                    src="/images/icon-duration-lg.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <div className={style.detail_item__contents}>
                    <span className={style.item_title}>Duration</span>
                    <div
                      className={`${style.item_description} ff-secondary fw-semi`}
                    >
                      12 Hours
                    </div>
                  </div>
                </div>
              </div>
              <div className="admin-content-area">
                <p>
                  The UAE chapter of the Kerala Pravasi Association (KPA) is
                  proud to announce its upcoming Blood Donation Camp, scheduled
                  for November 20th, 2023, in the beautiful city of Kochi,
                  India. This life-saving event aims to rally volunteers and the
                  public, creating a resounding success that will leave a
                  lasting impact on the community.
                </p>
                <h4>A Noble Mission</h4>
                <p>
                  KPA has always stood at the forefront of humanitarian causes,
                  and this initiative is no exception. Our mission is clear: to
                  save lives by ensuring an adequate supply of blood for those
                  in need. Blood donation is a simple yet profound act of
                  kindness, and together, we can make a significant difference
                  in our community.
                </p>
                <h4>Calling All Volunteers and Supporters</h4>
                <p>
                  We invite volunteers and the public to join us in this noble
                  endeavor. Your participation is vital in making this event a
                  success. Whether you've donated blood before or are
                  considering it for the first time, your contribution is
                  invaluable. Every drop of blood donated has the potential to
                  save a life, and there's no greater gift than the gift of life
                  itself.
                </p>
                <h4>What to Expect</h4>
                <p>
                  Our Blood Donation Camp will be a safe and organized event,
                  adhering to all necessary health and safety guidelines.
                  Trained medical professionals will be on-site to ensure a
                  smooth and comfortable experience for all donors. Refreshments
                  will be provided to help you recover after your donation.
                </p>
                <h4>How You Can Help</h4>
                <ul>
                  <li>
                    <b>Donate Blood:</b> The most direct way to contribute is by
                    donating blood. Your single donation can save up to three
                    lives.
                  </li>
                  <li>
                    <b>Spread the Word:</b> Even if you can't donate, you can
                    still make a difference by encouraging others to
                    participate. Share this event with your friends, family, and
                    colleagues.
                  </li>
                  <li>
                    <b>Volunteer:</b> We're in need of volunteers to assist with
                    various aspects of the event, from registration to
                    refreshment distribution. Your time and support are highly
                    appreciated.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={style.event_detail__sidebar}>
              <EventForm />
              <div className={style.related_events}>
                <h2
                  className={`${style.related_events__title} h4 ff-secondary fw-bold`}
                >
                  Related Events
                </h2>
                <div className="mb-4">
                  <EventCard />
                </div>
                <div>
                  <EventCard />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventDetail;
