import React, { useEffect, useState } from "react";
import "./Footer.css";
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
    <div className="container-fluid bg-v5-green-100 !py-0 pt-0 pb-0">
      <div className="">
        <section className="py-10 sm:py-12">
            <div className="container row ">
              <div className="col-4">
                <img src={home.address} alt="address" style={{width: "225px;"}}/>
              </div>
              <div className="col-8">
               <div className="row">
                <div className="col-4 fonts" style={{textAligh: "left"}}>
                    <h6>{home.learninghead}</h6>
                    <p>{home.back}</p>
                    <p>{home.fulls}</p>
                    <p>{home.web}</p>
                    <h6 className="mt-5">{home.community}</h6>
                    <p>{home.believe}</p>
                    <p>{home.winter}</p>
                    <p>{home.project}</p>
                </div>
                <div className="col-4 fonts" style={{textAligh: "left"}}>
                    <h6>{home.careerss}</h6>
                    <p>{home.fellow}</p>
                    <p>{home.mat}</p>
                    <h6 className="mt-5">{home.business}</h6>
                    <p>{home.hire}</p>
                    <p>{home.onboard}</p>
                </div>
                <div className="col-4 fonts" style={{textAligh: "left"}}>
                    <h6>{home.crio}</h6>
                    <p>{home.placements}</p>
                    <p>{home.success}</p>
                    <p>{home.about}</p>
                    <p>{home.blog}</p>
                    <p>{home.terms}</p>
                    <p>{home.privacy}</p>
                </div>
               </div>
              </div>
            </div>
        </section>
        <div className="flex  w-full justify-centers border-t-[1px] border-v5-green-200 py-4 text-sm md:justify-between" style={{borderTop: "1px solid rgb(162 158 158)"}}>
        <p class="hidden md:block">Copyright © 2023 Crio. All rights reserved.</p>
        <div className="flex gap-4 md:mb-0 md:gap-2">
            <img src={home.social} alt="social media" style={{width: "129px;"}}/>
        </div>
        </div>
      </div>
    </div>
  );
}
