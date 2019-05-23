import { getIp, getWether } from "@/api/common";

const actions = {
  async getIp({ commit }) {
    const { data } = await getIp();
    commit("saveIp", data);
  },
  async getWether({ commit }) {
    const { data } = await getWether();
    commit("saveWeather", data);
  }
};
export default actions;
