import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import TabsSection from "./components/TabsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import { DarkMode } from "@mui/icons-material";

export default function App() {
  const [darkmode, setDarkMode] = useState(true)

  function toggleDarkMode () {
    console.log('1')
    setDarkMode(prev => !prev)
  }

  

  return (
    <div className="relative overflow-hidden w-screen">
      <img className="hero_img_sm" src="hero_image_sm.png"/>    
      <div className={`darkmode_bg ${darkmode ? 'absolute' : 'hidden'} absolute top-0 -z-20 bg-gray-900 w-screen h-[900px] sm:h-[600px] transition-all duration-1000`}></div>  
      <div className="main p-5">
        <HeroSection darkmode={darkmode} toggleDarkMode={toggleDarkMode}/>
        <TabsSection darkmode={darkmode} />
        <SubscriptionSection />
      </div>
      <div>
      </div>
    </div>
  );
}
