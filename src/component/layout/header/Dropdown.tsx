import React, { useEffect, useRef, useState } from "react";
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDropDownOpened, setDropDwonOpen] = useState(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as any)
    ) {
      setDropDwonOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="md:relative static inline-block">
      <button
        onClick={() => {
          setDropDwonOpen(!isDropDownOpened);
        }}
        className="flex flex-row items-center gap-2 group"
      >
        <div className="md:text-sm text-lg text-specialGray group-hover:text-specialBlack">
          {name}
        </div>
        <img src={isDropDownOpened ? IconArrowUp : IconArrowDown} alt="" />
      </button>
      <div
        ref={wrapperRef}
        className={`${
          isDropDownOpened ? "block" : "hidden"
        } md:shadow-2xl shadow-none bg-white rounded-lg md:absolute static top-10 ${className} md:p-7 p-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
