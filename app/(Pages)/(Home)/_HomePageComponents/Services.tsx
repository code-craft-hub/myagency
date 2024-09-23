import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <section className="section">
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="flex gap-2 rounded-full p-2 px-4 bg-bgBackground dark:text-black font-bold text-sm">
            <Image src="/brush.svg" height={15} width={15} alt="brush" />
            <p className="text-xs">OUR SERVICES</p>
          </div>
        </div>
        <div className="space-y-2 mt-4 sm:mt-8">
          <h1 className="text-center font-bold text-2xl sm:text-4xl">
            Our Expertise, Your Success.{" "}
          </h1>
          <p className="text-center">
            We offer a range of cutting-edge services designed to amplify your
            brand's reach and impact.
          </p>
        </div>
        <div className="space-y-4 mt-4 sm:mt-8">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="w-full md:w-7/12 border-[1px] rounded-xl hover:border-lightGreen p-4 md:p-8 justify-between flex-col flex">
              <div className="flex-1  flex items-center justify-center">
                <Image
                  src="/ladyOnABulb.svg"
                  height={250}
                  width={250}
                  alt="brush"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="max-w-[350px]">
                  <h1 className="font-bold text-2xl my-2">Brand Strategy</h1>
                  <p>
                    Craft a powerful and cohesive brand identity that resonates
                    with your target audience.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="rounded-full bg-lightGreen p-2">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 border-[1px] rounded-xl hover:border-lightGreen p-4 md:p-8 justify-between flex-col flex">
              <div className="flex-1  flex items-center justify-center">
                <Image
                  src="/jumpClapping.svg"
                  height={250}
                  width={250}
                  alt="brush"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="max-w-[350px]">
                  <h1 className="font-bold text-2xl my-2">Digital Marketing</h1>
                  <p>
                    Drive growth through targeted campaigns across digital
                    channels.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="rounded-full bg-lightGreen p-2">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="w-full md:w-5/12 border-[1px] rounded-xl hover:border-lightGreen p-4 md:p-8 justify-between flex-col flex">
              <div className="flex-1  flex items-center justify-center">
                <Image
                  src="/sittingBeforeDesktop.svg"
                  height={250}
                  width={250}
                  alt="brush"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="max-w-[350px]">
                  <h1 className="font-bold text-2xl my-2">
                    SEO & Content Marketing
                  </h1>
                  <p>
                    Boost your online visibility with expert SEO strategies.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="rounded-full bg-lightGreen p-2">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12 border-[1px] rounded-xl hover:border-lightGreen p-4 md:p-8 justify-between flex-col flex">
              <div className="flex-1  flex items-center justify-center">
                <Image
                  src="/clickHook.svg"
                  height={250}
                  width={250}
                  alt="brush"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="max-w-[350px]">
                  <h1 className="font-bold text-2xl my-2">
                    Social Media Management
                  </h1>
                  <p>
                    Engage your audience with creative and consistent social
                    media presence.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="rounded-full bg-lightGreen p-2">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="w-full md:w-7/12 border-[1px] rounded-xl hover:border-lightGreen p-4 md:p-8 justify-between flex-col flex">
              <div className="flex-1  flex items-center justify-center">
                <Image
                  src="/fixingCard.svg"
                  height={250}
                  width={250}
                  alt="brush"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="max-w-[350px]">
                  <h1 className="font-bold text-2xl my-2">Creative Design</h1>
                  <p>
                    Bring your brand to life with stunning visuals and designs.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="rounded-full bg-lightGreen p-2">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 border-[1px] rounded-xl hover:border-lightGreen p-4 md:p-8 justify-between flex-col flex">
              <div className="flex-1  flex items-center justify-center">
                <Image
                  src="/ladywithMicrophone.svg"
                  height={250}
                  width={250}
                  alt="brush"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="max-w-[350px]">
                  <h1 className="font-bold text-2xl my-2">Paid Advertising</h1>
                  <p>
                    Maximize ROI with data-driven ad campaigns across platforms
                    like Meta and Google.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="rounded-full bg-lightGreen p-2">
                    <GoArrowUpRight />
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

export default Services;
