import { worksData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  return (
    <section className="section">
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="flex gap-2 rounded-full p-2 px-4 bg-bgBackground dark:text-black font-bold text-sm">
            <Image src="/brush.svg" height={15} width={15} alt="brush" />
            <p className="text-xs">Porfolio</p>
          </div>
        </div>
        <div className="space-y-2 mt-4 sm:mt-8">
          <h1 className="text-center font-bold text-2xl sm:text-4xl">
            What We have done
          </h1>
          <p className="text-center">
            We offer a range of cutting-edge services designed to amplify your
            brand's reach and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
          {worksData?.map(({ title, des, subtitle, img }, idx) => (
            <div
              key={idx}
              className="flex flex-col border-[1px] rounded-xl p-4 sm:p-8"
            >
              <div className="flex-1 mb-4">
                <div className="flex-1 relative h-96 overflow-hidden flex items-center justify-center rounded-xl">
                  <Image
                    src={img}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    alt="brush"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-2xl">{title}</p>
                <h1 className="">{subtitle}</h1>
                <p className="">{des}</p>
                <Link
                  href={`/work/${idx}`}
                  className="text-green-500 flex items-center "
                >
                  <span className="">Learn More</span>
                  <FaArrowRightLong className="ml-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
