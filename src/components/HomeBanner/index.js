"use client"
import Image from "next/image";
import style from "./HomeBanner.module.scss";
import { useHomeBanner } from "./useHomeBanner";

const HomeBanner = (props) => {
    const { main } = useHomeBanner({ style });
    return (
        <section className={style.section} ref={main}>
            <div className={style.bg}>
                <Image src="/images/world.svg" fill alt="world map" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 order-lg-1 order-2">
                        <div className={`${style.content} position-relative`}>
                            <div className={`stroke ${style.stroke} ${style.stroke_one}`}>
                                 <Image src="/images/shape1.svg" fill alt="shape" />
                            </div>
                            <h1 className={`h1 ff-primary fw-bold mb-0 ${style.fade}`}>Be a real-life hero! </h1>
                            <p className={`h3 ff-secondary mb-4 ${style.fade}`}>Your contribution can change their life and world</p>
                            <div className={style.fade}>
                                <button className="btn btn-dark me-3">Donate NOW</button>
                                <button className="btn btn-outline-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 order-lg-2 order-1 mb-3 mb-lg-0">
                        <div className={style.banner}>
                        <div className={`stroke ${style.stroke} ${style.stroke_two}`}>
                            <Image src="/images/shape2.svg" fill alt="shape" />
                        </div>
                       
                        <div className={`stroke ${style.stroke} ${style.stroke_four}`}>
                            <Image src="/images/shape4.svg" fill alt="shape" />
                        </div>
                        <div className={`stroke ${style.stroke} ${style.stroke_five}`}>
                            <Image src="/images/shape5.svg" fill alt="shape" />
                        </div>
                            <div className={style.banner_card_one}>
                                <h5 className="ff-secondary fw-bold h6">Join Our Volunteers</h5>
                                <div className={style.round}>
                                    <div className={style.round_item}>
                                        <Image src="/images/cover.webp" fill alt="world map" />
                                    </div>
                                    <div className={style.round_item}>
                                        <Image src="/images/cover.webp" fill alt="world map" />
                                    </div>
                                    <div className={style.round_item}>
                                        <Image src="/images/cover.webp" fill alt="world map" />
                                    </div>
                                    <div className={style.round_item}>
                                        <Image src="/images/cover.webp" fill alt="world map" />
                                    </div>
                                    <div className={style.round_item}>
                                        <Image src="/images/cover.webp" fill alt="world map" />
                                    </div>
                                    <div className={`${style.round_item} bg-primary text-white ff-secondary fw-regular`}>70+</div>
                                </div>
                            </div>

                            <div className={style.banner_card_two}>
                                <div className={style.banner_card_two__img}>
                                    <div className="ratio ratio-1x1">
                                    <Image src="/images/money.png" fill alt="money icon" />
                                    </div>
                                </div>
                                <div className={style.banner_card_two__info}>
                                    <h5 className="h6 fw-bold ff-primary">Total Donations</h5>
                                    <div className={style.track}>
                                        <div className={style.track_progress}></div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className={style.banner_card_three}>
                            <div className={`stroke ${style.stroke} ${style.stroke_three}`}>
                            <Image src="/images/shape3.svg" fill alt="shape" />
                        </div>
                                <h3 className="ff-secondary h1 fw-bold">₹21</h3>
                                <p className="mb-0 ms-1">Million<br />
                                    Collected</p>
                            </div>

                            <div className={style.banner_bg}>
                                <div className={`ratio ${style.ratio}`}>
                                    <Image src="/images/cover.webp" fill alt="world map" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
