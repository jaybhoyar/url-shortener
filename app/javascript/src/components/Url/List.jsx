import React from "react";

const List = ({ urls }) => {
  return (
    <div className="my-8 mx-8">
      List here
      {urls.map((url, index) => (
        <h1 className="font-medium text-xl" key={index}>
          {url.original_link}
        </h1>
      ))}
    </div>
  );
};

export default List;
