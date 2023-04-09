import React, { useEffect, useState } from "react";
import "./join.css";
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
      <div className="container cen text-center">
        <h2 className="mb-5 font-manrope font-extrabolds capitalize leading-snug md:px-32 ">
          {home.joint}
        </h2>
        <p className="mb-10 leading-loose sm:px-44 text-v5-neutral-400  font-light">
          <strong className="font-bold text-black">{home.meet} </strong>
          {home.meetn}
        </p>
      </div>
      <div className="container">
        <div className="flex justify-center">
          <div className="relative w-full sm:max-w-[950px]">
            <div className="w-full bg-v5-green-100 p-6 text-center  sm:p-8">
              <h3 className="mb-5 font-manrope text-xls font-extrabold leading-tight text-black sm:text-[28px] ">
                {home.get}
                <br className="hidden sm:block" />
                {home.full}
              </h3>
              <div className="flex w-full flex-wrap justify-center gap-x-2 gap-y-2">
              <Button
                     className="explore learnme"
                     style={{width: "32%"}}
                     size="large"
                     variant="outlined"
                     color="primary"
                   >
                     <span style={{ marginRight: "10px" }}>
                     {home.careerh}
                     </span>{" "}
                     <ChevronRightOutlinedIcon />
                   </Button>
                   <Button
                     className="explore learnme"
                     style={{width: "32%", marginLeft: "30px"}}
                     size="large"
                     variant="outlined"
                     color="primary"
                   >
                     <span style={{ marginRight: "10px" }}>
                     {home.place}
                     </span>{" "}
                     <ChevronRightOutlinedIcon />
                   </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-center">
          <div className="relative w-full sm:max-w-[950px]">
            <div className="row w-full flex bg-v5-green-100 p-6 text-center  sm:p-8">
              <div className="col-6">
              <h3 className="mb-5 font-manrope sss text-xls font-extrabold leading-tight text-black sm:text-[28px] ">
                {home.question}
              </h3>
              <div className="flex w-full full flex-wrap justify-center gap-x-2 gap-y-2">
              <Button
                     className="explore learnme"
                     style={{width: "32%"}}
                     size="large"
                     variant="outlined"
                     color="primary"
                   >
                     <span style={{ marginRight: "10px" }}>
                     {home.chat}
                     </span>{" "}
                     <ChevronRightOutlinedIcon />
                   </Button>
                 
              </div>
              </div>
              <div className="col-6 further">
               <img src={home.furtherimg} alt="contact"/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
