import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <section className="section">
      <div className="flex gap-4 flex-col md:flex-row w-full">
        <div className="flex-1 md:w-1/2 flex items-center justify-center">
          <div className="">
            <Image src="/girlWithJoy.avif" height={500} width={500} alt="man" />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center md:w-1/2 p-4 md:p-8">
          <div className="flex  rounded-full p-2 gap-2 px-4 bg-bgBackground dark:text-black font-bold text-sm">
            <Image src="/route.svg" height={15} width={15} alt="brush" />
            <p className="text-xs">OUR PROCESS</p>
          </div>
          <h1 className="font-medium text-3xl md:text-4xl text-center max-w-96">
            From Vision to Victory
          </h1>
          <p className="">
            Our streamlined process is designed to deliver outstanding results
            at every stage of your marketing journey. Here's how we do it:
          </p>
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-lightGreen h-2 w-2 rounded-full"></div>
              <p className="font-medium py-2">Discover & Strategize</p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-lightGreen h-20 lg:h-12 w-1 ml-0.5"></div>
              <p className="">
                We dive deep into understanding your brand, audience, and goals
                to craft a custom strategy that aligns with your vision.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-lightGreen h-2 w-2 rounded-full"></div>
              <p className="font-medium py-2">Create & Execute</p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-lightGreen h-20 lg:h-12 w-1 ml-0.5"></div>
              <p className="">
                Our team brings your strategy to life with innovative campaigns,
                content, and designs that resonate with your audience.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-lightGreen h-2 w-2 rounded-full"></div>
              <p className="font-medium py-2">Analyze & Optimize</p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-lightGreen h-20 lg:h-12 w-1 ml-0.5"></div>
              <p className="">
                We continuously monitor the performance of your campaigns,
                making data-driven adjustments to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
