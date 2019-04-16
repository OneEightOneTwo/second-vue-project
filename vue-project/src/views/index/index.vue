<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item>
        <span>首页</span>
        <i slot="icon" class="icon icon-shouye1"></i>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>发现</span>
        <i slot="icon" class="icon icon-fenlei"></i>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <i slot="icon" class="icon icon-gouwuchekong"></i>
      </van-tabbar-item>
      <van-tabbar-item info="5">
        <span>我的</span>
        <i slot="icon" class="icon icon-iconfuzhi"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  watch: {
    active(index) {
      switch (index) {
        case 0:
          this.$router.push({ path: "/" });
          break;
        case 1:
          this.$router.push("find");
          break;
        case 2:
          this.$router.push("cart");
          break;
        case 3:
          this.$router.push("mine");
          break;
      }
    }
  }
};
</script>

<style>
.van-tabbar {
  height: 55px;
  border: 0px;
  /* position: fixed;
  bottom: 0px;
  left: 0px; */
}
</style>
