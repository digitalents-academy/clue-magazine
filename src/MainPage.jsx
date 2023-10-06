import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MobileDropDown from "./components/MobileDropDown";
import MobilePage from "./components/MobilePage";

export default function MainPage() {
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  const toggleTargetVisibility = () => {
    setIsTargetVisible(!isTargetVisible);
  };

  return (
    <div>
        <div className="mobile-wrapper">
          <div className="nav-container">
            <NavBar onClick={toggleTargetVisibility} />
            {isTargetVisible && <MobileDropDown />}
          </div>
          <MobilePage />
        </div>
    </div>
  );
}
