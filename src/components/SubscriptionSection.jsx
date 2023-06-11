import React, { useEffect, useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function SubscriptionSection() {
  let numberOfCards = 8;
  const [cardIndex, setCardIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const sliderAdjuster = 
    screenWidth > 1200 ? 4 :
    screenWidth > 900 ? 3 :
    screenWidth > 600 ? 2 : 1


  function handleChangeSlide(direction) {
    if (direction === "left") {
      setCardIndex((prev) => (prev > 0 ? prev - 1 : numberOfCards - sliderAdjuster));
    } else {
      setCardIndex((prev) => (prev < numberOfCards - sliderAdjuster ? prev + 1 : 0));
    }
  }

  const cardsArray = [];
  for (let i = 0; i < numberOfCards; i++) {
    cardsArray.push(i);
  }
  const transitionValue = `translateX(-${cardIndex * 276}px)`;

  return (
    <div className="subs_section relative pt-10 flex gap-10">
      <div
        className="subs_arrow left-10 top-56 pl-2 z-10"
        onClick={() => handleChangeSlide("left")}
      >
        <ArrowBackIos style={{ color: "white" }} />
      </div>
      <div className="wrapper w-full flex justify-center">
        <div className="carousel flex pl-5 gap-5 pt-10 justify-start overflow-hidden">
          {cardsArray.map((index) => (
            <SubscriptionCard
              transitionValue={transitionValue}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
      
      <div
        className="subs_arrow right-10 top-56 pl-0.5"
        onClick={() => handleChangeSlide("right")}
      >
        <ArrowForwardIos className="" style={{ color: "white" }} />
      </div>
    </div>
  );
}
