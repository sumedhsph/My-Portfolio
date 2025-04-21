import React from "react";
import cv from "../assets/sumedh_resume_Apr25.docx";
import photo from "../assets/photo.jpg"
function AboutHero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About me</h1>
          <p className="py-6">
            &ldquo;With a heart fueled by curiosity and a spirit thriving on
            creativity, I embark on life&apos;s journey, weaving stories and
            embracing challenges. Join me in exploring the vivid tapestry of
            experiences that shape my unique narrative.&rdquo;
          </p>
          <p className="py-6">
          &rdquo;As a React.js Frontend Developer, I craft immersive digital
            experiences that seamlessly blend creativity with cutting-edge
            technology. With a passion for clean, efficient code and an eye for
            design, I bring ideas to life, shaping the future of web
            development. Let&rdquo;s build extraordinary user interfaces together,
            where innovation meets seamless functionality, and every line of
            code tells a compelling story.&rdquo;
          </p>
          <ul className="mb-8">
            <li>Name: Sumedh Hiwrale</li>
            <li>Email: sumedh.sph@gmail.com</li>
          </ul>
          <a href={cv} target="_blank" className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
