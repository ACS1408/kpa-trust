"use client";
import Image from "next/image";
import style from "./NewsDetailGallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const NewsDetailGallery = (props) => {
  return (
    <section className={style.section}>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        modules={[Autoplay]}
        className={style.news_detail_gallery__slider}
        breakpoints={{
          992: {
            spaceBetween: 40,
          },
        }}
      >
        {galleryImages?.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <figure className={`${style.gallery_image} ratio mb-0`}>
                <Image
                  src={image?.url}
                  fill
                  alt={image?.alt}
                  sizes="(min-width: 1200px) 12vw, (min-width: 992px) 20vw, (min-width: 768px) 30vw, (min-width: 576px) 50vw, 75vw"
                  quality={90}
                />
              </figure>
            </SwiperSlide>
          );
        })}
        {galleryImages?.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <figure className={`${style.gallery_image} ratio mb-0`}>
                <Image
                  src={image?.url}
                  fill
                  alt={image?.alt}
                  sizes="(min-width: 1200px) 12vw, (min-width: 992px) 20vw, (min-width: 768px) 30vw, (min-width: 576px) 50vw, 75vw"
                  quality={90}
                />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default NewsDetailGallery;

const galleryImages = [
  {
    url: "/images/gallery-1.png",
    alt: "gallery-img",
  },
  {
    url: "/images/gallery-2.png",
    alt: "gallery-img",
  },
  {
    url: "/images/gallery-3.png",
    alt: "gallery-img",
  },
  {
    url: "/images/gallery-4.png",
    alt: "gallery-img",
  },
  {
    url: "/images/gallery-5.png",
    alt: "gallery-img",
  },
  {
    url: "/images/gallery-6.png",
    alt: "gallery-img",
  },
  {
    url: "/images/gallery-7.png",
    alt: "gallery-img",
  },
];
