import React from "react";
import up from "../assets/images/bg-pattern-card.svg";
import victor from "../assets/images/image-victor.jpg";

export default function Card() {
  return (
    <div className="relative bg-[#ffffff]  w-[20rem]  rounded-[1rem]">
      <img src={up} alt="img" className="w-[20rem] rounded-t-[1rem]" />
      <img
        src={victor}
        alt=""
        className="rounded-full border-[5px] border-solid border-[#ffffff] mx-[auto] relative top-[-3rem] "
      />
      <span className="flex flex-row justify-center items-center gap-[0.5rem]  relative bottom-[1.8rem] ">
        <p className="font-extrabold text-[#2d3248]">Victor Crest</p>
        <p className="text-[#6a6f81] font-normal"> 26</p>
      </span>
      <span className="flex flex-row justify-center items-center relative bottom-[1.4rem] text-[#6a6f81]">London</span>
      
      <div className="follow flex flex-row justify-center items-center gap-[3rem]  p-[1.2rem] border-t-[0.05rem] border-t-solid border-t-[#e9e9e9] ">
        <div className="details flex flex-col justify-center items-center font-extrabold text-[#2d3248]">
          <h1>80K</h1>
          <p className="text-[#6a6f81] font-normal text-[0.6rem] tracking-[0.15rem]">Followers</p>
        </div>
        <div className="details flex flex-col justify-center items-center font-extrabold text-[#2d3248]">
          <h1>803K</h1>
          <p className="text-[#6a6f81] font-normal text-[0.6rem] tracking-[0.15rem]">Likes</p>
        </div>
        <div className="details flex flex-col justify-center items-center font-extrabold text-[#2d3248]">
          <h1>1.4K</h1>
          <p className="text-[#6a6f81] font-normal text-[0.6rem] tracking-[0.15rem]">Photos</p>
        </div>
      </div>
    </div>
  );
}
