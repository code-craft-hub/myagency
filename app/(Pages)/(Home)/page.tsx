import Blog from "./_HomePageComponents/Blog";
import CallToAction from "./_HomePageComponents/CallToAction";
import CaseStudy from "./_HomePageComponents/CaseStudy";
import ClientsLogo from "./_HomePageComponents/ClientsLogo";
import Hero from "./_HomePageComponents/Hero";
import OurApproach from "./_HomePageComponents/OurApproach";
import Passion from "./_HomePageComponents/Passion";
import Parnters from "./_HomePageComponents/Parnters";
import Services from "./_HomePageComponents/Services";
import TechStackAndIntegration from "./_HomePageComponents/TechStackAndIntegration";
import Testimonials from "./_HomePageComponents/Testimonials";
import Vision from "./_HomePageComponents/Vision";
import ScrollToTop from "@/components/ScrollToTop";
import Work from "./_HomePageComponents/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientsLogo />
      <Services />
      <Work />
      <Parnters />
      <OurApproach />
      <Passion />
      <Vision />
      <CaseStudy />
      <Testimonials />
      <Blog />
      <TechStackAndIntegration />
      <ScrollToTop />
      <CallToAction />
    </div>
  );
}
