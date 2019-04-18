<template>
    <div id="search">
        <span class="el-icon-arrow-left" @click="back_address"></span>
    <div id="input-box">
      <el-input prefix-icon="el-icon-search"  v-model="input" placeholder="请输入要搜索的商品"></el-input>
    </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      input: ''
    }
    // console.log(this.input)
  },
  methods: {
    back_address(){
      this.$router.go(-1)
    }
  },
}

</script>
<style scoped>
  #search{
    height: 44px;
    background-color:#f5f5f5;
    padding:5px 10px;
  }
  .el-icon-arrow-left{
    display: inline-block;
    height: 44px;
    width: 44px;
    line-height: 44px;
    font-size: 24px;
    float:left;
  }
#input-box{
    /* display: inline-block; */
    height: 34px;
    line-height: 34px;
    float:left;
    width: 300px;
  }
</style>
