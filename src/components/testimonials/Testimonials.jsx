import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/louise.jpeg";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Louise Nobes / Founder of 42 School Australia",
    review:
      "Jonathan is a great human! I've known him as a student at the 42 school. From the beginning he showed to be a great support and mentor to others, while working hard in developing his tech skills. I was quite impressed with his can do spirit and determination to solve problems, be a team player and have compassion for the greater good. I have no doubt he will shine in anything he does."
  }
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">
                {name}
              </h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
