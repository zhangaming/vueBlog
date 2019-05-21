<template>
  <div class="home"
       @touchmove.prevent="()=>{}">
    <vue-particles color="#fff"
                   :particleOpacity="0.7"
                   :particlesNumber="100"
                   shapeType="star"
                   :particleSize="4"
                   linesColor="#fff"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="2"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
                   class="lizi">
    </vue-particles>
    <Card />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: { Card }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.home {
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558439528109&di=443daf488e065d9e714edf3900a1c440&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F08%2F20160208200347_NvVkT.jpeg");
  .text {
    font-size: $fontSize;
  }
  .lizi {
    height: 70%;
    user-select: none;
    position: absolute;
  }
}
</style>
