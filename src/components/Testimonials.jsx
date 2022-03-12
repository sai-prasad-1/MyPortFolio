import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
    const onlyWidth = useWindowWidth()
    // console.log(onlyWidth);
  return (
    <section className="testimonial section">
      <h2 className="section_title">Testimonials</h2>
      <span className="section_subtitle">My clients saying</span>

      <div className="testimonial_container container swiper-container">
        <Swiper
        slidesPerView={onlyWidth>=658?2:1}
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 1500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
      
       modules={[Autoplay, Pagination, Navigation]}
       className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial_content swiper-slide">
              <div className="testimonial_data">
                <div className="testimonial_header">
                  <img
                    src="assets/img/testimonial1.jpg"
                    alt=""
                    className="testimonial_img"
                  />

                  <div>
                    <h3 className="testimonial_name">Sara Smith</h3>
                    <span className="testimonial_client">Client</span>
                  </div>
                </div>

                <div>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                </div>
              </div>
              <p className="testimonial_description">
                I got a good Impression,He carried out y project with all
                possible quality and attention and support 24hrs a day{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_content swiper-slide">
              <div className="testimonial_data">
                <div className="testimonial_header">
                  <img
                    src="assets/img/testimonial2.jpg"
                    alt=""
                    className="testimonial_img"
                  />

                  <div>
                    <h3 className="testimonial_name">Matt Robhinson</h3>
                    <span className="testimonial_client">Client</span>
                  </div>
                </div>

                <div>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                </div>
              </div>
              <p className="testimonial_description">
                I got a good Impression,He carried out y project with all
                possible quality and attention and support 24hrs a day{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_content swiper-slide">
              <div className="testimonial_data">
                <div className="testimonial_header">
                  <img
                    src="assets/img/testimonial3.jpg"
                    alt=""
                    className="testimonial_img"
                  />

                  <div>
                    <h3 className="testimonial_name">Sara Smith</h3>
                    <span className="testimonial_client">Client</span>
                  </div>
                </div>

                <div>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                  <i className="uil uil-star testimonial-start-icon"></i>
                </div>
              </div>
              <p className="testimonial_description">
                I got a good Impression,He carried out y project with all
                possible quality and attention and support 24hrs a day{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>
  );
};

export default Testimonials;
