import Image from "next/image";
import style from "./DonateListing.module.scss";
import DonateCard from "../DonateCard";

const DonateListing = (props) => {

    return (
    <section className={`${style.section} py-5`}>
        <div className="container">
            <div className="row row-cols-lg-3">
                <div>
                    <DonateCard/>
                </div>
                <div>
                    <DonateCard/>
                </div>
                <div>
                    <DonateCard/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default DonateListing;
