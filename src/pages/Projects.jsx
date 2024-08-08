import React, { useState } from "react";
import Container from "../components/Container";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const uniqueCategories = ["all", ...new Set(projects.map((i) => i.category))];

  const [projectItems, setProjectItems] = useState(projects);
  // const [categories, setCategories] = useState(uniqueCategories);

  //filter project items
  const filteredItems = (category) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    } else {
      const newItems = projects.filter((item) => item.category === category);
      setProjectItems(newItems);
    }
  };
  //console.log(uniqueCategories)
  return (
    <section id="projects">
      <Container>
        <div className="flex justify-center mb-10 gap-4">
          {uniqueCategories.map((category) => (
            <button className="btn btn-secondary btn-sm capitalize" key={category} onClick={()=> filteredItems(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {projectItems.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
