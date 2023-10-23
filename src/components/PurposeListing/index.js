"use client";
import Image from "next/image";
import style from "./PurposeListing.module.scss";
import PurposeCard from "../PurposeCard";

const PurposeListing = (props) => {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.purpose_listing}>
          <PurposeCard
            image="/images/board-member-2.png"
            text="Mission"
            text_color="#6eb600"
            title="Our Mission"
            description="Our mission is to create and support a culture of volunteering across Kerala. Voluntary participation will be to the mutual benefit of volunteers, voluntary, statutory and private organisations by the provision of a locally delivered quality service for the whole community."
          />
          <PurposeCard
            image="/images/board-member-2.png"
            text="Vision"
            text_color="#FFA100"
            title="Our Vision"
            description="Managing and sustaining volunteers is important to nonprofits of every size and mission. We understand that finding individuals to fit your project needs is the first step. We are here to guide non-profits in creating and managing volunteer projects that run smoothly and deliver ontheir missions."
            reverse
          />
          <PurposeCard
            image="/images/board-member-2.png"
            text="Goal"
            text_color="#FF5E14"
            title="The Goal"
            description="Non-profit board members enrich and govern an organization with their personal expertise, connections, and passion for the cause. We support organizations in diagnosing their boards’ needs through training, one-on-one consulting, and coaching, equipping their members with the right information and resources."
          />
        </div>
      </div>
    </section>
  );
};

export default PurposeListing;
