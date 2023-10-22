"use client";
import style from "./EventsListing.module.scss";
import EventCard from "../EventCard";

const EventsListing = (props) => {
  return (
    <section className={style.section}>
      <div className="container">
        <h1 className="h1 ff-primary fw-bold mb-lg-5">Our Events</h1>

        <nav
          className={`${style.category_nav} d-flex align-items-center flex-nowrap`}
        >
          <div className={`${style.category_nav__item} btn btn-primary`}>
            All Categories
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Recent News
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Success Stories
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Partnerships
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Volunteer Spotlight
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            In the Media
          </div>
          <div
            className={`${style.category_nav__item} btn btn-outline-primary`}
          >
            Community Outreach
          </div>
        </nav>

        <div className={`row row-cols-lg-3 mb-lg-4 ${style.row}`}>
          <div>
            <EventCard />
          </div>

          <div>
            <EventCard />
          </div>

          <div>
            <EventCard />
          </div>

          <div>
            <EventCard />
          </div>

          <div>
            <EventCard />
          </div>

          <div>
            <EventCard />
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-primary">View More</button>
        </div>
      </div>
    </section>
  );
};

export default EventsListing;
