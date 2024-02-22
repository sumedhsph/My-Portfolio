import React from "react";
import heroImg from "../assets/hero_pov.jpg";
import TypingAnimation from "../components/TypingAnimation";

function HeroPov() {
  return (
    <section className="flex relative h-screen overflow-hidden" id="home">
      <div className="absolute bg-black opacity-80 inset-0 z-1"></div>
      <div className="w-full h-screen flex justify-center items-center absolute">
        <div>
          <h2 className="text-3xl md:text-2xl lg:text-2xl xl:text-2xl text-primary">
            <TypingAnimation />
          </h2>
        </div>
      </div>
      <img
        src={heroImg}
        alt="A laptop with coffee and phone"
        className="object-cover w-full"
      />
    </section>
  );
}

export default HeroPov;
