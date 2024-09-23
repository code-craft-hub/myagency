import ButtonComponent from "@/components/ButtonComponent";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="section ">
      <div className="flex flex-col md:flex-row w-full bg-green-700/10 justify-between rounded-2xl relative">
        <div className="md:w-1/2 w-full flex flex-col p-4 sm:p-8 gap-4">
          <div className="rounded-full p-2 gap-2 items-center justify-center flex bg-bgBackground dark:text-black max-w-56">
            <div>
              <Image src="/smallStar.svg" width={20} height={20} alt="" />
            </div>
            <p className="text-xs font-bold">CONTACT US</p>
          </div>
          <h1 className="">Ready to Elevate Your Brand?</h1>
          <p className="">
            Partner with Pulse Z and let's create something extraordinary
            together.
          </p>
          <div className="max-w-56">

          <ButtonComponent text="Get in Touch" icon={true} fill={"outline"}/>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="w-full relative flex justify-end pr-2 pt-2">
            <Image
              src="/footer-bg-graphic.svg"
              width={100}
              height={100}
              alt="man"
              className=""
            />
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default CallToAction;
