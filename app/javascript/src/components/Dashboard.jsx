import React, { useState, useEffect } from "react";
import urlsApi from "apis/urls";

const Dashboard = ({ history }) => {
  const [urls, setUrls] = useState([]);

  // const fetchUrls = async () => {
  //   try {
  //     const response = await urlsApi.list();
  //     setPendingTasks(response.data.tasks.pending);
  //     setCompletedTasks(response.data.tasks.completed);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchUrls();
  }, []);

  return <p className="my-8 mx-8 ">Url list here</p>;
};

export default Dashboard;
