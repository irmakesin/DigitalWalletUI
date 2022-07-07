import * as React from "react";
import "../styles/bottom-bar.scss";
import { HiHome } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { AiFillDownCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

interface BottomBarProps {}

const activeColor = "#5D5D9C";
const passiveColor = "#D5D5E1";

export const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <div className="bottom-bar-container">
      <HiHome color={activeColor} />
      <BiCategory color={passiveColor} />
      <AiFillDownCircle color={passiveColor} />
      <FiSettings color={passiveColor} />
    </div>
  );
};
