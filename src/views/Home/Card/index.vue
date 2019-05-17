<template>
  <div>
    <div class="warpper animated bounceIn">
      <van-row :gutter="16">
        <van-col span="16"
                 class="holiday-warpper ">
          <div class="item">{{city}} {{weather.wendu}}℃ {{weather.type}} </div>
          <div class="item"
               style="text-align:left">
            <p>{{forecast.high}} {{forecast.low}} {{forecast.fengxiang}}</p>{{weather.ganmao}}</div>
        </van-col>
        <van-col span="4"
                 class="calendar-warpper">
          <Calendar />
        </van-col>
      </van-row>
      <MenuIcon />
    </div>

  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.warpper {
  padding: px2rem(20px);
  padding-top: px2rem(60px);
  font-weight: bold;
  color: #e8e8e8;
  height: 100vh;
  z-index: 99;
  .holiday-warpper {
    padding-top: px2rem(20px);
    .item {
      padding: px2rem(20px);
      font-size: px2rem(22px);
      background: rgba(136, 134, 134, 0.3);
      border-radius: px2rem(20px);
      box-shadow: 2px 2px 5px #333333;
      margin-bottom: px2rem(20px);
    }
  }
  .calendar-warpper {
    padding-top: px2rem(15px);
  }
}
</style>
<script>
import { mapState } from "vuex";
import { getWether } from "@/api/common";
import Calendar from "./Calendar";
import MenuIcon from "./MenuIcon";
export default {
  components: { Calendar, MenuIcon },
  data() {
    return {
      city: "厦门",
      weather: {
        wea: "",
        tem1: "",
        air_tips: ""
      },
      forecast: {
        high: "",
        low: "",
        fengxiang: "",
        fengli: ""
      }
    };
  },
  async created() {
    this.$loading.show();
    await this.getWether();
    this.$loading.hide();
  },
  methods: {
    async getWether() {
      const res = await getWether();
      let result = res.data.data;
      let obj = {
        type: result.forecast[0].type,
        wendu: result.wendu,
        ganmao: result.ganmao
      };
      this.city = result.city;
      this.weather = obj;
      this.forecast = {
        high: result.forecast[0].high,
        low: result.forecast[0].low,
        fengxiang: result.forecast[0].fengxiang,
        fengli: result.forecast[0].fengli
      };
    }
  },
  computed: {
    ...mapState(["ip"])
  }
};
</script>
