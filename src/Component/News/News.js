import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

export default function Breakthrough() {
  const [home, setHome] = useState([]);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(
        `http://localhost:9000/training/developer`
      );
      setHome(response.data);
      console.log("dev", response.data);
    };

    getSingleProductData();
  }, []);
  return (
    <div className="py-10 sm:py-12">
      <div className="container cent text-center">
        <h2 className="mb-5 font-manrope font-extrabolds capitalize leading-snug md:px-32 ">
          {home.news}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <a href="aaa.com" className="imagest">
              <img src={home.fiftyindia} alt="news" />
            </a>
          </div>
          <div className="col-6">
            <div className="imaged">
              {" "}
              <a href="aaa.com" className="imagestt">
                <img src={home.yourstory} alt="news" />
              </a>
            </div>
            <div className="imaged">
              <a href="aaa.com" className="imagestt">
                <img src={home.indianexpress} alt="news" />
              </a>
            </div>
            <div className="imaged">
              {" "}
              <a href="aaa.com" className="imagestt">
                <img src={home.economictimes} alt="news" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
