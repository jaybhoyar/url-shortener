import React from "react";

const NavBar = () => {
  return (
    <div className="mx-auto bg-white p-4">
      <nav className="w-4/6 my-0 mx-auto">
        <div className="flex flex-row justify-between">
          <h1
            className="text-2xl font-extrabold leading-9
                       text-center text-olive-green"
          >
            Short.ly
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
