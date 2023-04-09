import React from "react";
import "./Breakthrough.css";

const Breakcard = (props) => {
  return (
    <div className="card round_sectionw bg-v5-green-500 h-full flex-col overflow-hidden p-2 pt-4">
      <img className="card-img-top" src={props.imgPath} alt={props.imagedesc} />
      <div class="cards" style={{textAlign: "left"}}>
        <h3 class="font-manrope text-lg font-black text-v5-green-100">
          {props.t1}
          <br />
           {props.t2}
        </h3>
        <p class="leading-relaxed text-v5-neutral-300">
          <li>{props.t3}</li>
          <br />
          <li>{props.t4}</li>
        </p>
      </div>
    </div>
  );
};
export default Breakcard;
