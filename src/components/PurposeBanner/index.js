import Image from "next/image";
import style from "./PurposeBanner.module.scss";

const PurposeBanner = (props) => {
  return (
    <div className={style.section}>
      <div className="container">
        <div className={style.purpose_banner__backgrounds}>
          <figure className={`${style.purpose_banner__bg} ${style.pb_bg_1}`}>
            <Image
              src="/images/shape1.svg"
              width={227}
              height={107}
              alt=""
              objectFit="cover"
            />
          </figure>
          <figure className={`${style.purpose_banner__bg} ${style.pb_bg_2}`}>
            <Image
              src="/images/shape10.svg"
              width={131}
              height={78}
              alt=""
              objectFit="cover"
            />
          </figure>
        </div>
        <div className="row">
          <div className="col-xl-5">
            <div className={style.purpose_banner__images}>
              <figure
                className={`${style.purpose_banner__image} ${style.pb_image_1} ratio`}
              >
                <Image
                  src="/images/purpose-banner-1.png"
                  fill
                  alt=""
                  objectFit="cover"
                />
              </figure>
              <figure
                className={`${style.purpose_banner__image} ${style.pb_image_2} ratio`}
              >
                <Image
                  src="/images/purpose-banner-2.png"
                  fill
                  alt=""
                  objectFit="cover"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-7">
            <h1
              className={`${style.purpose_banner__title} h1 ff-secondary fw-bold`}
            >
              Our Purpose & Direction
            </h1>
            <p className={`${style.purpose_banner__description} p-main`}>
              As the world leader in volunteerism we feel a responsibility to
              unite our broader community, and to use this moment to become a
              stronger nation. Our efforts go beyond the borders of politics,
              religion, culture, race or ethnicity as we are committed to making
              a real difference.
            </p>
            <div className="row row-cols-2">
              <div className={style.purpose_banner__card}>
                <figure className={style.purpose_icon}>
                  <Image
                    src="/images/purpose-1.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                </figure>
                <div className={style.purpose_details}>
                  <div
                    className={`${style.purpose_title} ff-secondary fw-semi`}
                  >
                    Integrity in our actions
                  </div>
                  <p className={style.purpose_description}>
                    We strive never to take the easy path, but the honest one
                    and practice integrity in all our actions to do the right
                    thing.
                  </p>
                </div>
              </div>
              <div className={style.purpose_banner__card}>
                <figure className={style.purpose_icon}>
                  <Image
                    src="/images/purpose-2.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                </figure>
                <div className={style.purpose_details}>
                  <div
                    className={`${style.purpose_title} ff-secondary fw-semi`}
                  >
                    Serve with passion
                  </div>
                  <p className={style.purpose_description}>
                    We are fiercely committed to our purpose of poverty
                    alleviation and work with a burning desire to make a
                    difference.
                  </p>
                </div>
              </div>
              <div className={style.purpose_banner__card}>
                <figure className={style.purpose_icon}>
                  <Image
                    src="/images/purpose-3.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                </figure>
                <div className={style.purpose_details}>
                  <div
                    className={`${style.purpose_title} ff-secondary fw-semi`}
                  >
                    Focused on scale
                  </div>
                  <p className={style.purpose_description}>
                    We maintain unwavering attention on significant impact at a
                    grand scale. If expansion isn't viable, we set it aside.
                  </p>
                </div>
              </div>
              <div className={style.purpose_banner__card}>
                <figure className={style.purpose_icon}>
                  <Image
                    src="/images/purpose-4.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                </figure>
                <div className={style.purpose_details}>
                  <div
                    className={`${style.purpose_title} ff-secondary fw-semi`}
                  >
                    Empathy for all
                  </div>
                  <p className={style.purpose_description}>
                    We are committed to working together with unconditional
                    respect, freedom, trust and support for each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeBanner;
