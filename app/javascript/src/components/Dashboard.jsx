import React, { useState, useEffect } from "react";
import urlsApi from "apis/urls";

import List from "components/Url/List";
import CreateUrl from "components/Url/CreateUrl";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [originalLink, setOriginalLink] = useState("");

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      console.log(response.data);
      setUrls(response.data.urls);
    } catch (error) {
      console.log(error);
    }
  };

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
      <span className="my-8 mx-8 ">
        Dashboard
        <List urls={urls} />
      </span>
    </div>
  );
};

export default Dashboard;
