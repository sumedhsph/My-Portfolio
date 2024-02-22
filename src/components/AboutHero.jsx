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
          <p className="py-6">
            "As a React.js Frontend Developer, I craft immersive digital
            experiences that seamlessly blend creativity with cutting-edge
            technology. With a passion for clean, efficient code and an eye for
            design, I bring ideas to life, shaping the future of web
            development. Let's build extraordinary user interfaces together,
            where innovation meets seamless functionality, and every line of
            code tells a compelling story."
          </p>
          <ul className="mb-8">
            <li>Name: Sumedh Hiwrale</li>
            <li>Email: sumedh.sph@gmail.com</li>
          </ul>
          <button className="btn btn-primary">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
