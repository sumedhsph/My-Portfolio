import React from "react";
import { TbWorldWww } from "react-icons/tb";

function ProjectCard({img, url, title, text, category}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-slate-700 transition-shadow">
      <figure>
        <img
          src={img}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary capitalize text-2xl">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <a href={url} target="_blank" title="Visit the project"><TbWorldWww className="w-10 h-10 text-accent"/></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
