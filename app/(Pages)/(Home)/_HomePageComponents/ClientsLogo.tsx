import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { ClientsLogos } from "@/constants";
import React from "react";

const ClientsLogo = () => {
  
  return (
    <section className="section ">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center">
          Our Clients
        </h1>
        <p className="text-center">
          From startups to Fortune 500 companies, our diverse clientele spans
          industries and continents.
        </p>
        <InfiniteMovingLogos
          items={ClientsLogos}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default ClientsLogo;
