import axios from "../utils/request";
import qs from "qs";
export const getMessage = function(data) {
  return axios.post(`/getMessage`, qs.stringify(data));
};

export const submitMessage = function(data) {
  return axios.post(`/submitMessage`, qs.stringify(data));
};
