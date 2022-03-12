import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from "../assets/img/portfolio1.jpg"
import img2 from "../assets/img/portfolio2.jpg"
import img3 from "../assets/img/portfolio3.jpg"
import img4 from "../assets/img/portfolio1.jpg"
import projectImg from "../assets/img/project.png"

const Portfolio = () => {
  const onlyWidth = useWindowWidth();
  return (
    <>
    <section class="portfolio section" id="portfolio">
                <h2 class="section_title">Portfolio</h2>
                <span class="section_subtitle">
                    Most Recent Works
                </span>
      <div class="portfolio_container container swiper-container">
        <div class="swiper-wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
           
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div class="portfolio_content grid swiper-slide">
                <img
                  src={img1}
                  alt=""
                  class="portflio_img"
                />
                <div class="portfolio_data">
                  <h3 class="portfolio_title">Modern Website</h3>
                  <p class="portfolio_description">
                    Website aaptable to all devices, with ui components and
                    animated interactions{" "}
                  </p>
                  <a
                    href="#"
                    class="button button--flex button--small portfolio_button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="portfolio_content grid swiper-slide">
                <img
                  src={img2}
                  alt=""
                  class="portflio_img"
                />
                <div class="portfolio_data">
                  <h3 class="portfolio_title">Modern Website</h3>
                  <p class="portfolio_description">
                    Website aaptable to all devices, with ui components and
                    animated interactions{" "}
                  </p>
                  <a
                    href="#"
                    class="button button--flex button--small portfolio_button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="portfolio_content grid swiper-slide">
                <img
                  src={img3}
                  alt=""
                  class="portflio_img"
                />
                <div class="portfolio_data">
                  <h3 class="portfolio_title">Brand Design</h3>
                  <p class="portfolio_description">
                    Website aaptable to all devices, with ui components and
                    animated interactions{" "}
                  </p>
                  <a
                    href="#"
                    class="button button--flex button--small portfolio_button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="portfolio_content grid swiper-slide">
                <img
                  src={img4}
                  alt=""
                  class="portflio_img"
                />
                <div class="portfolio_data">
                  <h3 class="portfolio_title">Online Store</h3>
                  <p class="portfolio_description">
                    Website aaptable to all devices, with ui components and
                    animated interactions{" "}
                  </p>
                  <a
                    href="#"
                    class="button button--flex button--small portfolio_button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </section>

      <section class="project section">
        <div class="project_bg">
          <div class="project_conatiner container grid">
            <div class="project_data">
              <h2 class="project_title">You Have a new Project</h2>
              <p class="project_description">Contact me now and get discount</p>
              <a href="#contact" class="button button--flex button-white">
                Conatct Me
                <i class="uil uil-message project_icon button_icon"></i>
              </a>
            </div>
            <img src={projectImg} alt="" class="project_img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
