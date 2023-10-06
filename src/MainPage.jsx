import MobileDropDown from "./components/MobileDropDown";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MobileLogin from "./components/MobileLogin";

export default function MainPage() {
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const toggleTargetVisibility = () => {
    setIsTargetVisible(!isTargetVisible);
  };
  return (
    <div>
      <NavBar onClick={toggleTargetVisibility} />
      {isTargetVisible && <MobileDropDown />}
      <MobileLogin />
    </div>
  )
}