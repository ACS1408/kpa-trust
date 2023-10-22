import Image from "next/image";
import style from "./BoardMemberCard.module.scss";

const BoardMemberCard = ({
  image,
  name,
  designation,
  description,
  reverse,
}) => {
  return (
    <div
      className={`${style.card} ${
        reverse ? "flex-row-reverse" : ""
      } row align-items-center`}
    >
      <div className={`${style.card_img}`}>
        <figure className="ratio mb-0">
          <Image src={image} fill alt="board-member" objectFit="cover" />
        </figure>
      </div>
      <div className={`${style.card_body}`}>
        <h3 className={`${style.card_name} fw-bold ff-secondary`}>{name}</h3>
        <div className={`${style.card_designation} fw-semi ff-secondary`}>
          {designation}
        </div>
        <p className={style.card_description}>{description}</p>
        <button className={style.card_button}>Read More</button>
      </div>
    </div>
  );
};

export default BoardMemberCard;
