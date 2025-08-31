import React from "react";

const Button = ({
  name,
  bgColor = "bg-red-600",
  hoverBg = "hover:bg-red-700",
  textColor = "text-white",
  borderColor, // optional prop
}) => {
  return (
    <button
      className={`${bgColor} ${hoverBg} ${textColor} font-bold tracking-wide px-8 py-2 rounded-lg ${
        borderColor ? `border ${borderColor}` : ""
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
