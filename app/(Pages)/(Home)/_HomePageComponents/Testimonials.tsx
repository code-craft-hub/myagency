"use client";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaStar } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="section ">
      <div className=" w-full">
        <Swiper
          modules={[Pagination,  Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },

            668: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="!p-16"
        >
          {[1, 2, 3, 4, 5].map((_, i) => (
            <SwiperSlide key={i} className="bg-zinc-900 rounded-xl">
              <div className="rounded-xl p-4 sm:p-8">
                <div className="flex my-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i}>
                      <FaStar className="text-yellow-500" />
                    </div>
                  ))}
                </div>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                  error? Aspernatur, quisquam consequatur sint id consectetur
                  doloremque repellat cupiditate.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src="/Anastasya.webp"
                      alt="reviewer"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="font-semibold">Jonas Khanwald</h1>
                    <p className="">Co-Founder, Vercel</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
