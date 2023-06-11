import React, { useState } from "react";

export default function TabsSection({darkmode}) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <div className="platform_selector border-b flex justify-between w-5/6 z-10 lg:w-3/5">
        <div
          className={`flex items-start ${
            activeTab === "all" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/all${
              activeTab === "all" ? "-active" : 
              darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("all")}
          />
        </div>
        <div
          className={`flex items-start ${
            activeTab === "windows" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/windows${
              activeTab === "windows" ? "-active" :
              darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("windows")}
          />
        </div>
        <div
          className={`flex items-start ${
            activeTab === "macos" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/macos${
              activeTab === "macos" ? "-active" : 
              darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("macos")}
          />
        </div>
        <div
          className={`flex items-start ${
            activeTab === "android" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/android${
              activeTab === "android" ? "-active" : 
              darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("android")}
          />
        </div>
        <div
          className={`flex items-start ${
            activeTab === "ios" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/ios${
              activeTab === "ios" ? "-active" : 
              darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("ios")}
          />
        </div>
        <div
          className={`flex items-start ${
            activeTab === "tools" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/tools${
              activeTab === "tools" ? "-active" : 
              darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("tools")}
          />
        </div>
      </div>
      <div className="platform_selector_dropdown">
          <select className="dropdown_selector w-full active:outline-none" name="" id="">
            <option value="">All</option>
            <option value="">Windows</option>
            <option value="">MacOS</option>
            <option value="">Android</option>
            <option value="">iOS</option>
            <option value="">Free tools</option>
          </select>
          <img className="dropdown_arrow" src="dropdown-arrow.svg" alt="" />
        </div>
    </div>
  );
}
