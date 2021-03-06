import React from "react";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-l-md inline-flex outline-none bg-white border focus:border-light-olive-green w-full py-3 px-4 text-gray-700 leading-tight focus:bg-white"
    />
  );
};

export default Input;
