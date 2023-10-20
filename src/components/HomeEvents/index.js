"use client"
import Image from "next/image";
import style from "./HomeEvents.module.scss";
import EventCard from "../EventCard";

const HomeEvents = (props) => {
    return (
        <section className={style.section} >

            <div className="container container-small">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="h2 ff-primary text-center fw-bold mb-lg-5">
                            Our Latest Events & Programs
                        </h2>
                    </div>
                </div>

                <div className={`row row-cols-lg-3 mb-lg-4 ${style.row}`}>
                    <div>
                        <EventCard />
                    </div>

                    <div>
                        <EventCard />
                    </div>

                    <div>
                        <EventCard />
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary">View More</button>
                </div>
            </div>
        </section>
    );
};

export default HomeEvents;
