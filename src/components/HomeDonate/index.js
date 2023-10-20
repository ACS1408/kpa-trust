"use client"
import Image from "next/image";
import style from "./HomeDonate.module.scss";
import DonateCard from "../DonateCard";

const HomeDonate = (props) => {
    return (
        <section className={style.section} >

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="h2 ff-primary text-center fw-bold mb-lg-5">
                            Donate To Our Charity Causes
                            Around The World
                        </h2>
                    </div>
                </div>

                <div className={`row row-cols-lg-4 mb-lg-5 ${style.row}` }>
                    <div>
                        <DonateCard/>
                    </div>

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

                <div className="text-center">
                    <button className="btn btn-outline-primary">View More</button>
                </div>
            </div>
        </section>
    );
};

export default HomeDonate;
