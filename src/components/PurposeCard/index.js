import Image from "next/image";
import style from "./PurposeCard.module.scss";

const PurposeCard = ({
  image,
  text,
  text_color,
  title,
  description,
  reverse,
}) => {
  return (
    <div
      className={`${style.purpose_card} ${
        reverse ? "flex-row-reverse" : ""
      } row align-items-center`}
    >
      <div className="col-lg-6">
        <figure className={`${style.purpose_card__image} ratio mb-0`}>
          <Image src={image} fill alt="" objectFit="cover" />
        </figure>
      </div>
      <div className="col-lg-6">
        <div className={`${style.purpose_card__contents}`}>
          <h2 className={`${style.purpose_card__title} ff-secondary fw-bold`}>
            <div
              className={`${style.purpose_card__illustration} ff-birthstone fw-regular`}
              style={{ "--illustration-color": text_color }}
            >
              {text}
            </div>
            {title}
          </h2>
          <p className={`${style.purpose_card__description} p-main mb-0`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurposeCard;
