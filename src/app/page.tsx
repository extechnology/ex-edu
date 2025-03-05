import { AboutUs } from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import InfoCard from "@/components/home/InfoCard";
import { Services } from "@/components/home/Services";
export default function Home() {
  return (
    <div className="dark:bg-slate-900 bg-[#FAF9F6]">
      <Hero />
      <Services />
      <AboutUs />
      <InfoCard />
    </div>
  );
}
