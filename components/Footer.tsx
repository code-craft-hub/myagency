import React from "react";
import ButtonComponent from "./ButtonComponent";

const Footer = () => {
  return (
    <section className="section">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl text-center ">
          Ready to take your business to the next level?
        </h1>
        <p className="text-center py-4">
          Contact us today to discuss your project goals and receive a
          personalized quote.
        </p>
        <div className="">
          <ButtonComponent text="Book a Call" call={true} />
        </div>

        <div className="flex justify-between gap-4 flex-col md:flex-row w-full py-16">
          <div className="">
            logo
            <p className="">
              Empowering Brands, Igniting Growth, and Shaping Futures.
            </p>
          </div>
          <div className="">
            <h1 className="">Navigation</h1>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <li key={i}>Home</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="">Services</h1>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <li key={i}>Web development</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="">Socials</h1>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <li key={i}>Instagram</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t-[1px] justify-between flex flex-col sm:flex-row w-full py-4">
          <div className="">&copy; CodeCraftHub.tech </div>
          <div className="">Built by CodeCraftHub.tech</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
