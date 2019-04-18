<template>
  <header>这是首页</header>
</template>
<script>
import state from "../observable.js";
export default {
  // 父组件决定子组件，是否显示图标
  props: ["isShowBack", "isShowHam"],
  methods: {
    showActionsheet() {
      // 把控制弹窗的公有变量改为true
      state.isActionsheet = true;
    },
    back() {
      // 返回
      this.$router.go(-1);
    },
    // 通知弹窗出现
    showDialog() {
      // 触发action的setIsShowDialog
      this.$store.dispatch("setIsShowDialog", true);
    }
  },
  computed: {
    state() {
      return state;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.vux-flexbox {
  width: 100%;
  text-align: left;
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  box-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.mall-home .mall-home-head[data-v-b9a7550c] {
  line-height: 2.375rem;
  font-size: 0.875rem;
  background-color: white;
  width: 100%;
}
.vux-flex-row {
  box-direction: row;
  box-orient: horizontal;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.vux-flexbox {
  width: 100%;
  text-align: left;
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  box-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.vux-flexbox .vux-flexbox-item:first-child {
  margin-left: 0 !important;
  margin-top: 0 !important;
}
.mall-home .text-center[data-v-b9a7550c] {
  text-align: center;
}
.vux-flexbox .vux-flexbox-item {
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-flex: 1;
  min-width: 1.25rem;
  width: 0%;
}
.mall-home .mall-home-head .location-wrap[data-v-b9a7550c] {
  position: relative;
  white-space: nowrap;
  line-height: 100%;
}
.mall-home .text-center[data-v-b9a7550c] {
  text-align: center;
}
</style>

