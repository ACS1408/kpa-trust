"use client"
import Image from "next/image";
import style from "./HomeNews.module.scss";
import EventCard from "../EventCard";
import NewsCard from "../NewsCard";

const HomeNews = (props) => {
    return (
        <section className={style.section} >

            <div className="container container-small">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="h2 ff-primary text-center fw-bold mb-lg-5">
                        Get Every News From Us
                        </h2>
                    </div>
                </div>

                <div className={`row row-cols-lg-2 mb-lg-4 ${style.row}`}>
                    <div>
                        <NewsCard />
                    </div>

                    <div>
                        <NewsCard />
                    </div>

                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary">View More</button>
                </div>
            </div>
        </section>
    );
};

export default HomeNews;
