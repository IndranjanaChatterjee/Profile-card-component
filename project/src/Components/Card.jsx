import React from "react";
import up from "../assets/images/bg-pattern-card.svg";
import victor from "../assets/images/image-victor.jpg";

export default function Card() {
  return (
    <div className="relative bg-green-300 w-[20rem] h-[30rem]">
      <img src={up} alt="img" className="w-[20rem]" />
      <img
        src={victor}
        alt=""
        className="rounded-full border-[5px] border-solid border-[#ffffff] m-[auto] relative top-[-3rem]"
      />
      <span>
        <p>Victor Crest</p>
        <p> 26</p>
      </span>
      <span>London</span>
      <hr />
      <div className="follow">
        <div className="details">
          <h1>80K</h1>
          <p>Followers</p>
        </div>
        <div className="details">
          <h1>803K</h1>
          <p>Likes</p>
        </div>
        <div className="details">
          <h1>1.4K
  </h1>
          <p>Photos</p>
        </div>
        
      </div>
    </div>
  );
}
