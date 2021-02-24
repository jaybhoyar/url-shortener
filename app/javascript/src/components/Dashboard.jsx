import React, { useState, useEffect } from "react";

import List from "components/Url/List";
import CreateUrl from "components/Url/CreateUrl";
import urlsApi from "apis/urls";

const Dashboard = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [urls, setUrls] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await urlsApi.create({ url: { original_link: originalLink } });
      fetchUrls();
      setOriginalLink("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="bg-new-light-gray min-h-screen">
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
