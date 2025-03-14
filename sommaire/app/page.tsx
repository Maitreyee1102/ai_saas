import HeroSection from "@/components/home/herosection";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/common/demosection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient/>
      <div className="flex flex-col">
        <HeroSection/>
        <DemoSection />
      </div>

    </div>

  );
}
