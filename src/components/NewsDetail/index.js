"use client";
import Image from "next/image";
import style from "./NewsDetail.module.scss";
import { Col, Row } from "react-bootstrap";
import StoryCard from "../StoryCard";

const NewsDetail = (props) => {
  return (
    <section className={style.section}>
      <div className="container">
        <Row>
          <Col lg={7}>
            <div className={style.news_detail}>
              <h1
                className={`${style.news_detail__title} h3 ff-secondary fw-bold`}
              >
                Kerala Pravasi Association lays the foundation for its first
                housing project
              </h1>
              <div
                className={`${style.news_detail__details} d-flex align-items-center`}
              >
                <span
                  className={`${style.detail_item} h6 fw-semi ff-secondary`}
                >
                  <Image
                    src="/images/icon-profile.svg"
                    width={14}
                    height={15}
                    alt=""
                  />
                  Author
                </span>
                <span
                  className={`${style.detail_item} h6 fw-semi ff-secondary`}
                >
                  <Image
                    src="/images/icon-calender.svg"
                    width={14}
                    height={15}
                    alt=""
                  />
                  19 May 2021
                </span>
              </div>
              <figure className={`${style.news_detail__image} ratio`}>
                <Image
                  src="/images/news-detail-1.png"
                  fill
                  alt="news-image"
                  sizes="(min-width: 1200px) 50vw, 100vw"
                  quality={90}
                />
              </figure>
              <div className="admin-content-area">
                <p>
                  The Kerala Pravasi Association (KPA) has embarked on a mission
                  with a noble vision - to provide safe and secure homes to
                  every deserving landless or homeless individual in the state
                  of Kerala. This endeavor is part of the KPA's commitment to
                  making a positive impact on the lives of its fellow citizens.
                  Under the aegis of the KPA trust, the organization has
                  launched its ambitious 'Housing Security' project, marking a
                  significant step towards addressing the housing crisis in the
                  region. This initiative signifies the KPA's dedication to
                  social welfare and community development.
                </p>
                <p>
                  The first milestone in this commendable journey was achieved
                  on July 25, 2022, when the foundation stone for the inaugural
                  home was laid in Mavur village, located in the Kozhikode
                  district. This historic moment was graced by the presence of
                  Aswani Nambarambath, the Founder and National Council
                  President of KPA, along with the esteemed Mr. Ranjith, the
                  President of Mavur Panchayath. The event was further adorned
                  by the participation of various office bearers who share the
                  organization's commitment to making a difference.
                </p>
                <figure className="ratio">
                  <Image
                    src="/images/news-detail-2.png"
                    fill
                    alt="news-image"
                    sizes="(min-width: 1200px) 50vw, 100vw"
                    quality={90}
                  />
                </figure>
                <p>
                  The house, which is set to become a beacon of hope for the
                  less fortunate, is designed to provide a secure and
                  comfortable living space. Spanning an area of 530 square feet,
                  it is a testament to the organization's dedication to ensuring
                  that every individual has access to the basic human right of
                  shelter. The KPA has set an impressive timeline for itself,
                  aiming to complete the construction of this house within a
                  mere four months. This swift and efficient progress reflects
                  the organization's determination to turn its vision into
                  reality promptly. This housing project is just one facet of
                  the KPA's overarching goal, which extends across a wide
                  spectrum of sectors. With an emphasis on leveraging the
                  expertise of expatriates, the organization is committed to
                  advancing the state's development in 36 key sectors. These
                  sectors encompass everything from agriculture to industrial
                  development and manufacturing.
                </p>
                <p>
                  In summary, the Kerala Pravasi Association's 'Housing
                  Security' project is a laudable initiative that reflects its
                  unwavering commitment to providing shelter and security to
                  those in need. It is a shining example of how dedicated
                  individuals and organizations can come together to make a
                  meaningful difference in the lives of their fellow citizens.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={style.related_stories}>
              <h2
                className={`${style.related_stories__title} h4 ff-secondary fw-bold`}
              >
                Related Stories
              </h2>
              <div className="row">
                <div className="mb-4 col-lg-12 col-sm-6">
                  <StoryCard />
                </div>
                <div className="col-lg-12 col-sm-6">
                  <StoryCard />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NewsDetail;
