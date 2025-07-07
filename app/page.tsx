import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/Hero";
import FeaturedBlock from "./components/FeaturedBlock";
import Testimonial from "./components/testimonial";
import Benefits from "./components/Benefits";

export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     <FeaturedBlock />
     <Testimonial />
     <Benefits />
    </>
  );
}
