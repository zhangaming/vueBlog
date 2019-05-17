import axios from "../utils/request";
import qs from "qs";
export const getArticleList = function(data) {
  return axios.post(`/getArticleList`, qs.stringify(data));
};

export const getArticle = function(id) {
  let data = qs.stringify({
    id: id
  });
  return axios.post(`/getArticleView`, data);
};
