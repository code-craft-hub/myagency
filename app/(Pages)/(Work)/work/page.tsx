import ButtonComponent from "@/components/ButtonComponent";
import { worksData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <section className="section flex flex-col">
      <main>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 rounded-full p-2 px-4 bg-bgBackground dark:text-black font-bold text-sm w-fit">
            <Image src="/stack.svg" height={15} width={15} alt="brush" />
            <p className="text-xs">Porfolio</p>
          </div>
          <div className="space-y-2 mt-4 sm:mt-8">
            <h1 className="text-center font-bold text-2xl sm:text-4xl">
              Innovative digital solutions
            </h1>
            <p className="text-center">
              Explore our services below and discover how we can help you
              achieve your business goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
          {worksData?.map(({ title, des, subtitle, img }, idx) => (
            <div
              key={idx}
              className="flex flex-col border-[1px] rounded-xl p-4 sm:p-8"
            >
              <div className="flex-1 mb-4">
                <div className="flex-1 relative h-52 overflow-hidden flex items-center justify-center rounded-xl">
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
      </main>

      <main className="border-2 rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 gap-4 sm:gap-8 my-8 md:my-16">
        <p className="text-lightGreen">Lets Talk</p>
        <h1 className="font-bold text-3xl text-center">
          We love challenges big and small - what's yours?
        </h1>
        <p className="">
          Our committed staff makes sure that there are digital strategies,
          compliance, and customized advice. We are a reliable partner for your
          digital success because of our quality and service.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-8">
          <ButtonComponent text={"Get Started"} />
          <ButtonComponent text={"Contact Us"} fill={"outline"} />
        </div>
      </main>
    </section>
  );
};

export default page;
