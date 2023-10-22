import Image from "next/image";
import style from "./EventCard.module.scss";
import Link from "next/link";

const EventCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <div className="ratio">
          <Image src="/images/cover.webp" fill alt="shape" />
        </div>
      </div>
      <div className={style.card_body}>
        <span className={style.event_date}>
          <Image
            src="/images/icon-calender.svg"
            width={14}
            height={15}
            alt=""
          />
          <span>Sep 22nd 2023</span>
        </span>
        <h2 className="h4 fw-bold text-white ff-secondary mb-1">
          KPA Malappuram District Conference
        </h2>
        <Link href="#">Enroll Now</Link>
      </div>
    </div>
  );
};

export default EventCard;
