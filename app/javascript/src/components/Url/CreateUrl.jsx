import React from "react";

import Button from "components/Button";
import Input from "components/Input";

const CreateTask = ({ originalLink, setOriginalLink, handleSubmit }) => {
  return (
    <div
      className="flex items-center justify-center
    px-4 py-6 lg:px-8 bg-gray-50 sm:px-6"
    >
      <div className="w-full max-w-md">
        
        <form className="mt-8" onSubmit={handleSubmit}>
          <Input
            label="Url"
            type="text"
            placeholder="https://google.co.in"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
          />

          <Button type="submit" buttonText="Shorten Url" />
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
