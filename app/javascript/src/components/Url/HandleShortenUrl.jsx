import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import urlsApi from "apis/urls";

const HandleShortenUrl = () => {
  const { slug } = useParams();

  const getOriginalLinkBySlug = async () => {
    try {
      await urlsApi.show(slug);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOriginalLinkBySlug();
  }, [slug]);
  return <></>;
};
export default HandleShortenUrl;
