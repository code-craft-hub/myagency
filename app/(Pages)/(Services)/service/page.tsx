import ButtonComponent from "@/components/ButtonComponent";
import { serviceItems, visionToVictory } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="section flex flex-col">
      <main>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 rounded-full p-2 px-4 bg-bgBackground dark:text-black font-bold text-sm w-fit">
            <Image src="/brush.svg" height={15} width={15} alt="brush" />
            <p className="text-xs">OUR SERVICES</p>
          </div>
          <div className="space-y-2 mt-4 sm:mt-8">
            <h1 className="text-center font-bold text-2xl sm:text-4xl">
              Our Offerings at Pulse Z
            </h1>
            <p className="text-center">
              Explore our services below and discover how we can help you
              achieve your business goals.
            </p>
          </div>
        </div>

        <div className="py-8 sm:py-16 flex flex-col ">
          {serviceItems?.map(({ title, des, icon, img }, idx) => (
            <div
              key={idx}
              className="flex gap-8 md:gap-16 flex-col md:flex-row border-b-[1px] py-8 md:py-16"
            >
              <div className="flex gap-4 sm:gap-8 md:w-1/2">
                <div>
                  <div className="border-[1px] rounded-full p-2">
                    <Image src={icon} height={25} width={25} alt="stack" />
                  </div>
                </div>
                <div className="flex-1 flex-col flex gap-4 ">
                  <h1 className="text-2xl font-semibold">{title}</h1>
                  <p className="">{des}</p>
                  <div className="max-w-44">
                    <ButtonComponent text="Learn More" icon={true} />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex-1  flex items-center justify-center">
                  <Image src={img} height={250} width={250} alt="brush" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className=" items-center justify-center flex flex-col py-8 sm:py-16 gap-2 md:gap-4 ">
        <div className="flex w-fit rounded-full p-2 gap-2 px-4 bg-bgBackground dark:text-black font-bold text-sm">
          <Image src="/route.svg" height={15} width={15} alt="brush" />
          <p className="text-xs">OUR PROCESS</p>
        </div>
        <h1 className="font-medium text-3xl md:text-4xl text-center max-w-96">
          From Vision to Victory
        </h1>
        <p className="text-center max-w-[600px]">
          Our streamlined process is designed to deliver outstanding results at
          every stage of your marketing journey. Here's how we do it:
        </p>
      </div>
      <main className="flex flex-col md:flex-row ">
        {visionToVictory?.map(({ icon, title, des }, index) => (
          <div
            className={`${
              index === 1 &&
              "max-md:border-b-[1px] max-md:border-t-[1px] md:border-l-[1px] md:border-r-[1px] "
            } p-4 sm:px-8 space-y-4`}
            key={index}
          >
            <div className="rounded-xl bg-lightGreen p-3 w-fit self-auto">
              <Image src={icon} height={15} width={15} alt="brush" />
            </div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="">{des}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Services;
