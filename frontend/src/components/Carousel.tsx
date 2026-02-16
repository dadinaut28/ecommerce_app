import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
// import "swiper/modules/navigation.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="px-[20%]">
        <p className="italic mt-6 text-md sm:text-md font-light text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id
          repellendus voluptate, magni at deserunt quo ab.
        </p>
        <div className="flex justify-center">
          <div className="mt-7 flex gap-5">
            <img
              className="w-10 rounded-full border border-gray-400"
              src=".././images/profile_user.jpeg"
              alt="Image d'un client"
            />
            <p className="text-md ">John Doe</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="px-[20%]">
        <p className="italic mt-6 text-md sm:text-md font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id
          repellendus voluptate, magni at deserunt quo ab.
        </p>
        <div className="flex justify-center">
          <div className="mt-7 flex gap-5">
            <img
              className="w-10 rounded-full border border-gray-400"
              src=".././images/profile_user.jpeg"
              alt="Image d'un client"
            />
            <p className="text-md ">Harry Doe</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="px-[20%]">
        <p className="italic mt-6 text-md sm:text-md font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id
          repellendus voluptate, magni at deserunt quo ab.
        </p>
        <div className="flex justify-center">
          <div className="mt-7 flex gap-5">
            <img
              className="w-10 rounded-full border border-gray-400"
              src=".././images/profile_user.jpeg"
              alt="Image d'un client"
            />
            <p className="text-md ">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
