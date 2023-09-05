import Image from "next/image";
import HomeHeroSection from "./components/homepage/HomeHeroSection";
import HomeBlogSection from "./components/homepage/HomeBlogSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto pt-6 px-4 sm:px-16 md:px-0 md:max-w-2xl lg:px-28 lg:max-w-7xl xl:px-32 mt-16 sm:mt-20">
        <HomeHeroSection />
        <HomeBlogSection />
      </div>
    </>
  );
}
