import * as types from "./mutation-types";
const mutations = {
  [types.CHANGE_MENU](state) {
    state.menuShow = !state.menuShow;
  },
  saveSubjects(state, data) {
    state.subjectList = data;
  },
  saveIp(state, data) {
    state.count = data.count;
    state.isNew = data.isNew;
    state.ip = data.ip;
  },
  saveWeather(state, data) {
    const res = data.data;
    state.city = res.city;
    state.weather.type = res.forecast[0].type;
    state.weather.wendu = res.wendu;
    state.weather.ganmao = res.ganmao;
    state.forecast.high = res.forecast[0].high;
    state.forecast.low = res.forecast[0].low;
    state.forecast.fengxiang = res.forecast[0].fengxiang;
    state.forecast.fengli = res.forecast[0].fengli;
  },
  changeNavShow(state, data) {
    state.navShow = data;
  }
};

export default mutations;
