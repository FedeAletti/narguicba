import {BackgroundVideo} from "@/components/BackgroundVideo";
import {Hero} from "@/components/sections/Home/Hero";
import {Main} from "@/components/sections/Home/Main";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <BackgroundVideo src="/bg-video.mp4" />
        <Hero />
      </div>
      <div className="bg-primary min-h-screen ">
        <Main />
      </div>
    </div>
  );
}
