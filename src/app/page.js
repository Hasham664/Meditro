import About from "@/Components/Home/About";
import Hero from "@/Components/Home/Hero";
import Navbar from "@/Components/Home/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <Hero/>
        <About/>
      </main>
      
    </div>
  );
}
