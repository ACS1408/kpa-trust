import Image from "next/image";
import style from "./FeatureCard.module.scss";

const FeatureCard = (props) => {

    return (
        <div className={style.card}>
            <div className={style.card_img}>
                <div className={`${style.img} ratio ratio-1x1`}>
                    <Image src="/images/icon.png" fill alt="icon"/>
                </div>
            </div>
            <div className={style.card_info}>
                <h4 className="ff-primary h4 fw-bold">
                    Integrity in our actions
                </h4>
                <p className="p-main">
                    We strive never to take the easy path, but the honest one. We practice integrity in all our actions and do the right thing by every stakeholder.
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
