import ButtonComponent from "@/components/Button";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const CaseStudy = () => {
  return (
    <section className="section">
      <div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-4 items-center justify-center md:w-1/2">
            <div className="flex  rounded-full p-2 gap-2 px-4 bg-bgBackground dark:text-black font-bold text-sm">
              <Image src="/trophy.svg" height={15} width={15} alt="brush" />
              <p className="text-xs">OUR SUCCESS STORIES</p>
            </div>
            <h1 className="font-medium text-3xl md:text-4xl text-center max-w-96">
              Transforming brands, one project at a time.
            </h1>
            <p className="">
              See how we've transformed brands and driven results.
            </p>
            <ButtonComponent text="More Case Studies" icon={true} />
          </div>
          <div className="flex-1 md:w-1/2 flex items-center justify-center border-[1px] rounded-2xl overflow-hidden w-full">
            <div className="">
              <div className="w-full relative h-72">
              <Image src="/luxemart.avif" fill={true} style={{ objectFit: 'cover' }} alt="man" />

              </div>

              <div className="flex flex-col sm:flex-row p-4 sm:p-8 gap-4">
                <div className="space-y-2">
                  <h1 className="font-semibold text-2xl">
                    Explore Related Case Studies
                  </h1>
                  <p className="">
                    Our team redefined their brand strategy, focusing on luxury
                    and exclusivity, resulting in a 40% increase in customer
                    engagement and a stronger market presence.
                  </p>
                </div>
                <div className="flex items-end ">
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

export default CaseStudy;
