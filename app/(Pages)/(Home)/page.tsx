import Blog from "./_HomePageComponents/Blog";
import CallToAction from "./_HomePageComponents/CallToAction";
import CaseStudy from "./_HomePageComponents/CaseStudy";
import Hero from "./_HomePageComponents/Hero";
import OurApproach from "./_HomePageComponents/OurApproach";
import Passion from "./_HomePageComponents/Passion";
import ScrollingLogo from "./_HomePageComponents/ScrollingLogo";
import Services from "./_HomePageComponents/Services";
import Testimonials from "./_HomePageComponents/Testimonials";
import Vision from "./_HomePageComponents/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingLogo />
      <Services />
      <OurApproach />
      <Passion />
      <Vision />
      <CaseStudy />
      <Testimonials />
      <Blog />
      <CallToAction />
    </>
  );
}
