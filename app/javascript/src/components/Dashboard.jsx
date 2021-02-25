import React, { useState, useEffect } from "react";

import urlsApi from "apis/urls";
import List from "components/Url/List";
import CreateUrl from "components/Url/CreateUrl";
import Error from "components/Error";

const Dashboard = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [urls, setUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await urlsApi.create({ url: { original_link: originalLink } });
      fetchUrls();
      setOriginalLink("");
    } catch (error) {
      setErrorMessage(error.response.data.errors);
      setOriginalLink("");
    }
  };

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
    } catch (error) {
      setErrorMessage(error.response.data.errors);
      
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
        errorMessage={errorMessage}
      />
      {errorMessage ? (
        <Error errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      ) : null}

      <List urls={urls} fetchUrls={fetchUrls} />
    </div>
  );
};

export default Dashboard;
