import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logoPng from "./assets/img/logo.png";
import introSliderImgOne from "./assets/img/intro-slider/picture-1.png";
import video from "./assets/video.mp4";

import "swiper/css";

const App = () => {
  const [videoActive, setVideoActive] = useState(true);
  const myVideo = useRef(null);
  const videoClick = () => {
    if (myVideo.current.paused) {
      myVideo.current.play();
      setVideoActive(false);
    } else {
      myVideo.current.pause();
      setVideoActive(true);
    }
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <a href="#" className="header__logo">
              <img src={logoPng} alt="logo" />
            </a>
            <ul className="header__info">
              <li className="header__info-item">
                <a href="tel:+73832120901">+7 (383) 212-09-01</a>
              </li>
              <li className="header__info-item">
                <a href="tel:+78002014170">8-800-201-41-70</a>
              </li>
              <li className="header__info-item">
                НОВОСИБИРСК ОФИС: Н. ОСТРОВСКОГО, 37
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="container">
          <div className="intro__wrapper">
            <div className="intro__info">
              <div className="intro__info-suptitle">Что нового?</div>
              <h1 className="intro__info-title">
                Ваша собственная фабрика цифровой печати по текстилю из Японии!
              </h1>
              <div className="intro__info-desc">
                Для самых смелых экспериментов и идей, будь то эксклюзивная
                одежда, уникальные сумки, дизайн интерьера или украшение сцены и
                праздников – Epson SC-F6300 Ваш незаменимый и надежный
                инструмент!
              </div>
              <div className="intro__info-sign">
                Примеры из каталога
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="intro__slider-wrapper">
              <Swiper
                className=".intro__slider"
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                direction="horizontal"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                speed={1000}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                freeMode={true}
              >
                <SwiperSlide>
                  <div className="intro__slider-block">
                    <div>
                      <img src={introSliderImgOne} alt="1" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="intro__slider-block">
                    <div>
                      <img src={introSliderImgOne} alt="1" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="intro__slider-block">
                    <div>
                      <img src={introSliderImgOne} alt="1" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className={`video ${videoActive ? "active" : ""}`}>
        <video
          onClick={videoClick}
          ref={myVideo}
          width="400"
          height="300"
          poster={introSliderImgOne}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default App;
