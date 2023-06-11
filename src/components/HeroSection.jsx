import { ConstructionOutlined, DarkMode, LightMode } from "@mui/icons-material";
import React from "react";

export default function HeroSection({ darkmode, toggleDarkMode }) {
  return (
    <div className="relative">
      <img className="hero_img_lg" src="hero_image_lg.png" />
      <img className="hero_img_md" src="hero_image_md.png" />
      <div className="flex items-center gap-5 mb-5 lg:mb-10">
        <p className={`text-gray-500 text-sm max-sm:hidden ${darkmode && "darkmode_text"}`}>
          Home {">"} Sub Page 2 {">"} Sub Page 3 {">"} Sub Page 4
        </p>
        <div
          className={`${darkmode ? "hidden" : "block"}`}
          onClick={toggleDarkMode}
        >
          <DarkMode className="hidden" style={{ color: "black" }} />
        </div>
        <div
          className={`${darkmode ? "block" : "hidden"}`}
          onClick={toggleDarkMode}
        >
          <LightMode style={{ color: "white" }} />
        </div>
      </div>
      <button className="hero_button p-1 px-10 rounded-full font-bold lg:mb-2 transition-all">
        If you need an Special Offer Block
      </button>
      <h1
        className={`w-1/2 my-5 text-3xl font-light tracking-wider ${
          darkmode && "darkmode_text"
        }`}
      >
        <b className="font-bold">Lorem ipsm</b> dolor, sit amet
      </h1>
      <div className="h-1 w-20 border-b border-gray-400"></div>
      <p
        className={`sm:w-3/5 lg:w-2/5 lg:mb-5 text-gray-500 ${
          darkmode && "darkmode_text"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        eleifend mi eu faucibus. Aliquam erat volutpat. Pellentesque dui nisl,
        consectetur sit amet hendrerit at, commodo ac nunc.
      </p>
    </div>
  );
}
