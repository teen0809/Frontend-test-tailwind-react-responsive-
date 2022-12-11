import React from "react";

const HeaderButton = ({ name }: { name: string }) => {
  return (
    <button className="flex flex-row items-center">
      <div className="md:text-sm text-lg text-specialGray hover:text-specialBlack">
        {name}
      </div>
    </button>
  );
};

export default HeaderButton;
