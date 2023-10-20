import style from "./Footer.module.scss"
import Image from 'next/image';
function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer_top}>
                <div className="container container-small">
                    <div className="row ">
                        <div className="col-lg-4">
                            <h3 className={`ff-secondary ${style.footer_title}`}>What We Are</h3>
                            <p>Working towards ensuring we meet the needs of the people and move towards building a strong, prosperous and self-reliant Kerala by Pravasi’s.</p>
                        
                        <div className={`ratio ${style.logo}`}>
                        <Image src="/images/logo.svg" fill alt="shape" />
                        </div>
                        </div>
                        <div className="col-lg-4">
                            <h3 className={`ff-secondary ${style.footer_title}`}>Contact Us</h3>
                            <p>As the world leader in volunteerism we feel a responsibility to unite our broader community, and to use this momentum to become a stronger nation.</p>


                        </div>
                        <div className="col-lg-4">
                            <h3 className={`ff-secondary ${style.footer_title}`}>Our Newsletters</h3>
                            <p>
                                Subscribe to our newsletter to get more information
                            </p>

                        <input type="text" placeholder="Enter Your Email" className="form-control w-100 mb-3" />
                        <button className="btn btn-dark w-100">Subscribe now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.footer_bottom}>
                <div className="container container-small">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Copyright Ⓒ 2022 KPA Trust, All Right Reserved</p>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <p><a href="#">Terms and Conditions </a> <a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;