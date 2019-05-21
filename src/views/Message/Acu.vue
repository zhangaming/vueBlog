
<template>
  <div class="test">
    <h2 @click="getmessage">
      欢迎来到阿明的博客留言
    </h2>
    <div class="input-box">
      <span>昵称：</span>
      <input type="text"
             v-model="user"
             placeholder="请输入你的昵称">
    </div>
    <div class="message-box">
      <textarea class="textarea"
                v-model="message"
                placeholder="天黑请留言..."></textarea>
    </div>
    <div class="commit">
      <button @click="getmessage">悄悄告诉他</button>
    </div>
    <Smile ref="smile"></Smile>
  </div>
</template>

<script>
import { Notify, Toast } from "vant";
import Smile from "./Smile";
import dayjs from "dayjs";
import { submitMessage } from "@/api/message";
export default {
  components: {
    Smile
  },
  mounted() {},
  methods: {
    getmessage() {
      if (!this.user) {
        Toast({
          duration: 1000,
          position: "top",
          message: "请输入昵称"
        });
        return;
      }
      if (!this.message) {
        Toast({
          duration: 1000,
          position: "top",
          message: "请输入留言"
        });
        return;
      }
      let time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      let data = {
        user: this.user,
        message: this.message,
        type: "blog",
        time: time
      };
      submitMessage(data)
        .then(res => {
          this.$refs.smile.changecolor();
          Notify({
            message: res.message,
            duration: 1000,
            background: "#1989fa"
          });
        })
        .catch(err => {
          Notify({
            message: err,
            duration: 1000,
            background: "#1989fa"
          });
        });
    }
  },
  data() {
    return {
      message: "",
      user: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.test {
  h2 {
    text-align: center;
    padding-top: px2rem(30px);
    font-size: px2rem(32px);
    font-weight: bold;
  }
  .input-box {
    border: 1px solid #000;
    border-radius: px2rem(20px);
    margin: px2rem(40px);
    padding: px2rem(20px) px2rem(40px);
    margin-bottom: px2rem(20px);
    font-size: px2rem(25px);
    font-family: "微软雅黑";
    input {
      border: none;
      outline: none;
      font-size: px2rem(25px);
      font-family: "微软雅黑";
    }
  }
  .message-box {
    border: 1px solid #000;
    border-radius: px2rem(20px);
    margin: px2rem(40px);
    padding: px2rem(40px);
    margin-bottom: px2rem(20px);
    .textarea {
      width: 100%;
      height: px2rem(140px);
      background: 0 0;
      overflow-x: hidden;
      overflow-y: auto;
      border: 0;
      font-size: px2rem(25px);
      font-family: "微软雅黑";
      color: #868686;
      resize: none;
      line-height: normal;
      text-align: left;
    }
  }
  .commit {
    width: 100%;
    height: px2rem(100px);
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      padding: px2rem(12px) px2rem(22px);
      border-radius: px2rem(20px);
      color: #fff;
      border: none;
      background: #000;
    }
  }
}
</style>
