import Image from "next/image";
import style from "./ContributeBanner.module.scss";
import Link from "next/link";

const ContributeBanner = (props) => {
  return (
    <div className={style.section}>
      <div className="container">
        <div className={style.contribute_banner}>
          <div className={style.contribute_banner__backgrounds}>
            <figure
              className={`${style.contribute_banner__bg} ${style.cb_bg_1}`}
            >
              <Image
                src="/images/shape2.svg"
                width={209}
                height={83}
                alt=""
                objectFit="cover"
              />
            </figure>
            <figure
              className={`${style.contribute_banner__bg} ${style.cb_bg_2}`}
            >
              <Image
                src="/images/shape9.svg"
                width={228}
                height={98}
                alt=""
                objectFit="cover"
              />
            </figure>
          </div>
          <figure className={`${style.contribute_banner__image} ratio`}>
            <Image
              src="/images/contribute-banner.png"
              fill
              alt=""
              objectFit="cover"
            />
          </figure>
          <div className="d-lg-flex position-relative">
            <h2
              className={`${style.contribute_banner__title} ff-secondary fw-bold`}
            >
              Everybody can contribute and make a difference!
            </h2>
            <div
              className={`${style.contribute_banner__actions} d-flex align-items-center justify-content-lg-center`}
            >
              <Link href="#" className="btn btn-primary">
                DONATE NOW
              </Link>
              <Link href="#" className="btn btn-white">
                BE A VOLUNTEER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeBanner;
