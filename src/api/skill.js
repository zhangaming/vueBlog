import axios from "../utils/request";
import qs from "qs";
export const getSkillList = function(data) {
  return axios.post(`/getSkill`, qs.stringify(data));
};
