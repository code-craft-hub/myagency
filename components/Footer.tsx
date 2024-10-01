import React from "react";
import ButtonComponent from "./ButtonComponent";
import { ThemeChanger } from "./ThemeChanger";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, services, socialLinks } from "@/constants";
const Footer = () => {
  return (
    <section className="section border-2 rounded-2xl">
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
            <Link href={"/"} className="flex items-center">
              <Image src="/logo.svg" alt="reviewer" width={50} height={50} />
              <h1 className="font-bold ml-2 sm:ml-4 text-xl">CodeCraftHub</h1>
            </Link>
            <p className="">
              Empowering Brands, Igniting Growth, and Shaping Futures.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-4">Navigation</h1>
            <ul className="flex flex-col gap-2">
              {footerLinks?.map(({ name, href }, i) => (
                <Link
                  href={href}
                  key={i}
                  className="hover:font-bold hover:underline tracking-widest"
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="">
          <h1 className="font-bold text-xl mb-4">Services</h1>
            <ul className="flex flex-col gap-2">
              {services.map(({name, href}, i) => (
                 <Link
                 href={href}
                 key={i}
                 className="hover:font-bold hover:underline tracking-widest"
               >
                 {name}
               </Link>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-4">Socials</h1>
            <ul className="flex flex-col gap-2">
              {socialLinks.map(({name, href}, i) => (
                 <Link
                 href={href}
                 key={i}
                 className="hover:font-bold hover:underline tracking-widest"
               >
                 {name}
               </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-4 w-full">
          <ThemeChanger />
        </div>
        <div className="border-t-[1px] justify-between flex flex-col sm:flex-row w-full py-4">
          <div className="">&copy; CodeCraftHub.tech </div>
          <div className="flex">Built by CodeCraftHub.tech</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
