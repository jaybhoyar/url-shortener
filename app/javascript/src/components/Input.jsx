import React from "react";

const Input = ({
  type = "text",
  label,
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
      className="inline-flex outline-none bg-white border w-full py-3 px-4 text-gray-700 leading-tight focus:bg-white focus:border-light-olive-green"
    />
  );
};

export default Input;
