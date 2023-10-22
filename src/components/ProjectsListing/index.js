"use client";
import style from "./ProjectsListing.module.scss";
import DonateCard from "../DonateCard";

const ProjectsListing = (props) => {
  return (
    <section className={style.section}>
      <div className="container">
        <h1 className={`${style.section_title} h1 ff-primary text-center fw-bold mb-lg-5`}>
          Join our Missions and make this world better a better place!
        </h1>

        <nav
          className={`${style.category_nav} d-flex align-items-center flex-nowrap`}
        >
          <div className={`${style.category_nav__item} btn btn-primary`}>
            All Projects
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Art & Culure
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Children
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Differently Abled
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Disaster Relief
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Education
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Children
          </div>
        </nav>

        <div className={`row row-cols-lg-3 mb-lg-4 ${style.row}`}>
          <div>
            <DonateCard />
          </div>

          <div>
            <DonateCard />
          </div>

          <div>
            <DonateCard />
          </div>

          <div>
            <DonateCard />
          </div>

          <div>
            <DonateCard />
          </div>

          <div>
            <DonateCard />
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-primary">View More</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsListing;
