import Image from "next/image";
import BoardMemberCard from "../BoardMemberCard";
import style from "./AboutBoardMembers.module.scss";

const AboutBoardMembers = (props) => {
  return (
    <div className={style.section}>
      <div className={`${style.mask_top} ratio`}>
        <Image
          src="/images/about-bg-mask-top.png"
          fill
          alt=""
          objectFit="cover"
        />
      </div>
      <div className={`${style.mask_bottom} ratio`}>
        <Image
          src="/images/about-bg-mask-bottom.png"
          fill
          alt=""
          objectFit="cover"
        />
      </div>
      <div className="container container-small">
        <h2
          className={`${style.section_title} h2 fw-bold ff-secondary text-center`}
        >
          Our Board Members Who Guide Our Mission
        </h2>
        <div className={style.section_contents}>
          <BoardMemberCard
            image="/images/board-member-1.png"
            name="RAJENDRAN VELLAPALATH"
            designation="Founder & Chairman"
            description="Rajendran Vellapalath has always dreamed big and pushed the boundaries beyond what is possible. His life is devoted to building businesses, creating jobs and working towards the welfare and betterment of his community in the UAE and the Middle East. This led to the formation of the Kerala Pravasi Association – a non-profit, registered organisation that works towards the welfare of expatriates from Kerala, with the vision – Self Reliant Kerala through Pravasi’s. Born in Kanniparamba, Kerala in India, Rajendran Vellapalath started his career in Sales. With over 25 years of international experience in the aviation industry, he is committed to empowering Airlines and Travel Management Companies in Airline Retailing. Rajendran began his aviation career in 1998 when he joined Emirates Airline and then later moved to Singapore Airlines in the year 2005. He also led regional operations for South African Airways from 2006 to 2010. In 2010, he became Vice President Corporate Strategy and Planning for RAK Airways followed by his role as Commercial Director of Rotana Jet."
          />
          <BoardMemberCard
            reverse
            image="/images/board-member-2.png"
            name="ASWANI NAMBARAMBATH"
            designation="Co-Founder & Vice Chairman"
            description="Aswani Nambarambath was born in Calicut, Kerala in India, to a highly successful Business family, and currently resides in Dubai. At a time when technology entrepreneurs were relatively unheard of, Aswani became one of the first women entrepreneurs to take the leap and embark on a journey that saw her play a pivotal role for many tech advancements in the years to come. Her resilience, confidence and self-empowerment has changed the perception of a career in technology for women and paved the way for many to follow.  She began her career as a Software Engineer in 2009 and quickly moved up the corporate career ladder since then. She was soon leading a team of Engineers at KINFRA from 2012 to 2016. At the age of 21, her passion for technology led her to co-found a Technology Development company, which was scaled and serves satisfied customers from across the world. The company was listed and recognised as one of the Top 100 Startups from Kerala. It was recognised under the ‘Startup India, Standup India Program’ and got incubated in Kerala Startup Mission with support from the Kerala IT mission."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBoardMembers;
