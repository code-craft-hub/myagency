import Image from "next/image";
import React from "react";

const Passion = () => {
  return (
    <section className="section">
      <div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-4 items-center justify-center md:w-1/2">
            <div className="flex  rounded-full p-2 gap-2 px-4 bg-bgBackground dark:text-black font-bold text-sm">
              <Image
                src="/heart-handshake.svg"
                height={15}
                width={15}
                alt="brush"
              />
              <p className="text-xs">MEET PULSE Z</p>
            </div>
            <h1 className="font-medium text-3xl md:text-4xl text-center max-w-96">
              Where Passion Meets Performance
            </h1>
          </div>
          <div className="flex-1 md:w-1/2">
            <p className="pb-8 border-b-[1px]">
              At Pulse Z, we're not just a marketing agency; we're your partners
              in growth. With a team of innovative thinkers and a proven track
              record, we transform brands into industry leaders. Our approach is
              simple: create, execute, and optimize with excellence.
            </p>
            <div className="flex flex-wrap gap-4 w-full justify-center sm:justify-between">
              <div className="mt-4 flex flex-col place-items-center">
                <div className="text-3xl items-baseline">
                  50<span className="text-lightGreen">+</span>
                </div>
                <p className="text-center">Happy Clients</p>
              </div>
              <div className="mt-4 flex flex-col place-items-center">
                <div className="text-3xl items-baseline">
                  20<span className="text-lightGreen">+</span>
                </div>
                <p className="text-center">Projects Completed</p>
              </div>
              <div className="mt-4 flex flex-col place-items-center">
                <div className="text-3xl items-baseline">
                  $10K<span className="text-lightGreen">+</span>
                </div>
                <p className="text-center">Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative h-96 mt-8">
          <Image
            src="/CelebratoryMomentinOffice.avif"
            fill={true}
            style={{ objectFit: 'cover' }}
            alt="office"
            className="rounded-ss-3xl rounded-se-3xl rounded-es-3xl  "
          />
        </div>
      </div>
    </section>
  );
};

export default Passion;
