import React, { useState, useEffect } from "react";

import List from "components/Url/List";
import CreateUrl from "components/Url/CreateUrl";
import urlsApi from "apis/urls";

const Dashboard = ({ urls, fetchUrls }) => {
  const [originalLink, setOriginalLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await urlsApi.create({ url: { original_link: originalLink } });
      setOriginalLink("");
      fetchUrls();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CreateUrl
        originalLink={originalLink}
        setOriginalLink={setOriginalLink}
        handleSubmit={handleSubmit}
      />
      <List urls={urls} fetchUrls={fetchUrls} />
    </div>
  );
};

export default Dashboard;
