import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

const Blog = () => {
  return (
    <section className="section">
      <div className="flex gap-4 flex-col lg:flex-row w-full">
        <div className="flex-1 lg:w-1/2 flex items-center rounded-ss-2xl rounded-se-2xl  justify-center overflow-hidden w-full">
          <div className="">
            <div className="w-full relative rounded-2xl overflow-hidden h-72">
              <Image
                src="/laptopPhone.avif"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="man"
              />
            </div>
            <div className="flex flex-col sm:flex-row py-4 gap-2">
              <p className="">Digital Marketing • </p>
              <div className="flex gap-2 place-items-center">
                <CiCalendarDate /> <p>June 2024</p>
              </div>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">
                  The Future of Social Media Marketing
                </h1>
                <p className="">
                  As the digital landscape continues to evolve, staying ahead of
                  emerging trends is crucial for any brand. Know more in this
                  blog.
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-lightGreen">Read More</p>
                  <FaArrowRightLong className="text-lightGreen" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 gap-4 sm:gap-8 flex flex-col items-center justify-center">
          <div className="">
            <div className="flex gap-4">
              <div className="w-full relative rounded-2xl overflow-hidden h-56">
                <Image
                  src="/workspaceBlog.avif"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="man"
                />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row py-4 gap-2">
                  <p className="">Digital Marketing • </p>
                  <div className="flex gap-2 place-items-center">
                    <CiCalendarDate /> <p>June 2024</p>
                  </div>
                </div>
                <div className="flex flex-col  gap-4">
                  <div className="space-y-2">
                    <h1 className="font-semibold text-2xl">
                      The Future of Social Media Marketing
                    </h1>
                    <p className="">
                      As the digital landscape continues to evolve, staying
                      ahead of emerging trends is crucial for any brand. Know
                      more in this blog.
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-lightGreen">Read More</p>
                      <FaArrowRightLong className="text-lightGreen" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-4">
              <div className="w-full relative rounded-2xl overflow-hidden h-56">
                <Image
                  src="/luxemart.avif"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="man"
                />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row py-4 gap-2">
                  <p className="">Digital Marketing • </p>
                  <div className="flex gap-2 place-items-center">
                    <CiCalendarDate /> <p>June 2024</p>
                  </div>
                </div>
                <div className="flex flex-col  gap-4">
                  <div className="space-y-2">
                    <h1 className="font-semibold text-2xl">
                      The Future of Social Media Marketing
                    </h1>
                    <p className="">
                      As the digital landscape continues to evolve, staying
                      ahead of emerging trends is crucial for any brand. Know
                      more in this blog.
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-lightGreen">Read More</p>
                      <FaArrowRightLong className="text-lightGreen" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Blog;
