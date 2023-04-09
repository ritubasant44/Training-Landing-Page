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
import UnicornSlider from "./UnicornSlider";
import "./Unicorn.css";

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
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/home`);
      setHomes(response.data);
      console.log("home", response.data);
    };

    getSingleProductData();
  }, []);

  return (
    <div className="py-10 sm:py-12">
      <div className="container text-center">
        <h2 class="mb-3 font-manrope font-extraboldd capitalize leading-snug md:px-32 ">
          {home.unicorn} <br /> {home.left}
        </h2>
        <p class="mb-10 leading-loose sm:px-44 text-v5-neutral-400  font-light">
          <strong class="font-bold text-black">{home.builds}</strong>{" "}
          {home.impress}
          <br class="hidden md:block" /> {home.growth}
        </p>
      </div>
      <div className="container mt-5">
        <div className="flex w-full flex-col items-center gap-y-5">
          <div className="flex w-full flex-col items-center">
            <div className="relative  my-6 flex relative  w-full flex-col items-center rounded-3xl bg-v5-neutral-200 mt-12">
              <div class="bg-v5-lime-200 absolute -top-[14px] left-0 right-0 mx-auto flex h-[30px] w-max items-center rounded-full px-4 py-2 font-manrope text-sm font-bold md:text-base">
                Unicorns
              </div>
              <div className="relative w-full text-neutral-400">
                <UnicornSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="flex w-full flex-col items-center gap-y-5">
          <div className="flex w-full flex-col items-center">
            <div className="relative  my-6 flex relative  w-full flex-col items-center rounded-3xl bg-v5-neutral-200 mt-12">
              <div class="bg-v5-lime-400 absolute -top-[14px] left-0 right-0 mx-auto flex h-[30px] w-max items-center rounded-full px-4 py-2 font-manrope text-sm font-bold md:text-base">
                Hyper growth startups & Soonicorns
              </div>
              <div className="relative w-full text-neutral-400">
                <UnicornSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="flex w-full flex-col items-center gap-y-5">
          <div className="flex w-full flex-col items-center">
            <div className="relative  my-6 flex relative  w-full flex-col items-center rounded-3xl bg-v5-neutral-200 mt-12">
              <div class="bg-v5-lime-400 absolute -top-[14px] left-0 right-0 mx-auto flex h-[30px] w-max items-center rounded-full px-4 py-2 font-manrope text-sm font-bold md:text-base">
                Global tech MNCs
              </div>
              <div className="relative w-full text-neutral-400">
                <UnicornSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col fled gap-x-10 md:flex-row">
        <div className="sm:w-full full">
          <div className="flex items-center justify-center rounded-[30px] bg-v5-green-100 font-rubik sm:h-[250px] md:rounded-[50px]">
            <p class="mb-5 px-8 py-8 text-center leading-relaxed sm:mb-0 sm:py-2 md:px-6">
              " {home.piyush}"
            </p>
          </div>
          <div className="flex -translate-y-[36px] flex-col items-center justify-center">
            <div className="arrow"></div>
            <img
              src="images/piyush.png"
              className="imageinfo"
              alt="information"
            />
          </div>
        </div>
        <div className="sm:w-full full">
          <div className="flex items-center justify-center rounded-[30px] bg-v5-green-100 font-rubik sm:h-[250px] md:rounded-[50px]">
            <p class="mb-5 px-8 py-8 text-center leading-relaxed sm:mb-0 sm:py-2 md:px-6">
              {home.ramesh}
            </p>
          </div>
          <div className="flex -translate-y-[36px] flex-col items-center justify-center">
            <div className="arrow"></div>
            <img
              src="images/ramesh.png"
              className="imageinfor"
              alt="information"
            />
          </div>
        </div>
      </div>
      {homes.map((menu, indexes) => {
        return (
      <div>
        
        <div className="p-1 achievementp sm:p-0 bg-v5-neutral-200 text-v5-neutral-400 flex flex-wrap  justify-center  rounded-[20px] sm:flex-nowrap sm:justify-between md:flex md:min-w-[680px]">
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                    <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft} <br /> {menu.fnp}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn1}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft1} <br /> {menu.fnp1}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn2}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft2} <br /> {menu.fnp2}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn3}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft3} <br /> {menu.fnp3}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn4}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft4} <br /> {menu.fnp4}
                    </p>
                  </div>
                </div>
        <div>
          <Button
            className="explores mt-4"
            size="large"
            variant="outlined"
            color="primary"
          >
            <span style={{ marginRight: "10px" }}>{menu.ftrial}</span>{" "}
            <ChevronRightOutlinedIcon />
          </Button>
        </div>

      </div>
        )})}
    </div>
  );
}
