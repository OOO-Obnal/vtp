import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logoPng from "./assets/img/logo.png";
import card1 from "./assets/img/card-1.svg";
import card2 from "./assets/img/card-2.png";
import card3 from "./assets/img/card-3.svg";
import card5 from "./assets/img/card-5.svg";
import introSliderImgOne from "./assets/img/intro-slider/picture-1.png";
import video from "./assets/video.mp4";

import "swiper/css";
//import 'swiper/css/pagination';

import Card from "./components/Card";
import { useEffect } from "react";

const App = () => {
  const [videoActive, setVideoActive] = useState(true);
  const videoItem = useRef(null);
  const videoBlock = useRef(null);
  const whatButtonNext = useRef(null);
  const whatButtonPrev = useRef(null);

  useEffect(() => {
    const onClickVideo = (event) => {
      if (event.path.includes(videoBlock.current)) {
        if (videoItem.current.paused) {
          videoItem.current.play();
          setVideoActive(false);
        } else {
          videoItem.current.pause();
          setVideoActive(true);
        }
      }
    };
    document.body.addEventListener("click", onClickVideo);

    return () => document.body.removeEventListener("click", onClickVideo);
  }, []);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <a href={"ахуеть"} className="header__logo">
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
      <div className="container">
        <div className={`video ${videoActive ? "active" : ""}`}>
          <div ref={videoBlock} className="video__wrapper">
            <video ref={videoItem} poster={introSliderImgOne}>
              <source src={video} type="video/mp4" />
            </video>
            {videoActive && <button className="video__button"></button>}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card__s">
          <h1>МЫ ПРЕДЛАГАЕМ</h1>
          <div className="card__block">
            <Card src={card1} />
            <Card src={card2} />
            <Card src={card3} />
            <Card src={card2} />
            <Card src={card5} />
            <Card src={card2} />
          </div>
        </div>
      </div>
      <div className="what">
        <div className="container">
          <div className="what__container">
            <div className="what__slider-wrapper">
              <Swiper
                className=".what__slider"
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{
                  type: "fraction",
                }}
                spaceBetween={50}
                slidesPerView={1}
                direction="horizontal"
                navigation={{
                  prevEl: whatButtonPrev.current,
                  nextEl: whatButtonNext.current,
                }}
                loop={true}
                speed={1000}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                freeMode={true}
              >
                <SwiperSlide>
                  <div className="what__slider-block">Slide 1</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="what__slider-block">Slide 2</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="what__slider-block">Slide 3</div>
                </SwiperSlide>
              </Swiper>
              <div className="what__slider-buttons">
                <button
                  ref={whatButtonPrev}
                  className="what__slider-prev"
                ></button>
                <button
                  ref={whatButtonNext}
                  className="what__slider-next"
                ></button>
              </div>
            </div>
            <div className="what__block">
              <h1>ЧТО ОН УМЕЕТ?</h1>
              <div className="what__block__container">
                <div className="what__block__text">
                  Качество нашей техники позволяет получить печать выского
                  качества, которая в последствии прослужит долгое время.
                </div>
                <div className="what__block__text">
                  Продукт, созданный на нашей технике будет иметь в своём
                  арсенале исключительные превосходства, отличающие его от всех!
                </div>
              </div>
              <div className="what__block__ps">
                печать изображений на майках *
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="decisions">
        <div className="container">
          <h1>ГОТОВЫЕ РЕШЕНИЯ</h1>
          <div className="decisions__block">
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
            <div className="decisions__block__elem"></div>
          </div>
        </div>
      </div>

      <div className="materials">
        <h1 className="mat">МАТЕРИАЛЫ</h1>
        <div className="materials__container">
          <div className="container">
            <div className="materials__center">
              <div className="materials__el">
                <div className="materials__el__img1"></div>
                <h2 className="materials__el__h">Сублимационные чернила</h2>
                <ul className="materials__el__text">
                  <li>DS Black (Черный)</li>
                  <li>DS Cyan (Голубой)</li>
                  <li>DS Magenta (Пурпурный)</li>
                  <li>DS Yellow (Желтый)</li>
                </ul>
              </div>
              <div className="materials__el">
                <div className="materials__el__img2"></div>
                <h2 className="materials__el__h">Сублимационная бумага</h2>
                <ul className="materials__el__text">
                  <li>Xerox Sublim Paper 95г</li>
                  <li>Champaper TRANSJET ECO II 95г</li>
                  <li>JasperPaper 45/95 гр</li>
                  <li>Trans Art N-type 90г</li>
                </ul>
              </div>
              <div className="materials__el">
                <div className="materials__el__img3"></div>
                <h2 className="materials__el__h">Сублимационная ткань</h2>
                <ul className="materials__el__text">
                  <li>
                    Тканевое полотно, в составе которого имеется не менее 50%
                    полиэстера.
                  </li>
                  <li>
                    Позволяет перенести практически любую яркую картинку на
                    материал либо готовое изделие.
                  </li>
                </ul>
              </div>
              <div className="materials__el">
                <div className="materials__el__img4"></div>
                <h2 className="materials__el__h">
                  Защитная бумага + тефлоновые листы
                </h2>
                <ul className="materials__el__text">
                  <li>
                    Используется для защиты верхней нагревательной плиты и
                    нижней термостойкой пористой резины от грязи, нагара,
                    царапин.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="format">
        <h1>ФОРМАТНЫЕ ТЕРМОПРЕССЫ</h1>
        <div className="format__container">
          <div className="container">
            <div className="format__block">
              <div className="format__el bor__first">
                <div className="format__el__img1"></div>
                <h2>Термопресс Schulze Blue PRESS SWING</h2>
                <div className="format__el__text">
                  Надёжный поворотный термопресс. Модель с плоской
                  нагревательной нагревательной плитой рабочей площадью 40х50 см
                </div>
                <button>Узнать больше</button>
              </div>
              <div className="format__el bor__second">
                <div className="format__el__img2"></div>
                <h2>Термопресс Schulze BLUE PRESS LINE SIZE 3</h2>
                <div className="format__el__text">
                  Вертикально-откидной термопресс. Модель с плоской
                  нагревательной плитой рабочей площадью 40х50 см
                </div>
                <button>Узнать больше</button>
              </div>
              <div className="format__el bor__third">
                <div className="format__el__img3"></div>
                <h2>Термопресс LOPO Neptune Press</h2>
                <div className="format__el__text">
                  Плоский термопресс Neptune Press - прочный и надёжный пресс
                  высокого давления с рабочей областью 50х40 см
                </div>
                <button className="buttt">Узнать больше</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
