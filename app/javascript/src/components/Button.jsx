import React from "react";

const Button = ({ type = "button", buttonText, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-r-md inline-flex bg-light-olive-green focus:shadow-outline
        focus:outline-none text-black font-bold py-3 px-6 hover:bg-olive-green-hover"
    >
      {buttonText}
    </button>
  );
};

export default Button;
