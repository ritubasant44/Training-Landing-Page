import React, { useEffect, useState } from "react";
import "./Real.css";
import axios from "axios";
// import Breakslider from "./Breakslider.js";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Button } from "@material-ui/core";

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
          {home.reals}
        </h2>
        <p className="mb-10 leading-loose sm:px-44 text-v5-neutral-400  font-light">
          {home.meetp}
          {home.meetns}
        </p>
      </div>
      <div className="container">
       <img src={home.tableimg} alt="info" style={{width: "85%;"}}/>
       <p className="mb-10 mt-5 leading-loose sm:px-44 text-v5-neutral-400  font-light" style={{width: "85%;"}}>
          {home.belowtable}</p>
      </div>
      <div className="ml-2">
        <div style={{ textAlign: "center" }}>
          <Button
            className="explores"
            size="large"
            variant="outlined"
            color="primary"
          >
            <span style={{ marginRight: "10px" }}>
              Book Your Free Trial, Now
            </span>{" "}
            <ChevronRightOutlinedIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
