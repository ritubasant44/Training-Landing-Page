import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import "../Header/Header.css";
// import './immersive.css';
// import Slider from "react-slick";
// import a from "../../atoms/a";
// import Card from "./Card.js";
import "slick-carousel/slick/slick.css";

export default function Fellowship(props) {
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
    <div className="flex flex-col gap-y-16 sm:gap-y-6">
      <div className=" relative w-fulln">
        <div className="rounded-[20px] sm:rounded-[50px] overflow-hidden bg-v5-green-500 text-v5-neutral-200">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-6 p-3 pb-5 sm:flex-nowrap sm:p-6">
            <div className="flex flex-col gap-y-2 text-center sm:w-3/12 sm:text-left">
              <div className="mb-2 fellow hidden w-[78px] sm:block">
                <img src={home.fellowimg} className="" alt="fellow" />
              </div>
              <h5 className="pt-10 font-manrope  font-extrabold text-v5-green-100 sm:pt-0 ">
                {home.fellohead}
              </h5>
              <p className=" leading-normal ">{home.fellowtext}</p>
            </div>
            <div className=" hidden spacing flex-col gap-y-2 whitespace-nowrap sm:flex sm:w-4/12 ">
              <div className="w-full left text-left bg-v5-green-400 border-4 border-transparent flex h-[70px] items-center gap-x-2 gap-y-2  rounded-[10px] py-1 px-1 text-sm leading-normal xxs:px-2 sm:h-full sm:gap-x-3">
                <div className="w-18 sm:w-[24px]">
                  <img src={home.lockimg} className="" alt="fellow" />
                </div>
                <div className="leftmargin">
                  <h6 class="text-sm trial font-normal text-v5-neutral-300 ">
                    {home.trial}
                  </h6>
                  <p class="text-xss  font-semibold xxs:text-sm text-white ">
                    {home.free}
                  </p>
                </div>
              </div>
              <div className="w-full left text-left bg-v5-green-400 border-4 border-transparent flex h-[70px] items-center gap-x-2 gap-y-2  rounded-[10px] py-1 px-1 text-sm leading-normal xxs:px-2 sm:h-full sm:gap-x-3">
                <div className="w-18 sm:w-[24px]">
                  <img src={home.durationimg} className="" alt="fellow" />
                </div>
                <div className="leftmargin">
                  <h6 class="text-sm trial font-normal text-v5-neutral-300 ">
                    {home.Duration}
                  </h6>
                  <p class="text-xss  font-semibold xxs:text-sm text-white ">
                    {home.nine}
                  </p>
                </div>
              </div>
              <div className="w-full left text-left bg-v5-green-400 border-4 border-transparent flex h-[70px] items-center gap-x-2 gap-y-2  rounded-[10px] py-1 px-1 text-sm leading-normal xxs:px-2 sm:h-full sm:gap-x-3">
                <div className="w-18 sm:w-[24px]">
                  <img src={home.scholarimg} className="" alt="fellow" />
                </div>
                <div className="leftmargin">
                  <h6 class="text-sm trial font-normal text-v5-neutral-300 ">
                    {home.Scholarships}
                  </h6>
                  <p class="text-xss  font-semibold xxs:text-sm text-white ">
                    {home.stext}
                  </p>
                </div>
              </div>
              <div className="w-full left text-left bg-v5-green-4900 border-4 border-transparent flex h-[70px] items-center gap-x-2 gap-y-2  rounded-[10px] py-1 px-1 text-sm leading-normal xxs:px-2 sm:h-full sm:gap-x-3">
                <div className="w-18 sm:w-[24px]">
                  <img src={home.careers} className="margint" alt="fellow" />
                </div>
                <div className="leftmargin">
                  <h6 class="text-sm trial font-normal text-[#525252] ">
                    {home.career}
                  </h6>
                  <p class="text-xss  font-semibold xxs:text-sm text-black ">
                    {home.placement}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative just flex flex-col gap-y-3 sm:w-5/12 ">
              <div className="flex flex-col gap-y-6 rounded-[20px]    bg-v5-green-700 p-3 sm:p-7 ">
                <div>
                  <div className="flex leftalign items-start gap-x-4 text-sm ">
                    <div className="min-w-[20px]">
                      <img src={home.tick} className="tick" alt="fellow" />
                    </div>
                    <p>{home.mern}</p>
                  </div>
                  <div className="flex leftalign items-start gap-x-4 text-sm ">
                    <div className="min-w-[20px]">
                      <img src={home.tick} className="tick" alt="fellow" />
                    </div>
                    <p>
                        {home.ds}
                    </p>
                  </div>
                  <div className="flex leftalign items-start gap-x-4 text-sm ">
                    <div className="min-w-[20px]">
                      <img src={home.tick} className="tick" alt="fellow" />
                    </div>
                    <p>{home.real}</p>
                  </div>
                  <div className="flex leftalign items-start gap-x-4 text-sm ">
                    <div className="min-w-[20px]">
                      <img src={home.tick} className="tick" alt="fellow" />
                    </div>
                    <p>{home.roles}</p>
                  </div>
                </div>
                 
              </div>
              <div className="marg">
                 
                 <a href="#" className="">
                   <Button
                     className="explore learnm"
                     style={{width: "50%"}}
                     size="large"
                     variant="outlined"
                     color="primary"
                   >
                     <span style={{ marginRight: "10px" }}>
                     {home.explore}
                     </span>{" "}
                     <ChevronRightOutlinedIcon />
                   </Button>
                 </a>
             

               
                   <Button
                     className="explores"
                     style={{width: "47%", "marginLeft": "10px"}}
                     size="large"
                     variant="outlined"
                     color="primary"
                   >
                     <span style={{ marginRight: "10px" }}>
                       {home.ftrial}
                     </span>{" "}
                     <ChevronRightOutlinedIcon />
                   </Button>
                 
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
