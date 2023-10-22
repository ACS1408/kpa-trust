import Image from "next/image";
import style from "./AboutBanner.module.scss";

const AboutBanner = (props) => {
  return (
    <div className={style.section}>
      <div className="container">
        <div className={style.about_banner__backgrounds}>
          <figure className={`${style.about_banner__bg} ${style.ab_bg_1}`}>
            <Image
              src="/images/shape6.svg"
              width={200}
              height={71}
              alt=""
              objectFit="cover"
            />
          </figure>
          <figure className={`${style.about_banner__bg} ${style.ab_bg_2}`}>
            <Image
              src="/images/shape1.svg"
              width={227}
              height={107}
              alt=""
              objectFit="cover"
            />
          </figure>
          <figure className={`${style.about_banner__bg} ${style.ab_bg_3}`}>
            <Image
              src="/images/shape8.svg"
              width={131}
              height={78}
              alt=""
              objectFit="cover"
            />
          </figure>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={style.about_banner__images}>
              <figure
                className={`${style.about_banner__image} ${style.ab_image_1} ratio`}
              >
                <Image
                  src="/images/about-banner-1.png"
                  fill
                  alt=""
                  objectFit="cover"
                />
              </figure>
              <figure
                className={`${style.about_banner__image} ${style.ab_image_2} ratio`}
              >
                <Image
                  src="/images/about-banner-2.png"
                  fill
                  alt=""
                  objectFit="cover"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <h1
              className={`${style.about_banner__title} h1 ff-secondary fw-bold`}
            >
              Who Are We?
            </h1>
            <p className="p-main">
              At Kerala Pravasi Association (KPA), we envision a Kerala free
              from poverty and hunger; a strong, prosperous and self-reliant
              Kerala, by enabling Pravasi’s across the world to give.
              Established in 2022, KPA enables individuals and organizations to
              donate funds generously to any cause they care about, through
              crowdfunding or corporate giving. Our goal is to enable Pravasi
              expertise from 36 segments, including agriculture, environment
              protection, industrial development, manufacturing sectors as well
              as poverty alleviation, unemployment and infrastructure
              development and honor their pledge to secure, protect and honor
              the rights of the underprivileged. KPA's strong community of
              members have to date supported various causes and have addressed
              pressing policy challenges across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
