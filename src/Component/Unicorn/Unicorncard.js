import React from "react";
import '../Modern/Modern.css';
import './Unicorn.css';

const Card = (props) => {
  return (
    <div className="card unicorn_section bg-v5-neutral-200 h-full flex-col items-center justify-center overflow-hidden pt-4">
      <img className="card-img-top unicornimg" src={props.imgPath} alt="unicorn" />
    </div>
  );
};
export default Card;
