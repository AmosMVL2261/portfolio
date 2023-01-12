import React from "react";

function SkillCard({ image, name }) {
  return (
    <div
      className={`border border-slate-200 rounded-xl flex flex-row justify-center items-center w-fit gap-2 py-2 px-2`}
    >
      <img src={image} alt={name} className="h-[32px] w-[32px]" />
      <p className="text-white font-bold">{name}</p>
    </div>
  );
}

export default SkillCard;
