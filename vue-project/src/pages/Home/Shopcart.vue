
<template>
<div>
  <div id="car_box" v-if="car_to_address" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <div class="car_top">
      <p @click="toAddress">定位地址：广州市天河区 <span class="el-icon-arrow-down"></span></p>
    </div>
    <!-- 购物车为空时，显示此内容 -->
    <!-- <div class="car_content" v-if="shopCardata.goodList.length <= 0">
      <p>您还没有添加任何商品</p>
    </div> -->


    <!-- 购物车 有商品时，显示此内容 -->
    <div id="car_content2">
        <!-- 全选 -->
        <el-checkbox class="car_content2_top" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">2小时达  <span class="baoyou">包邮</span></el-checkbox>
        <!-- 商品 li 渲染 -->
        <el-checkbox-group v-for="(item,idx) in goodList" :key="idx" class="goods_li" v-model="checkedCities" @change="handleCheckedCitiesChange">
          <!-- 单选 -->
            <el-checkbox class="goods_btn">{{tt}}</el-checkbox>
            <div class="goods_img">
                <img :src="item.image" alt="">
            </div>
            <span class="name">{{item.name}}<span class="delete">删除</span></span>
            <div class="li_bottom">
                <span class="danwei">￥</span>
                <span class="newPrice" v-text="item.lprice"></span>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" size="small" id="jiajian"></el-input-number>
            </div> 
        </el-checkbox-group>
        <!-- 优惠会员 -->
        <div id="huiyuan">
            <div class="img"><img src="../../assets/huiyuan.png" alt=""></div>
            <span class="kaitong"><span class="yue">6/月</span> 立即开通</span>
           <el-checkbox id="checked" v-model="checked"></el-checkbox>
        </div>
        <!-- 商品总价 -->
        <div id="total">
            <p id="right_1" class="right">
                  ￥{{totalPrice}}
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
                  ￥{{totalPrice}}
                <span class="left">商品实付</span>
            </p>
            <p class="right">
                 包邮
                <span class="left">配送费</span>
            </p>
            <p id="right_last">
               合计：<span>￥{{totalPrice}}</span>
            </p>
        </div>
        <!-- 去结算 -->
        <div id="jiesuan">
          <el-checkbox class="all_check" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div class="heji_baoyou">
            <span class="heji">合计：<span class="price">￥{{totalPrice}}</span></span>
            <p>包邮</p>
          </div>
          <div class="go_pay">去结算 </div>
          <div class="to_right"></div>
        </div>
    </div>

    <!-- 推荐商品 -->
    <div id="tuijian">
      <div>推荐商品</div>
      <ul>
        <li>
          <img class="image" src="../../assets/1c021ecbe34040e390474593ed44c0d2.png" alt>
          <p class="name" v-text="name"></p>
          <p class="subtitle" v-text="subtitle"></p>
          <div>
            <span class="newPrice" v-text="newPrice"></span>
            <img class="add_car" @click="addCar" src="../../assets/new-cart.a16f026.png" alt>
          </div>
          <span class="oldPrice" v-text="oldPrice"></span>
        </li>
        <li>
          <img class="image" src="../../assets/b80cb6c3c69e4100a94e026027d75084.png" alt>
          <p class="name" v-text="name"></p>
          <p class="subtitle" v-text="subtitle"></p>
          <div>
            <span class="newPrice" v-text="newPrice"></span>
            <img class="add_car" @click="addCar" src="../../assets/new-cart.a16f026.png" alt>
          </div>
          <span class="oldPrice" v-text="oldPrice"></span>
        </li>
        <li></li>
        <li></li>
        <div class="clear_both"></div>
      </ul>
    </div>
  </div>
  <!-- 收货地址 -->
  <div v-if="!car_to_address || !address_to_search" id="address">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <div class="top">
        选择收货地址
        <span @click="toCar" id="left" class="el-icon-back"></span>
        <span class="right">新增地址</span>
    </div>
      <div id="city">
        <select name="" class="city">
          <option value="0">广州市</option>
          <option value="1">上海市</option>
          <option value="2">北京市</option>
          <option value="3">深圳市</option>
        </select>
        <input type="text" @click="to_search" class="input" placeholder="请输入收货地址">
      </div>
      <div id="shenming">因各地区商品和配送服务不同，请您选择准确收货地址</div>
  </div>
</div>
  
</template>
<script>
const cityOptions = ['上海'];
import ElementUI from 'element-ui';
export default {
  data() {
    return {
      name: '[4盒]椰子汁245ml',
      subtitle: '100%鲜榨，不用香精',
      newPrice: 3.9,
      oldPrice: 7.9,
      totalPrice:100,
      goodList:[],
      num: 1,
      checked: true,
      tt:'',
      serviceType:'2小时达',
      //配送费,返回0就是包邮
      distributing:'',
      checkAll: false,
      checkedCities: '北京',
      cities: cityOptions,
      isIndeterminate: true,
      car_to_address:true,
      address_to_search:true
    }
  },
 
  methods: {
    getCar(){
      this.$axios.get('http://106.15.176.14:3000/cart').then(res=>{
        this.goodList = res.data;
        console.log(res);
        console.log(this.goodList);
      });
    },
    to_search(){
      this.$router.push({ path: '/xsmallsearch' })
    },
    toCar(){
      this.car_to_address = true;
    },
    toAddress(){
      this.car_to_address = false;
    },
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
        // e.totalPrice = value * e.newPrice;
        // console.log('idx:'+idx);
        console.log(value);
        // console.log(this.newPrice);
        // console.log(this.totalPrice);
    }
  },
  computed: {
    
  },
  created() {
      this.getCar();
    },
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
  position:fixed;
  top:.0625rem;
  left:0;
  z-index: 100;
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
    width: 100%;
    height: 1.25rem;
    text-align: left;
    padding-left:.625rem;
    margin-top: 6.125rem;
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
    border-top:.0625rem solid #f5f5f5;
    background-color:white;
    margin:0; 
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
#car_content2 .goods_li .name .delete{
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: .75rem;
    display: inline-block;
    float:right;
    color:red;
    cursor: pointer;
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
/* 加减按钮 */
#jiajian{
    width: 6.25rem;
    height: 1.4375rem;
}
.el-input-number--small .el-input-number__decrease, .el-input-number--small .el-input-number__increase {
    width: .07875rem !important;
    font-size: .8125rem;
}
/* 推荐商品 */
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
#jiesuan{
  height: 3rem;
  width: 100%;
  background-color: white;
  border-top:1px solid #f5f5f5;
  position:fixed;
  bottom: 3.3125rem;
  left: 0;
  z-index: 100;
  padding-left:.9375rem;
}
#jiesuan .all_check{
  line-height: 3rem;
  float:left;
}
#jiesuan .heji_baoyou{
  height: 3rem;
  /* line-height: 3rem; */
  float:left;
  margin-left:.625rem;
}
#jiesuan .heji_baoyou .heji{
  font-size: .75rem;
}
#jiesuan .heji_baoyou .heji .price{
  color:red;
}
#jiesuan .heji_baoyou p{
  font-size: .75rem;
  text-align: left;
}
#jiesuan .go_pay{
  display: inline-block;
  width: 8.625rem;
  height: 3rem;
  line-height: 3rem;
  background-color: red;
  color:white;
  text-align: center;
  font-size: 1.25rem;
  float:right;
}
#jiesuan .to_right{
  width: 0;
  height: 0;
  border-left: .4375rem solid white;
  border-top: .4375rem solid transparent;
  border-bottom: .4375rem solid transparent;
  position: absolute;
  top:1.0625rem;
  right:1.4375rem;
}

/* 选择地址 */
 #address .top{
        width: 100%;
        height: 2.75rem;
        line-height: 2.75rem;
        text-align: center;
        font-size: 1rem;
        padding:0 .9375rem;
        border:1px solid #f5f5f5;
    }
#address #left{
    display: inline-block;
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    font-size: 1.75rem;
    float:left;
}
#address .right{
    display: inline-block;
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    font-size: 1rem;
    float:right;
}
#city{
  height: 2.1875rem;
  margin: .625rem .9375rem;
  background-color: #f5f5f5;
  padding-left:.9375rem;
}
#city .city{
  width: 4.375rem;
  height: 2.1875rem;
  line-height: 2.1875rem;
  font-size: .875rem;
  text-align: center;
  border: none;
  background-color: #f5f5f5;
  float:left;
}
#city .input{
  height: 2.1875rem;
  line-height: 2.1875rem;
  width: 12.5rem;
  border: none;
  background-color: #f5f5f5;
}
#shenming{
  height: 2.1875rem;
  padding-left:.9375rem;
  line-height: 2.1875rem;
  color:orange;
  font-size: .75rem;
  text-align: left;
  background-color:#f5f5f5;
}

/* 搜索页 */
*{margin: 0;padding: 0;}
#search{
  height: 2.8125rem;
  padding:0 .625rem;
}
#search .left{
  height: 2.8125rem;
  line-height: 2.8125rem;
  float:left;
  font-size: 1.75rem;
}
#search .imput_box{
  box-sizing: border-box;
  height:2.125rem;
  line-height: 2.125rem;
  margin:.3125rem 0 .3125rem 1.5625rem;
  float:left;
  background-color: #f5f5f5;
}
#search .img_box{
  display: inline-block;
  height: 2.125rem;
  line-height: 2.125rem;
  width: 30px;
  text-align: center;
  /* padding-top:.4375rem; */
}
#search img{
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  line-height: 2.125rem;
}
#search input{
  height: 2.125rem;
  line-height: 2.125rem;
  background-color: #f5f5f5;
  width: 13.75rem;
  border:none;
  padding-left:1.875rem;
  background-image:url(../../assets/search.png)no-repeat 0 0;
}
</style>
