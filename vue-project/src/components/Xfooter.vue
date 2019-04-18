<template>
  <div class="weui-tabbar">
    <a
      @click="toTab(index)"
      v-for="(t,index) in tabbar"
      :key="index"
      href="javascript:;"
      class="weui-tabbar__item"
      :class="{
        'weui-bar__item_on':tab===index
      }"
    >
      <span style="display: inline-block;position: relative;">
        <img :src="img" alt class="weui-tabbar__icon">
        <span
          v-if="t.badge>0"
          class="weui-badge"
          style="position: absolute;top: -2px;right: -13px;"
          v-text="t.badge"
        ></span>
        <span
          v-if="t.isBadge"
          class="weui-badge weui-badge_dot"
          style="position: absolute;top: 0;right: -6px;"
        ></span>
      </span>
      <p class="weui-tabbar__label" v-text="t.title"></p>
    </a>
  </div>
</template>
<script>
import img from "../assets/home-active.png";
export default {
  data() {
    return {
      img,
      tabbar: [
        // badge打数字
        { title: "首页", badge: 0, isBadge: false, name: "shouye" },
        { title: "分类", badge: 0, isBadge: false, name: "sort" },
        // isBadge这是打红点
        { title: "购物车", badge: 0, isBadge: false, name: "shopcart" },
        { title: "我的", badge: 0, isBadge: true, name: "mine" }
      ],
      // 默认的下标值
      tab: 0
    };
  },
  methods: {
    // 切换底部选项卡
    toTab(tab) {
      this.tab = tab;
      // 获取当前的tab的name值
      let name = this.tabbar[tab].name;
      // 跳路由
      this.$router.push({ name });
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
}
</style>


