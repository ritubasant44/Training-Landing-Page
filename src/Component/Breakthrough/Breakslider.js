import React, { useState, useEffect } from "react";
import axios from "axios";
import './Breakthrough.css';
// import Slider from "react-slick";
// import a from "../../atoms/a";
import Breakcard from "./Breakcard.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Breakslider(props) {
 
  const [result, setResult] = useState([]);
  const [slide2, setslide2] = useState([]);

  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/breakslider`);
      setResult(response.data);
      console.log('slider', response.data);
    };

    getSingleProductData();
  }, []);

  return (
    <div
      className="container my-5 homepage promoc"
    >
      <div className="flex classd">
          {result.map((record, index) => {
            return (
              <Breakcard
              key={index}
                btn={record.button}
                slickclass="slickstyle"
                imgPath={record.imgPath.url}
                imagedesc={record.imagedesc}
                desc={record.desc}
                price={record.price}
                disprice={record.disprice}
                p={record.p}
                t1={record.profile}
                t2={record.t2}
                t3={record.t3}
                t4={record.t4}
                b1={record.b1}
                b2={record.b2}
                b3={record.b3}
                b4={record.b4}
              />
            );
          })}
      </div>
    </div>
  );
}
