import React from "react";

const RegisterButton = ({ name }: { name: string }) => {
  return (
    <button className="md:w-26 w-full md:text-sm text-lg text-specialGray border-specialGray hover:text-specialBlack hover:border-specialBlack border-2 rounded-xl p-1">
      {name}
    </button>
  );
};

export default RegisterButton;
