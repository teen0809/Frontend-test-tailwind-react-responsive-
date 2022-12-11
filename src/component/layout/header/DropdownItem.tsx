import React from "react";

const DropdownItem = ({
  name,
  iconSource,
}: {
  name: string;
  iconSource?: string;
}) => {
  return (
    <button className="flex flex-row items-center gap-2 group">
      {iconSource ? (
        <div className="w-6 flex justify-center items-center">
          <img src={iconSource} className="w-4" alt="" />
        </div>
      ) : (
        <></>
      )}
      <div className="text-sm text-specialGray group-hover:text-specialBlack whitespace-nowrap leading-7">
        {name}
      </div>
    </button>
  );
};

export default DropdownItem;
