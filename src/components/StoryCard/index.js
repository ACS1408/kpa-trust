import Image from "next/image";
import style from "./StoryCard.module.scss";

const StoryCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <div className="ratio">
          <Image src="/images/cover.webp" fill alt="shape" />
        </div>
      </div>
      <div className={style.card_body}>
        <h3 className="h4 fw-bold ff-secondary">
          KPA inaugurates its state membership campaign
        </h3>
        <p className="p-main">
          The Inauguration of Kerala Pravasi Association, state-level membership
          campaign took place in Kozhikode, Kerala and was attended by RAJENDRAN
          VELLAPALAT, Founder & National Council Chairman, ASWANI NAMBARAMBATH,
          Founder & National Council President, JERRY RAJU
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
