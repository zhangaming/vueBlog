import axios from "../utils/request";
import qs from "qs";
export const getZoneList = function(data) {
  return axios.post(`/getImg`, qs.stringify(data));
};
