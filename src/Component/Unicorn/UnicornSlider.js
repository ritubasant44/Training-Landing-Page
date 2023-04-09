import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Modern/Modern.css';
import Slider from "react-slick";
// import a from "../../atoms/a";
import UnicornCard from "./Unicorncard.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function UnicornSlider(props) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    cssEase: "linear",
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [result, setResult] = useState([]);
  const [slide2, setslide2] = useState([]);

  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/unicorn`);
      setResult(response.data);
      console.log('slider', response.data);
    };

    getSingleProductData();
  }, []);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/Slickslider2`);
      setslide2(response.data);
      console.log('slider', response.data);
    };

    getSingleProductData();
  }, []);

  return (
    <div
      className="container"
    >
      <div className="slick-slider slick-initialized">
        <Slider {...settings} className={props.slickclass}>
          {result.map((record, index) => {
            return (
              <UnicornCard
              key={index}
                slickclass="slickstyle"
                imgPath={record.imgPath.url}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
