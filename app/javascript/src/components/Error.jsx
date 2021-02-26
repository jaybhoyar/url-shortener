import React from "react";

const Error = ({ errorMessage, setErrorMessage }) => {
  const closeErrorMessage = () => {
    setErrorMessage("");
  };

  return (
    <div className="w-2/5 pb-3 mx-auto">
      <div className="w-full flex justify-between bg-error-background border border-error-red px-4 py-2 rounded">
        <span className="w-4/5 sm:inline text-error-red">{errorMessage}</span>
        <span
          className="sm:inline text-error-red cursor-pointer"
          onClick={closeErrorMessage}
        >
          X
        </span>
      </div>
    </div>
  );
};

export default Error;
