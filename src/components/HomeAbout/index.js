"use client"
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import useHomeAbout from "./useHomeAbout";
import FeatureCard from "../FeatureCard";

const HomeAbout = (props) => {
    const {main} = useHomeAbout({style})
    return (
        <section className={style.section} ref={main}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="h2 ff-primary fw-bold">It&apos;s time to make this world better!</h2>
                        <p className="p-main">Our vision is to alleviate poverty by enabling its member&apos;s expertise in 36 segments, including agriculture, industrial development to poverty alleviation, unemployment and more, and make a difference to the larger community .</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="row row-cols-lg-2">
                            <div>
                                <FeatureCard/>
                            </div>

                            <div>
                                <FeatureCard/>
                            </div>

                            <div>
                                <FeatureCard/>
                            </div>

                            <div>
                                <FeatureCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
