import React, { useState } from "react";

export default function TabsSection({ darkmode }) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full ">
      <div className="platform_selector border-b flex justify-between z-10 sm:w-5/6 lg:w-6/12 ">
        <div
          className={`flex items-start cursor-pointer ${
            activeTab === "all" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/all${
              activeTab === "all" ? "-active" : darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("all")}
          />
        </div>
        <div
          className={`flex items-start cursor-pointer ${
            activeTab === "windows" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/windows${
              activeTab === "windows" ? "-active" : darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("windows")}
          />
        </div>
        <div
          className={`flex items-start cursor-pointer ${
            activeTab === "macos" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/macos${
              activeTab === "macos" ? "-active" : darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("macos")}
          />
        </div>
        <div
          className={`flex items-start cursor-pointer ${
            activeTab === "android" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/android${
              activeTab === "android" ? "-active" : darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("android")}
          />
        </div>
        <div
          className={`flex items-start cursor-pointer ${
            activeTab === "ios" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/ios${
              activeTab === "ios" ? "-active" : darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("ios")}
          />
        </div>
        <div
          className={`flex items-start cursor-pointer ${
            activeTab === "tools" ? "active-tab" : ""
          }`}
        >
          <img
            src={`platform-icons/tools${
              activeTab === "tools" ? "-active" : darkmode ? "-darkmode" : ""
            }.svg`}
            onClick={() => setActiveTab("tools")}
          />
        </div>
      </div>
      <div className="platform_selector_dropdown">
        <select
          className="dropdown_selector w-full active:outline-none"
          name=""
          id=""
        >
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
