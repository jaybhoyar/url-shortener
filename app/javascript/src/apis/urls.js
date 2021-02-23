import axios from "axios";

const list = () => axios.get("/urls");

const create = (payload) => axios.post("/urls", payload);

const show = (slug) => axios.get(`/${slug}`);

const update = (slug, payload) => axios.put(`/${slug}`, payload);

const urlsApi = {
  list,
  create,
  show,
  update,
};

export default urlsApi;
