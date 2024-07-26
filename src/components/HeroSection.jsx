import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <section className="lg:mt-6">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-10 text-3xl lg:text-6xl">
            VirtualFR Build Tools for <br />
            <span className="text-orange-500">Developers</span>
          </h1>
          <p className="my-5 text-sm lg:text-lg lg:w-4/6">
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your
            imagination into immersive reality!
          </p>
        </div>
        <div className="flex gap-4 my-2">
          <a href="#" className="px-4 py-2 bg-orange-500 rounded-lg">
            Start for free
          </a>
          <a href="#" className="px-4 py-2 border rounded-lg border-slate-400">
            Documentation
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 p-6 m-8">
          <video
            autoPlay
            muted
            loop
            className="w-1/2 border-2 rounded-lg border-red-950"
          >
            <source src={video1} type="video/mp4" />
            Your Browser does not support the video tag
          </video>
          <video
            autoPlay
            muted
            loop
            className="w-1/2 border-2 rounded-lg border-red-950"
          >
            <source src={video2} type="video/mp4" />
            Your Browser does not support the video tag
          </video>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
