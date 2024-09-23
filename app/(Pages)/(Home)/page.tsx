import Blog from "./_HomePageComponents/Blog";
import CallToAction from "./_HomePageComponents/CallToAction";
import CaseStudy from "./_HomePageComponents/CaseStudy";
import Hero from "./_HomePageComponents/Hero";
import Passion from "./_HomePageComponents/Passion";
import Services from "./_HomePageComponents/Services";
import Testimonials from "./_HomePageComponents/Testimonials";
import Vision from "./_HomePageComponents/Vision";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Passion />
      <Vision />
      <CaseStudy />
      <Testimonials />
      <Blog />
      <CallToAction />
    </main>
  );
}
