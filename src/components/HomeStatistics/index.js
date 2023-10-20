"use client"
import Image from "next/image";
import style from "./HomeStatistics.module.scss";
import StatCard from "../StatCard";
import StatusCard from "../StatusCard";

const HomeStatistics = (props) => {
    return (
        <section className={style.section} >
            <div className="container container-small">
                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className={`row row-cols-2 ${style.card_wrap}`}>
                            <div>
                                <StatusCard label="Lives Impacted" value="120K" />
                            </div>

                            <div>
                                <StatusCard label="Projects Completed" value="120" />
                            </div>

                            <div>
                                <StatusCard label="Million Donation" value="21.4M"/>
                            </div>

                            <div>
                                <StatusCard label="Volunteers Registered" value="822" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="h2 ff-primary fw-bold mb-3 mb-lg-4">We Are Always Where Others Need Help!</h2>
                        <p className="p-main">Kerala Pravasi Association Trust&apos;s vision is to alleviate poverty by enabling its member&apos;s expertise in 36 segments, including agriculture, industrial development to poverty alleviation, unemployment and more, and make a difference to the larger community .</p>

                        <ul>
                            <li>Integrity in our actions</li>
                            <li>Empathy for all</li>
                            <li>Serve with passion</li>
                            <li>Focused on scale</li>
                        </ul>
                        <button className="btn btn-outline-primary">Read More</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeStatistics;
