import Image from "next/image";
import style from "./DonateCard.module.scss";

const DonateCard = (props) => {

    return (
        <div className={style.card}>
            <div className={style.card_img}>
                <div className="ratio">
                    <Image src="/images/cover.webp" fill alt="shape" />
                </div>
            </div>
            <div className={style.card_body}>
                <div className={style.card_body__btn}>
                    <button className="btn btn-outline-primary w-100 rounded-pill text-uppercase">Donate</button>
                </div>
                <div className={style.progress}>
                    <div className="d-flex justify-content-between">
                        <p className={`ff-secondary fw-semi ${style.progress_amount}`}>Raised <span className="text-primary">₹81982.00</span></p>
                        <p className={`ff-secondary fw-semi ${style.progress_percentage}`}>23.5%</p>
                    </div>
                    <div className={style.progress_strip}>
                            <div className={style.progress_strip__track} style={{"--data-percent": `${23.5}%`}}></div>
                        </div>
                </div>
                <h3 className="h4 ff-primary fw-bold">
                    Provide wheelchair assistance for disabled
                </h3>
                <p className="p-main mb-0">
                    Empowering 5 individuals with disabilities through mobile freedom, by transforming their lives with the help of technology.
                </p>
            </div>
        </div>
    );
};

export default DonateCard;
