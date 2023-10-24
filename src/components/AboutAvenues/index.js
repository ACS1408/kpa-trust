import React from "react";
import style from "./AboutAvenues.module.scss";
import AvenueCard from "../AvenueCard";
import Image from "next/image";

const AboutAvenues = (props) => {
  return (
    <div className={style.section}>
      <div className="container container-large">
        <h2
          className={`${style.section_title} h2 fw-bold ff-secondary text-center`}
        >
          All Our Varied Avenues For Giving And Support
        </h2>
        <div className={`${style.section_contents} position-relative`}>
          <div className={style.about_avenue__backgrounds}>
            <figure className={`${style.about_avenue__bg} ${style.av_bg_1}`}>
              <Image
                src="/images/shape2.svg"
                width={209}
                height={83}
                alt=""
                objectFit="cover"
              />
            </figure>
            <figure className={`${style.about_avenue__bg} ${style.av_bg_2}`}>
              <Image
                src="/images/shape8.svg"
                width={131}
                height={78}
                alt=""
                objectFit="cover"
              />
            </figure>
          </div>
          <div className="row row-cols-lg-3 row-cols-md-2">
            <div>
              <AvenueCard
                icon="/images/fundraiser.svg"
                title="Fundraiser"
                description="A free crowdfunding platform where individuals and organisations can raise funds to support any NGO or reach out to those unable to afford hospital bills in a medical crisis. A one-time payment can be made to any active fundraisers on the platform."
              />
            </div>
            <div>
              <AvenueCard
                icon="/images/monthly-giving.svg"
                title="Monthly Giving"
                description="Donate monthly to people and programs that need your sustained support, avail tax benefits and make a long-lasting impact. A list of beneficiaries will be sent to you after making your contribution to learn about the impact created through regular reports."
              />
            </div>
            <div>
              <AvenueCard
                icon="/images/corporate-giving.svg"
                title="Corporate Giving"
                description="KPA partners with corporations, foundations and philanthropists to consult and design long term impactful programs, especially ‘collectives’ and ‘collective impact’ models; manage grants and provide impact assessment services."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAvenues;
