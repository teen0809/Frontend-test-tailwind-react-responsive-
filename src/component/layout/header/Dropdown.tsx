import React, { useState } from "react";
import IconArrowDown from "../../../assests/images/icon-arrow-down.svg";
import IconArrowUp from "../../../assests/images/icon-arrow-up.svg";

const Dropdown = ({
  name,
  children,
  className,
}: {
  name: string;
  children?: JSX.Element[];
  className?: string;
}) => {
  const [isDropDownOpened, setDropDwonOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => {
          setDropDwonOpen(!isDropDownOpened);
        }}
        className="flex flex-row items-center gap-2 group"
      >
        <div className="text-sm text-specialGray group-hover:text-specialBlack">
          {name}
        </div>
        <img src={isDropDownOpened ? IconArrowUp : IconArrowDown} alt="" />
      </button>
      <div
        className={`${
          isDropDownOpened ? "block" : "hidden"
        } shadow-2xl bg-white rounded-lg absolute top-10 ${className} p-7`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
