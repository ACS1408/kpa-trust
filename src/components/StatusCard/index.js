import Image from "next/image";
import style from "./StatusCard.module.scss";

const StatusCard = ({label, value}) => {

    return (
        <div className={`${style.card} text-center`}>
            <div className={`ratio ratio-1x1 mx-auto ${style.card_icon}`}>
                <Image src="/images/icon.png" fill alt="icon"/>
            </div>
            <h3 className={`ff-primary fw-bold ${style.card_value}`}>{value}</h3>
            <p className={`p-main  ${style.card_label}`}>{label}</p>
        </div>
    );
};

export default StatusCard;
