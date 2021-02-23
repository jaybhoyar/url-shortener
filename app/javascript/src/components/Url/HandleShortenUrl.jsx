import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import urlsApi from "apis/urls";

const HandleShortenUrl = ({ fetchUrls }) => {
  const { slug } = useParams();

  const getOriginalLinkBySlug = async () => {
    try {
      await urlsApi.show(slug);
      fetchUrls();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOriginalLinkBySlug();
  }, []);
  return <></>;
};
export default HandleShortenUrl;
