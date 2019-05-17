<template>
  <div class="content">
    <h1 class="title">{{title}}</h1>
    <div class="skill">
      <div>{{type}}</div>
    </div>
    <p class="time">
      <span>{{updateTime|fmtDate}}</span>
    </p>
    <mavon-editor v-model="content"
                  ref="md"
                  :subfield="false"
                  defaultOpen="preview"
                  :editable="false"
                  :imageClick="()=>{}" />
  </div>
</template>
<script>
import { getArticle } from "@/api/article";
import { mavonEditor } from "mavon-editor";
export default {
  async created() {
    this.getArticle();
  },
  data() {
    return {
      title: "",
      html: "",
      content: "",
      type: "",
      updateTime: new Date(),
      createTime: new Date()
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    async getArticle() {
      const {
        data: { title, html, content, type, createTime, updateTime }
      } = await getArticle(this.id);
      this.title = title;
      this.html = html;
      this.content = content;
      this.type = type;
      this.createTime = createTime;
      this.updateTime = updateTime;
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.content {
  background: white;
  padding: px2rem(15px);
  .title {
    font-size: px2rem(32px);
    text-align: center;
    margin-bottom: px2rem(15px);
  }
  .skill {
    display: flex;
    font-size: px2rem(24px);
    div {
      padding: px2rem(5px) px2rem(10px);
      margin-right: px2rem(10px);
      background: rgb(129, 138, 145);
      color: #fff;
      border-radius: px2rem(5px);
    }
  }
  .time {
    text-align: right;
    font-size: px2rem(20px);
    margin-bottom: 5px;
  }
  .article {
    width: 100%;
    height: 100%;
    padding: px2rem(5px);
    overflow-y: auto;
    box-sizing: border-box;
    overflow-x: hidden;
    background: #fbfbfb;
  }
}
</style>
<style>
.markdown-body > :first-child {
  display: none !important;
}
</style>
