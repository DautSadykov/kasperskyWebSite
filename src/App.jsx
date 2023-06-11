import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import TabsSection from "./components/TabsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import { DarkMode } from "@mui/icons-material";

export default function App() {
  const [darkmode, setDarkMode] = useState(true)

  

  return (
    <div className="relative overflow-hidden w-screen">
      <img className="hero_img_sm" src="hero_image_sm.png"/>    
      <div className={`darkmode_bg ${darkmode ? 'absolute' : 'hidden'} absolute -z-20 bg-gray-900 w-screen h-[600px]`}></div>  
      <div className="main p-5">
        <HeroSection darkmode={darkmode} />
        <TabsSection darkmode={darkmode} />
        <SubscriptionSection />
      </div>
      <div>
      </div>
    </div>
  );
}
