import React from "react";

const HeaderButton = ({ name }: { name: string }) => {
  return (
    <button className="flex flex-row items-center">
      <div className="text-sm text-specialGray hover:text-specialBlack">
        {name}
      </div>
    </button>
  );
};

export default HeaderButton;
