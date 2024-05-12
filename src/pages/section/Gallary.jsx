import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "/src/pages/section/gallary.css";

import slide_image_1 from "/gallary/img_1.jpg";
import slide_image_2 from "/gallary/img_2.png";
import slide_image_3 from "/gallary/img_3.png";
import slide_image_4 from "/gallary/img_4.png";
import slide_image_5 from "/gallary/img_5.png";
import slide_image_6 from "/gallary/img_6.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Gallary = () => {
  return (
    <div className="relative w-full h-auto  bg-gray-100 text-white grid place-items-center z-10  overflow-hidden ">
      <img
        className="absolute w-[100vw]    opacity-[0.2]"
        alt=""
        src="/assets/back_gallary.png"
      />

      <div className="absolute top-[-2px] left-[calc(50%_-_501px)] [filter:blur(231px)] rounded-[50%] [background:linear-gradient(144.46deg,_rgba(55,_167,_244,_0.15),_rgba(88,_106,_252,_0.15))] w-[80%] h-[80%]" />

      <div className=" flex flex-col md:flex-row md:gap-4 md:justify-center md:items-center text-center uppercase font-jan-brady  h-full  z-10 ml-[-950px] md:ml-0  md:mt-10 ">
        <div className="text-transparent !bg-clip-text [background:linear-gradient(97.36deg,_#36a9f3,_#6256fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-[52px] text-[52px]">
          Elephant
        </div>
        <div className=" md:text-[52px] text-[42px]">MEME</div>
      </div>
      {/* --- Start Gallary -- */}
      <div className="container relative w-full  md:scale-75 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className="shadow-[0px_3.7px_3.7px_rgba(9,_9,_10,_0.37)] [backdrop-filter:blur(24.68px)] rounded-[26.58px] [background:linear-gradient(-1.29deg,_rgba(19,_29,_192,_0),_rgba(98,_86,_254,_0.55))] w-[358 p-8 py-10 bg-[#27436f] flex rounded-3xl  border-[1.5px] border-solid border-deepskyblue shadow-2xl shadow-[#3b4981] [filter:drop-shadow(0px_-1px_10px_#6256fe)]  ">
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_3.7px_3.7px_rgba(9,_9,_10,_0.37)] [backdrop-filter:blur(24.68px)] rounded-[26.58px] [background:linear-gradient(-1.29deg,_rgba(19,_29,_192,_0),_rgba(98,_86,_254,_0.55))] w-[358 p-8 py-10 bg-[#27436f] flex rounded-3xl  border-[1.5px] border-solid border-deepskyblue shadow-2xl shadow-[#3b4981] [filter:drop-shadow(0px_-1px_10px_#6256fe)] ">
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_3.7px_3.7px_rgba(9,_9,_10,_0.37)] [backdrop-filter:blur(24.68px)] rounded-[26.58px] [background:linear-gradient(-1.29deg,_rgba(19,_29,_192,_0),_rgba(98,_86,_254,_0.55))] w-[358 p-8 py-10 bg-[#27436f] flex rounded-3xl  border-[1.5px] border-solid border-deepskyblue shadow-2xl shadow-[#3b4981] [filter:drop-shadow(0px_-1px_10px_#6256fe)] ">
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_3.7px_3.7px_rgba(9,_9,_10,_0.37)] [backdrop-filter:blur(24.68px)] rounded-[26.58px] [background:linear-gradient(-1.29deg,_rgba(19,_29,_192,_0),_rgba(98,_86,_254,_0.55))] w-[358 p-8 py-10 bg-[#27436f] flex rounded-3xl  border-[1.5px] border-solid border-deepskyblue shadow-2xl shadow-[#3b4981] [filter:drop-shadow(0px_-1px_10px_#6256fe)] ">
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_3.7px_3.7px_rgba(9,_9,_10,_0.37)] [backdrop-filter:blur(24.68px)] rounded-[26.58px] [background:linear-gradient(-1.29deg,_rgba(19,_29,_192,_0),_rgba(98,_86,_254,_0.55))] w-[358 p-8 py-10 bg-[#27436f] flex rounded-3xl  border-[1.5px] border-solid border-deepskyblue shadow-2xl shadow-[#3b4981] [filter:drop-shadow(0px_-1px_10px_#6256fe)] ">
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_3.7px_3.7px_rgba(9,_9,_10,_0.37)] [backdrop-filter:blur(24.68px)] rounded-[26.58px] [background:linear-gradient(-1.29deg,_rgba(19,_29,_192,_0),_rgba(98,_86,_254,_0.55))] w-[358 p-8 py-10 bg-[#27436f] flex rounded-3xl  border-[1.5px] border-solid border-deepskyblue shadow-2xl shadow-[#3b4981] [filter:drop-shadow(0px_-1px_10px_#6256fe)] ">
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      {/* --- End Gallary -- */}
    </div>
  );
};
export default Gallary;
