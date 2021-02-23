import React from "react";

const List = ({ urls }) => {
  return (
    <div className="my-8 mx-8">
      List here
      {urls.map((url, index) => (
        <h1 className="font-medium text-xl" key={index}>
          <span className="mr-6">{url.original_link}</span>
          <span className="text-green-500">
            {window.location.href + url.slug}
          </span>
        </h1>
      ))}
    </div>
  );
};

export default List;
