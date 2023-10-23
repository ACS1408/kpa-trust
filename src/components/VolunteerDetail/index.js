"use client";
import Image from "next/image";
import style from "./VolunteerDetail.module.scss";
import { Col, Row } from "react-bootstrap";
import VolunteerForm from "../VolunteerForm";

const VolunteerDetail = (props) => {
  return (
    <section className={style.section}>
      <div className="container">
        <Row>
          <Col lg={7}>
            <div className={style.volunteer_detail}>
              <h1
                className={`${style.volunteer_detail__title} h3 ff-secondary fw-bold`}
              >
                Be A Volunteer
              </h1>
              <figure className={`${style.volunteer_detail__image} ratio`}>
                <Image
                  src="/images/volunteer-img.png"
                  fill
                  alt="news-image"
                  sizes="(min-width: 1200px) 50vw, 100vw"
                  quality={90}
                  objectFit="cover"
                />
              </figure>
              <div className="admin-content-area">
                <p>
                  Welcome to the Kerala Pravasi Association Trust's Volunteer
                  Program. At KPA Trust, we believe that collective efforts and
                  community engagement are the driving forces behind positive
                  change. As a vibrant expatriate association trust of
                  Keralites, we are constantly working towards initiatives that
                  benefit our community and society at large. Your dedication
                  and time can play a pivotal role in making a meaningful
                  impact.
                </p>
                <h4>Why Volunteer with KPA Trust</h4>
                <ol>
                  <li>
                    Community Building: Our volunteers are the heart and soul of
                    KPA Trust. By joining us, you become an integral part of our
                    diverse and supportive community.
                  </li>
                  <li>
                    Cause-Driven: We are passionate about addressing pressing
                    issues, from healthcare and education to social welfare.
                    Your volunteer work can contribute directly to these noble
                    causes.
                  </li>
                  <li>
                    Personal Growth: Volunteering offers personal and
                    professional growth opportunities. It's a chance to acquire
                    new skills, gain experience, and make lasting connections.
                  </li>
                  <li>
                    Making a Difference: Every volunteer action, no matter how
                    small, can create a positive impact. Together, we can effect
                    change and create a better world.
                  </li>
                </ol>
                <h4>How to Get Involved</h4>
                <p>
                  Becoming a volunteer with KPA Trust is easy. Here's how you
                  can get started:
                </p>
                <ol>
                  <li>
                    Explore Opportunities: Browse through our list of ongoing
                    projects and initiatives to discover the one that aligns
                    with your interests and skills.
                  </li>
                  <li>
                    Contact Us: Please fill out the volunteer form available on
                    our website. This form will help us better understand your
                    interests and availability, allowing us to match you with
                    the most suitable project.
                  </li>
                  <li>
                    Join the Team: Once you've chosen a project, you'll be
                    welcomed into our team of dedicated volunteers. You'll
                    receive training and support to ensure your experience is
                    both fulfilling and impactful.
                  </li>
                  <li>
                    Give Your Time: Commit your time and energy to the cause.
                    Whether it's participating in events, organizing campaigns,
                    or contributing your expertise, your efforts are highly
                    valued.
                  </li>
                  <li>
                    Share Your Experience: We encourage our volunteers to share
                    their experiences with the community. Your stories inspire
                    others to get involved and make a difference.
                  </li>
                </ol>
                <h4>Volunteer, Empower, and Inspire</h4>
                <p>
                  KPA Trust's Volunteer Program is an opportunity to be part of
                  something bigger than ourselves. It's a chance to contribute
                  to the well-being of our community and the world. Together, we
                  can empower individuals, inspire change, and create a brighter
                  future. Join us on this rewarding journey of giving back.
                  Together, we can make a meaningful impact.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={style.volunteer_detail__form}>
              <VolunteerForm />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default VolunteerDetail;
