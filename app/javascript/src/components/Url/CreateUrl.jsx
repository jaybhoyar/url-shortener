import React from "react";

import Button from "components/Button";
import Input from "components/Input";

const CreateTask = ({ originalLink, setOriginalLink, handleSubmit }) => {
  return (
    <div className="w-4/6 py-6 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex shadow rounded-l-md">
          <Input
            label="Url"
            type="text"
            placeholder="Enter the long url here"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
          />


          <Button type="submit" buttonText="Shorten" />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
