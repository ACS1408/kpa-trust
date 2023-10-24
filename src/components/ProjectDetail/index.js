"use client";
import Image from "next/image";
import style from "./ProjectDetail.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DonateCard from "../DonateCard";
import DonateForm from "../DonateForm";

const ProjectDetail = (props) => {
  return (
    <section className={style.section}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className={style.project_detail}>
              <h1
                className={`${style.project_detail__title} h3 ff-secondary fw-bold`}
              >
                Help the homeless by giving them their dream home
              </h1>

              <div className={`${style.project_detail__details}`}>
                <div className={style.progress}>
                  <div className="d-flex justify-content-between">
                    <p
                      className={`ff-secondary fw-semi ${style.progress_amount}`}
                    >
                      Raised <span className="text-primary">₹81982.00</span>
                    </p>
                    <p
                      className={`ff-secondary fw-semi ${style.progress_count}`}
                    >
                      <span className="text-primary">244</span> People
                      Contributed
                    </p>
                    <p
                      className={`ff-secondary fw-semi ${style.progress_goal}`}
                    >
                      Goal <span className="text-primary">₹20,00,000</span>
                    </p>
                  </div>
                  <div className={style.progress_strip}>
                    <div
                      className={style.progress_strip__track}
                      style={{ "--data-percent": `${23.5}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <figure className={`${style.project_detail__image} ratio`}>
                <Image
                  src="/images/project-detail-img.png"
                  fill
                  alt="project-image"
                  sizes="(min-width: 1200px) 50vw, 100vw"
                  quality={90}
                />
              </figure>

              <div className="admin-content-area">
                <p>
                  Amid our busy lives, homelessness persists as a pressing
                  issue. Behind the statistics lie individuals with dreams and
                  hopes. It's time to explore how we can make a difference by
                  helping the homeless attain their "dream homes."
                </p>
                <p>
                  Homelessness doesn't define potential; each person has unique
                  talents and aspirations. Addressing housing needs restores
                  dignity and challenges stereotypes. A stable home is
                  fundamental. It provides security and a place to plan for the
                  future. By helping the homeless find housing, we offer a
                  foundation for rebuilding lives. Homelessness often stems from
                  unfortunate events. Housing is the first step to recovery,
                  enabling focus on personal growth and employment. Providing a
                  home restores self-esteem. It communicates care and validates
                  dreams, reinforcing self-worth. Addressing homelessness
                  strengthens communities. It's a collective effort benefiting
                  everyone.
                </p>
                <p>
                  Collaboration between NGOs, government agencies, and
                  communities empowers the homeless. Affordable housing,
                  shelters, and vocational training provide holistic solutions.
                  Small acts matter—blankets, clothing, volunteering—kindness
                  sparks hope and paves the way for long-term change.
                  Homelessness is complex, but helping individuals attain their
                  dream homes is a step toward a more compassionate society
                  where dreams are achievable for all.
                </p>
                <h3>Why Donate</h3>
                <p>
                  Donating to a homeless NGO fund is an opportunity to address a
                  pressing issue, restore dignity and hope, fuel impactful
                  initiatives, and be part of a collective effort for change.
                  Your generosity has the potential to transform lives and
                  create a brighter future for individuals experiencing
                  homelessness.
                </p>
                <h4>Addressing a Critical Issue</h4>
                <p>
                  Homelessness remains an urgent societal concern. With millions
                  of people worldwide struggling to find shelter, donating to a
                  homeless NGO fund is a powerful way to make a difference.
                </p>
                <h4>Restoring Dignity and Hope</h4>
                <p>
                  Homelessness takes a toll on individuals' lives, stripping
                  them of dignity and hope. By contributing to the homeless NGO
                  fund, you play a crucial role in providing shelter,
                  nourishment, and support to those in need. Your donation goes
                  beyond the material; it's a lifeline of hope for a better
                  tomorrow.
                </p>
                <h4>Fueling Impactful Initiatives</h4>
                <p>
                  Homeless NGOs are at the forefront of impactful initiatives.
                  They provide emergency shelters, healthcare, job training, and
                  more. Your donation helps sustain these programs, enabling
                  individuals to rebuild their lives and reintegrate into
                  society.
                </p>
                <h4>A Collective Effort</h4>
                <p>
                  Addressing homelessness is a collective effort. Your donation,
                  no matter the amount, joins others' contributions to create a
                  powerful force for change. It's a tangible way to express
                  compassion and solidarity with those experiencing
                  homelessness.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={style.project_detail__sidebar}>
              <DonateForm />
              <div className={style.related_projects}>
                <h2
                  className={`${style.related_projects__title} h4 ff-secondary fw-bold`}
                >
                  Related Projects
                </h2>
                <div className="row">
                  <div className="mb-4 col-lg-12 col-sm-6">
                    <DonateCard />
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <DonateCard />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetail;
