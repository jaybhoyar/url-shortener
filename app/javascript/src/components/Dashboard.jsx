import React, { useState, useEffect } from "react";
import urlsApi from "apis/urls";

import List from "components/Url/List";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  console.log("Hello");

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      console.log(response.data);
      setUrls(response.data.urls);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <span className="my-8 mx-8 ">
      Dashboard
      <List urls={urls} />
    </span>
  );
};

export default Dashboard;
