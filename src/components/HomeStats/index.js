"use client"
import Image from "next/image";
import style from "./HomeStats.module.scss";
import StatCard from "../StatCard";

const HomeStats = (props) => {
    return (
        <section className={style.section} >
            <div className="container container-small">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="h2 ff-primary fw-bold mb-3 mb-lg-4">Your contribution can change many lives!</h2>
                        <button className="btn btn-dark">Donate NOW</button>
                    </div>
                    <div className="col-lg-6">
                        <div className={style.card_wrap}>
                            <StatCard label={"Total Donation"} value={"56,301"} />
                            <StatCard label={"Total Raised"} value={"76,301"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStats;
