import HealNets from "@/Components/Home/HealNets";
import HeroSection from "@/Components/Home/HeroSection";
import Navbar from "@/Components/Home/Navbar";
import OurService from "@/Components/Home/OurService";
import OurSpecialties from "@/Components/Home/OurSpecialties";
import Testimonials from "@/Components/Home/Testimonials";
import WelcomSec from "@/Components/Home/WelcomSec";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
         <Navbar />
        <HeroSection/>
        <WelcomSec />
        <OurService/>
        <OurSpecialties />
        <HealNets />
        <Testimonials/>
      </main>
      
    </div>
  );
}
