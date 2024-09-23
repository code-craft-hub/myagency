import ButtonComponent from "@/components/ButtonComponent";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="rounded-full p-2 gap-2 items-center justify-center flex bg-bgBackground dark:text-black max-w-56">
            <div>
              <Image src="/smallStar.svg" width={20} height={20} alt="" />
            </div>
            <p className="text-xs font-bold">YOUR PARTNER IN SUCCESS</p>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Realize Your Brand's Maximum Potential
            </h1>
            <p className="">
              Cutting-edge marketing strategies designed to amplify your brand's
              presence, increase visibility and drive results.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <ButtonComponent text="Get Started" icon={true} />
            <ButtonComponent text="View Services" fill="outline" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center max-sm:justify-center">
            <div className="">
              <Image
                src="/stack.avif"
                width={120}
                height={120}
                alt="reviewers"
              />
            </div>
            <div className="">
              <div className="text-3xl items-baseline">
                100<span className="text-lightGreen">+</span>
              </div>
              <div className="">
                <p>Active Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 realtive flex items-center justify-center">
          <div className="">
            <Image
              src="/pointingImage.avif"
              height={350}
              width={350}
              alt="man"
            />
          </div>
          <div className="absolute hidden lg:block lg:top-96 ">
            <Image src="/revenue.avif" height={200} width={200} alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
