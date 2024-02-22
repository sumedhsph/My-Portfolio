import React from "react";
import { Parallax } from "react-parallax";
import parallaxBgImage from "../assets/skills_bg.webp";
import { skills } from "../data";
import SkillsCard from "../components/SkillsCard";
import Container from "../components/Container";

function Skills() {
  return (
    <section id="skills" name="skills">
      <Parallax
        blur={1}
        bgImage={parallaxBgImage}
        bgImageAlt="Man watching starry sky"
        strength={200}
         
      >
        <Container>
          <h1 className="text-5xl font-bold text-center mb-16 text-primary">
            Skills I possess
          </h1>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillsCard key={skill.id} {...skill} />
            ))}
          </div>
        </Container>
      </Parallax>
    </section>
  );
}

export default Skills;
