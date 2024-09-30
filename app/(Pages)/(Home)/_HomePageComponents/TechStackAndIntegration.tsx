import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { InfiniteMovingLogosIntegration } from "@/components/ui/infinite-moving-logosIntegration";
import { IntegrationsLogo } from "@/constants";
import React from "react";

const TechStackAndIntegration = () => {

  return (
    <section className="section ">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center">
         Tech Stack And Integrations
        </h1>
        <p className="text-center">
          From startups to Fortune 500 companies, our diverse clientele spans
          industries and continents.
        </p>
        <InfiniteMovingLogosIntegration
          items={IntegrationsLogo}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default TechStackAndIntegration;
