import Image from "next/image";
import style from "./StatCard.module.scss";

const StatCard = ({label, value}) => {

    return (
        <div className={`${style.card} text-lg-end`}>
            <p className={`h4 ff-secondary fw-regular  ${style.card_label}`}>{label}</p>
            <h3 className={`h2 ff-primary fw-bold ${style.card_value}`}>₹{value}</h3>
        </div>
    );
};

export default StatCard;
