import React from "react";

function AboutHero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About me</h1>
          <p className="py-6">
            "With a heart fueled by curiosity and a spirit thriving on
            creativity, I embark on life's journey, weaving stories and
            embracing challenges. Join me in exploring the vivid tapestry of
            experiences that shape my unique narrative."
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
