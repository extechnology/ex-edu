import { AboutUs } from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import InfoCard from "@/components/home/InfoCard";
import { Services } from "@/components/home/Services";
export default function Home() {
  return (
    <div className="bg-slate-900" >
      <Hero/>
      <Services/>
      <AboutUs/>
      <InfoCard/>
    </div>
  );
}
