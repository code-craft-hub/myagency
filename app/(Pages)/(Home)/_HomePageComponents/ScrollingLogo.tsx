import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import React from "react";

const ScrollingLogo = () => {
  const testimonials = [
    {
      img: "/webflow.png",
      name: "webflow",
    },
    {
      img: "/vercel.png",
      name: "vercel",
    },
    {
      img: "/supabase.png",
      name: "supabase",
    },
    {
      img: "/framer.png",
      name: "framer",
    },
  ];
  return (
    <section className="section ">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center">
          Trusted Partners & Clients
        </h1>
        <p className="text-center">
          From startups to Fortune 500 companies, our diverse clientele spans
          industries and continents.
        </p>
        <InfiniteMovingLogos
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default ScrollingLogo;
