import React from "react";

export default function SubscriptionCard(props) {
  return (
    <div
      className="sub_card bg-white mix-blend-normal relative border-b-4 border-primary rounded-b-md flex-shrink-0 transition-all"
      style={{ transform: props.transitionValue }}
    >
      <img className="card_icon" src="card-icon.svg" />
      <div className="card-content mix-blend-normal absolute top-16 flex flex-col items-center">
        <h2 className="font-semibold text-lg w-1/2 text-center mb-5">
          {`Kaspersky Anti-Virus ${props.index}`}
        </h2>
        <div className="reviews flex items-center mb-1">
          <img className="review_star" src="star/star-full.svg" />
          <img className="review_star" src="star/star-full.svg" />
          <img className="review_star" src="star/star-full.svg" />
          <img className="review_star" src="star/star-full.svg" />
          <img className="review_star" src="star/star-full.svg" />
          <div className="font-thin text-sm">1912 Reviews</div>
        </div>
        <div className="diviser w-10 border-b border-gray-300 mb-2"></div>
        <div className="text-center text-sm font-extralight mb-5">
          Essential antivirus protection for Windows PCs
        </div>
        <div className="text-center font-light mb-5">
          from <b className="font-bold">£29.99</b>/year
        </div>
        <div className="button_container flex items-center h-12">
          <button className="card_button ">Learn More</button>
        </div>
      </div>
    </div>
  );
}
