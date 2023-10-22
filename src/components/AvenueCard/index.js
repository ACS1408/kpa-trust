import Image from "next/image";
import style from "./AvenueCard.module.scss";

const AvenueCard = ({ icon, title, description }) => {
  return (
    <div className={`${style.card}`}>
      <figure className={`${style.card_img}`}>
        <Image src={icon} width={80} height={80} alt="avenue-icon" />
      </figure>
      <h3 className={`${style.card_title} fw-bold ff-secondary`}>{title}</h3>
      <p className={`${style.card_description} mb-0 fw-regular`}>
        {description}
      </p>
    </div>
  );
};

export default AvenueCard;
