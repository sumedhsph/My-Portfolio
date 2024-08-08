import React from "react";

function SkillsCard({title, icon}) {
  return (
    <div className="card w-96">
      <div className="text-center flex justify-center">
        {icon}
      </div>
      <div className="card-body flex justify-center pt-2">
        <h2 className="text-center text-2xl text-primary font-semibold">{title}</h2>
       {/*  <p>{text}</p> */}
         
      </div>
    </div>
  );
}

export default SkillsCard;
