import Image from "next/image";
import style from "./EventCard.module.scss";

const EventCard = (props) => {

    return (
        <div className={style.card}>
            <div className={style.card_img}>
                <div className="ratio">
                    <Image src="/images/cover.webp" fill alt="shape" />
                </div>
            </div>
            <div className={style.card_body}>
                <p>Sep 22nd 2023</p>
                <h2 className="h4 fw-bold text-white ff-secondary mb-3 mb-lg-4">KPA Malappuram District Conference</h2>
                <a href="#">Enroll Now</a>
            </div>
        </div>
    );
};

export default EventCard;
