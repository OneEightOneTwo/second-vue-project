
<template>
  <div id="car_box">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <div class="car_top">
      <p>定位地址：广州市天河区 &darr;</p>
    </div>
    <!-- <div class="car_content" v-if="shopCardata.goodList.length <= 0">
      <p>您还没有添加任何商品</p>
    </div> -->


<!-- UI 购物车 -->
    <div id="car_content2">
        <el-checkbox class="car_content2_top" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">2小时达  <span class="baoyou">包邮</span></el-checkbox>
        <el-checkbox-group class="goods_li" v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox class="goods_btn" v-for="city in cities" :label="city" :key="city">{{tt}}</el-checkbox>
            <div class="goods_img">
                <img src="../assets/5.png" alt="">
            </div>
            <span class="name" v-text="name">[4盒]椰子汁245ml</span>
            <div class="li_bottom">
                <span class="danwei">￥</span>
                <span class="newPrice" v-text="newPrice">3.9</span>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" size="small" id="jiajian"></el-input-number>
            </div> 
        </el-checkbox-group>
        <div id="huiyuan">
            <div class="img"><img src="../assets/huiyuan.png" alt=""></div>
            <span class="kaitong"><span class="yue">6/月</span> 立即开通</span>
           <el-checkbox id="checked" v-model="checked"></el-checkbox>
        </div>
        <div id="total">
            <p id="right_1" class="right">
                  ￥7.9
                <span class="left">商品总价</span>
            </p>
            <p class="right">
                 登陆后查看商品券
                <span class="left">商品券</span>
            </p>
            <p class="right" style="color:#ccc;">
                登陆后查看红包 >
                <span class="left" style="color:black;">红包</span>
            </p>
            <p class="right">
                  ￥7.9
                <span class="left">商品实付</span>
            </p>
            <p class="right">
                 包邮
                <span class="left">配送费</span>
            </p>
            <p id="right_last">
               合计：<span>￥7.9</span>
            </p>
        </div>
    </div>
    <div id="tuijian">
      <div>推荐商品</div>
      <ul>
        <li>
          <img class="image" src="../assets/1c021ecbe34040e390474593ed44c0d2.png" alt>
          <p class="name" v-text="name"></p>
          <p class="subtitle" v-text="subtitle"></p>
          <div>
            <span class="newPrice" v-text="newPrice"></span>
            <img class="add_car" @click="addCar" src="../assets/new-cart.a16f026.png" alt>
          </div>
          <span class="oldPrice" v-text="oldPrice"></span>
        </li>
        <li>
          <img class="image" src="../assets/b80cb6c3c69e4100a94e026027d75084.png" alt>
          <p class="name" v-text="name"></p>
          <p class="subtitle" v-text="subtitle"></p>
          <div>
            <span class="newPrice" v-text="newPrice"></span>
            <img class="add_car" @click="addCar" src="../assets/new-cart.a16f026.png" alt>
          </div>
          <span class="oldPrice" v-text="oldPrice"></span>
        </li>
        <li></li>
        <li></li>
        <div class="clear_both"></div>
      </ul>
    </div>
    <!-- <div class="clear_both2"></div> -->
  </div>
</template>
<script>
const cityOptions = ['上海'];
import ElementUI from 'element-ui'
export default {
  data() {
    return {
      name: '[4盒]椰子汁245ml',
      subtitle: '100%鲜榨，不用香精',
      newPrice: 3.9,
      oldPrice: 12.9,
      shopCardata:{
          goodList:[]
      },
      num: 1,
      checked: true,
      tt:'',
      serviceType:'2小时达',
        //配送费,返回0就是包邮
      distributing:'',
      checkAll: false,
      checkedCities: '北京',
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    addCar(){
      console.log('加入购物车')
    },
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleChange(value) {
        console.log(value);
    }
  }
}
</script>
<style scoped>
*{box-sizing: border-box;margin: 0;padding: 0;}
#car_box{
    background-color:#f5f5f5;
}
.car_top {
  width: 100%;
  height: 4.875rem;
  margin: 0 0 .9375rem 0;
  background-color: white;
  /* position:fixed;
  top:0;
  left:0; */
}
.car_top p {
  width: 100%;
  height: 50%;
  margin: 0;
  text-align: center;
}
.car_content {
  box-sizing: border-box;
  width: 100%;
  height: 18.75rem;
  background-color:white;
  padding-top: 10.625rem;
}
.car_content p {
  height: 1.25rem;
  width: 100%;
  line-height: 1.25rem;
  font-size: .875rem;
}
#car_content2{
    width: 100%;
    background-color:#f5f5f5;
}
#car_content2 .car_content2_top{
    box-sizing: border-box;
    width: 100%;
    height: 1.25rem;
    text-align: left;
    padding-left:.625rem;
    margin: 0;
    background-color:white;
}
#car_content2 .car_content2_top .baoyou{
    display: inline-block;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
    color:red;
    font-size: .75rem;
    margin-left:13.4375rem;
}
#car_content2 .goods_li{
    height: 7.125rem;
    padding:1.25rem 0;
    box-sizing: border-box;
    border-top:.0625rem solid #f5f5f5;
    background-color:white;
}
#car_content2 .goods_li .goods_btn{
    float:left;
    width: 2.75rem;
    text-align: center;
    line-height: 4.625rem;
    margin:0;
}
#car_content2 .goods_li .goods_img{
    width: 4.375rem;
    height: 4.625rem;
    line-height: 4.625rem;
    display: inline-block;
    float:left;
}
#car_content2 .goods_li .goods_img img{
    width: 4.375rem;
    height: 4.375rem;
    line-height: 4.625rem;
    
}
#car_content2 .goods_li .name{
    width: 14.375rem;
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: .75rem;
    display: inline-block;
    text-align: left;
    margin-bottom:1.875rem; 
}
#car_content2 .goods_li .li_bottom{
    width: 14.375rem;
    height: 1.375rem;
    display: inline-block;
    /* overflow: hidden; */
}
#car_content2 .goods_li .li_bottom .danwei{
    display: inline-block;
    font-size: 1rem;
    height: 1.375rem;
    line-height: 1.375rem;
    float:left;
    color:red;
}
#car_content2 .goods_li .li_bottom .newPrice{
    display: inline-block;
    font-size: 1rem;
    height: 1.375rem;
    line-height: 1.375rem;
    float:left;
    color:red;
}
/* 推荐商品 */
#jiajian{
    width: 5.3125rem;
    height: 1.4375rem;
}
/* 加减按钮 */
.el-input-number--small .el-input-number__decrease, .el-input-number--small .el-input-number__increase {
    width: 1.375rem !important;
    font-size: .8125rem;
}
#tuijian {
  /* width:100% ; */
  background-color:#f5f5f5;
  margin-top: 1.25rem;
  padding-left:.3125rem;
}
#tuijian div {
  height: 1.75rem;
  width: 100%;
  margin-bottom: .625rem;
  line-height: 1.75rem;
  text-align: left;
  font-size: 1.375rem;
  font-weight: 600;
}
#tuijian ul {
  box-sizing: border-box;
  /* list-style: none; */
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#tuijian ul li {
  box-sizing: border-box;
  list-style: none;
  width: 10.4375rem;
  height: 15.625rem;
  background-color: white;
  float: left;
  margin: 0 .3125rem .625rem .5rem;
  padding-left: .625rem;
  text-align: left;
}
#tuijian ul li .image {
  width: 9.0625rem;
  height: 9.0625rem;
}
#tuijian ul li .name {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: left;
  font-size: .875rem;
  margin: 0;
}
#tuijian ul li .subtitle {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: left;
  font-size: .75rem;
  color: #ccc;
  margin: .3125rem 0 0 0;
}
#tuijian ul li div {
  height: 1.875rem;
  width: 100%;
  margin: .3125rem 0 0 0;
}
#tuijian ul li div .newPrice {
  display: inline-block;
  width: 2.5rem;
  height: 1.875rem;
  line-height: 1.875rem;
  font-size: .875rem;
  color: red;
}
#tuijian ul li .oldPrice {
  display: inline;
  width: 2.5rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 1rem;
  color: #ccc;
  float: left;
  text-align: left;
}
#tuijian ul li div .add_car {
  width: 1.875rem;
  height: 1.875rem;
  float: right;
  margin-right: .9375rem;
  cursor: pointer;
}
#tuijian ul .clear_both {
  clear: both;
}

/* 优享会员 */
#huiyuan{
    width: 22.1875rem;
    height: 2.8125rem;
    line-height: 2.8125rem;
    border-radius:.5rem;
    padding:0 .625rem;
    margin:.625rem;
    background-color:white;
}
#huiyuan .img{
    width: 3.125rem;
    height: 2.8125rem;
    line-height: 2.8125rem;
    float:left;
}
#huiyuan .img img{
    width: 3.125rem;
    height: .875rem;
}
#checked{
    float:right;
}
#huiyuan .kaitong{
    height: 2.8125rem;
    line-height: 2.8125rem;
    font-size: .75rem;
    margin-left:10.3125rem;
}
#huiyuan .kaitong .yue{
    height: 1rem;
    font-size: .75rem;
    color:red;
}

/* 商品总价 */
#total{
    width: 22.1875rem;
    height: 15.9375rem;
    padding:0 .625rem;
    background-color: white;
    margin:0 .625rem;
    border-radius:.5rem;
}
#total .right{
    width: 100%;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: right;
    padding-right:.9375rem;
    font-size: .75rem;
}
#total #right_1{
  height:3.4375rem;
  line-height: 3.4375rem;
  font-size: .875rem;
  color:red;
}
#total #right_1 .left{
  height: 3.4375rem;
  line-height: 3.4375rem;
  font-size: .875rem;
  color:black;
} 
#total #right_last{
  font-size:1rem;
  text-align:right;
}
#total #right_last span{
  color:red;
  float:right;
}

#total .left{
    display: inline-block;
    height: 2.25rem;
    line-height: 2.25rem;
    float:left;
    font-size: .75rem;
}

</style>
