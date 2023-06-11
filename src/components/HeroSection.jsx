import React from "react";

export default function HeroSection({darkmode}) {
  return (
    <div className="relative">
      <img className="hero_img_lg" src="hero_image_lg.png"/>
      <img className="hero_img_md" src="hero_image_md.png"/>
      <p className={`text-gray-500 mb-5 text-sm lg:mb-10 max-sm:hidden ${darkmode && "darkmode_text"}`}>
        Home {">"} Sub Page 2 {">"} Sub Page 3 {">"} Sub Page 4
      </p>
      <div>
        <button className="hero_button p-1 px-10 rounded-full font-bold lg:mb-5">
          If you need an Special Offer Block
        </button>
        
      </div>
      <h1 className={`w-1/2 my-5 text-3xl font-light tracking-wider ${darkmode && "darkmode_text"}`}>
        <b className="font-bold">Lorem ipsm</b> dolor, sit amet
      </h1>
      <div className="h-1 w-20 border-b border-gray-400"></div>
      <p className={`w-3/5 lg:w-2/5 lg:mb-5 text-gray-500 ${darkmode && "darkmode_text"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        eleifend mi eu faucibus. Aliquam erat volutpat. Pellentesque dui nisl,
        consectetur sit amet hendrerit at, commodo ac nunc.
      </p>
    </div>
  );
}
