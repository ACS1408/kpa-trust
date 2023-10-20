import Image from "next/image";
import style from "./HomeVolunteer.module.scss";

const HomeVolunteer = (props) => {
    return (
        <section className={style.section} >
            <div className="container">
                <div className={style.card}>
                <Image src="/images/cover.webp" fill alt="shape" />
                    <div className="row align-items-center position-relative">
                        <div className="col-lg-7 col-xxl-8">
                            <h2 className="h2 ff-primary text-white fw-bold mb-3 mb-lg-0">
                            Everybody can contribute and make a difference!
                            </h2>
                        </div>
                        <div className="col-lg-5 col-xxl-4">
                            <div className={style.btn_wrap}>
                                <button className="btn btn-primary me-3">Donante Now</button>
                                <button className="btn btn-outline-primary">Be a Volunteer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeVolunteer;
