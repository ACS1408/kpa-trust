import Image from "next/image";
import style from "./NewsCard.module.scss";

const NewsCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <div className="ratio">
          <Image src="/images/cover.webp" fill alt="shape" />
        </div>
      </div>
      <div className={style.card_body}>
        <h3 className="h4 fw-semi ff-secondary">
          KPA Kozhikode District Representative Conference – May 06 2023
        </h3>
        <p className="p-main">
          The district conferences of Kerala Pravasi Association started on
          April 30 in Kannur ahead of the state conferences
        </p>
        <div className={`${style.news_details} d-flex align-items-center`}>
          <span
            className={`${style.news_details__item} h6 fw-semi ff-secondary`}
          >
            <Image src="/images/icon-profile.svg" width={14} height={15} alt="" />
            Author
          </span>
          <span
            className={`${style.news_details__item} h6 fw-semi ff-secondary`}
          >
            <Image src="/images/icon-calender.svg" width={14} height={15} alt="" />
            19 May 2021
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
