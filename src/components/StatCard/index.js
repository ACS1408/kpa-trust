import Image from "next/image";
import style from "./StatCard.module.scss";

const StatCard = ({ label, value, icon }) => {
  return (
    <div className={`${style.card} justify-content-end d-flex align-items-center`}>
      <div className="">
        <p className={`h4 ff-secondary fw-regular  ${style.card_label}`}>
          {label}
        </p>
        <h3 className={`h2 ff-primary fw-bold ${style.card_value}`}>
          ₹{value}
        </h3>
      </div>
      <Image src={icon} width={80} height={80} alt="" className="ms-4"/>
    </div>
  );
};

export default StatCard;
