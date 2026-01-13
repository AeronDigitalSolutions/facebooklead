// import Header from "../../components/home/Header";
import Navbar from "../../components/home/Navbar";
// import Navbar from "../../components/home/Navbar";
import Hero from "../../components/home/Hero";
import HowItWorks from "../../components/home/Services";
import Footer from "../../components/home/Footer";
import About from "../../components/home/About";
import WhyChoose from "../../components/home/WhyChoose";
import Gain from "../../components/home/Gain";
import Testimonials from '../../components/home/Testimonials'
import HowIt from "../../components/home/HowIt";
import Pricing from '../../components/home/Pricing';
import Faq from "../../components/home/Faq";
import MoreSlider from "../../components/home/MoreSlider";
import BlogSection from "../../components/home/BlogSection";
import Cta from "@/components/home/Cta";
// import Cta from "../../components/home/Cta";
export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <HowItWorks />
     <About/>
     <WhyChoose/>
     <Gain/>
     <Testimonials/>
     <HowIt/>
     <Pricing/>
    <Faq/>
    <MoreSlider/>
    <BlogSection/>
    {/* <Cta/> */}
    <Cta/>
      <Footer />
    </>
  );
}
