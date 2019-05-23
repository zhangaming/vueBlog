<template>
  <div class="aj">

    <div class="headtitle">
      <h1>留言板</h1>
    </div>
    <div class="cmt-list-type">
      <ul class="clear-g type-lists">
        <li class="type-list active">评论</li>
        <!-- <li class="type-list">热门</li> -->
      </ul>
      <div class="cmt-list-border"></div>

      <div class="cmt-list-number">
        <span class="comment-number">
          共
          <span class="cy-number">{{count}}</span>人参与</span>
        <span class="comment-number">
          共
          <span class="cy-number">{{total}}</span>条评论</span>
      </div>
    </div>
    <van-list v-model="loading"
              :finished="finished"
              @load="onLoad"
              :offset="400">

      <ul class="content">
        <li v-for="(item, key) in msgList"
            :key="key"
            class="story">
          <p class="story_t">
            <span>{{item.user}}</span>
          </p>
          <p class="story_m">
            {{item.message}}
          </p>
          <p class="story_time">
            {{item.time}}
          </p>
        </li>
      </ul>
    </van-list>
  </div>
</template>
<script>
import { getMessage } from "@/api/message";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      msgList: [],
      loading: false,
      finished: false,
      total: 0,
      current: 0,
      pageSize: 20,
      imagePreview: null,
      scrollTop: -1,
      clsName: "top"
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.imagePreview != null) this.imagePreview.close();
    next();
  },
  computed: {
    ...mapState({
      count: "count"
    })
  },
  methods: {
    ...mapMutations(["changeNavShow"]),
    async onLoad() {
      let param = {
        type: "",
        page: this.current + 1,
        pageNum: this.pageSize
      };
      const { data } = await getMessage(param);
      this.loading = false;
      this.msgList.push(...data.rows);
      this.current = data.current;
      this.total = data.count;
      if (this.msgList.length >= this.total) this.finished = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.top {
  position: fixed;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.7);
  bottom: 10%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  color: white;
  transition: all 0.3s linear;
  transform: translate(0, -50%);
  font-weight: bold;
}
.top-hide {
  right: -80px;
}

.aj {
  // background: white;
  height: 80%;
  width: 100%;
  color: black;
  padding: px2rem(3px);
  .headtitle {
    h1 {
      text-align: center;
      font-size: px2rem(60px);
      margin-top: px2rem(10px);
    }
  }
  .content {
    font-family: "微软雅黑";
    font-size: px2rem(25px);
    background: url(http://image.kuwo.cn/kdt2014/bg.png) repeat;
    padding: px2rem(10px);
  }
  .story {
    border-bottom: 1px dashed #cecece;
    padding: 0 px2rem(15px) px2rem(10px);
  }
  .story_t {
    font-size: px2rem(30px);
    color: #313131;
    padding-top: px2rem(5px);
    margin-bottom: px2rem(5px);
  }
  .story_m {
    color: #868686;
    line-height: px2rem(40px);
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
  }
  .story_time {
    text-align: right;
    color: #868686;
  }
  .cmt-list-type {
    line-height: 30px;
    height: 29px;
    position: relative;
    margin-top: 10px;
    overflow: hidden;
    .clear-g {
      zoom: 1;
      list-style: none;
    }
    .clear-g:after {
      content: ".";
      display: block;
      visibility: hidden;
      height: 0;
      clear: both;
    }
    .type-lists {
      .type-list {
        float: left;
        width: px2rem(106px);
        height: 29px;
        text-align: center;
        color: #313131;
        font-size: px2rem(30px);
        border-bottom: 1px solid #313131;
        font-family: "Microsoft Yahei";
        line-height: 30px;
        display: list-item;
        &.active {
          background-image: url(https://changyan.itc.cn/mdevp/extensions/cy-skin/028/skin-black/images/cmtlist-bg-active.png);
          position: relative;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #313131;
          bottom: -1px;
        }
      }
    }
    .cmt-list-border {
      position: relative;
      bottom: 1px;
      left: px2rem(106px);
      height: 1px;
      right: 0;
      background-color: #313131;
    }
    .cmt-list-number {
      position: absolute;
      right: 0;
      bottom: -4px;
      .comment-number {
        color: #313131;
        font-size: px2rem(28px);
        font-family: "Microsoft YaHei";
        .cy-number {
          color: #313131;
          font-size: px2rem(40px);
          margin: 0 px2rem(8px);
          font-family: Impact;
        }
      }
    }
  }
}
</style>
