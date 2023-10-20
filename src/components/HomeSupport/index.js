import Image from "next/image";
import style from "./HomeSupport.module.scss";
import FeatureCard from "../FeatureCard";

const HomeSupport = (props) => {
    return (
        <section className={style.section} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="h2 ff-primary text-center fw-bold mb-lg-5">
                            All Our Varied Avenues
                            For Giving And Support
                        </h2>
                    </div>
                </div>


                <div className="row row-cols-lg-3">
                    <div>
                        <FeatureCard />
                    </div>

                    <div>
                        <FeatureCard />
                    </div>

                    <div>
                        <FeatureCard />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeSupport;
