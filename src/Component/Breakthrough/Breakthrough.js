import React, { useEffect, useState } from "react";
import "./Breakthrough.css";
import axios from "axios";
import Breakslider from "./Breakslider.js";
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
      <div class="container text-center">
        <h2 class="mb-5 font-manrope font-extrabolds capitalize leading-snug md:px-32 ">
          {home.prepare}
        
        </h2>
        <p class="mb-10 leading-loose sm:px-44 text-v5-neutral-400  font-light">
          {home.devpro}
          <strong className="font-bold text-black"> {home.receivess}</strong>
    
           <br />{ home.next}
        </p>
        <div class="mb-10"></div>
      </div>
      <div className="mb-4 prenext">
        <Breakslider />
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
