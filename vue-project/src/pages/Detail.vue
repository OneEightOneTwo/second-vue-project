<template>
<!-- 详情页 -->
  <div id="detail">
      <div id="top">
        <span class="el-icon-arrow-left" @click="back"></span>
        <span class="top">商品详情</span>
      </div>
      <div id="banner">
        <el-carousel id="banner_tu" height="250px" interval='3000'>
          <el-carousel-item v-for="item in 4" :key="item" id="banner">
            <!-- <h3>{{ item }}</h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="discriptions">
        <div class="title" v-text="title"></div>
        <div class="discription" v-text="discription"></div>
        <div class="price">￥9.6<span>已售246份</span></div>
        <div class="chandi">
          <li>产地中国</li>
          <li>次日达</li>
          <li>实付满69包邮</li>
        </div>
      </div>
      <div id="honbao">
         <span class="left">该商品分享可伶49元减10元红包</span>
         <span class="right">去分享 > </span>
      </div>
      <p id="fenxiang">已经有4422分享了该商品</p>
      <div id="zhiwen">安心指纹</div>
      <div id="liangdian">
         <p>亮点</p> 
        <span>小白犀利软新口味，海盐芝士味夹心吐司</span>
      </div>
      <div id="xiangqing">
        <div>商品详情</div>
        <p>规格：1袋</p>
        <p>重量：43g</p>
        <p>包装：袋</p>
        <p>保质期：60天</p>
        <p>贮存方法：常温</p>
      </div>
      <div id="img_show">
        <img src="../assets/detail-1.jpg" alt="">
        <img src="../assets/detail-2.jpg" alt="">
        <img src="../assets/detail-3.jpg" alt="">
        <img src="../assets/detail-4.jpg" alt="">
        <img src="../assets/detail-5.jpg" alt="">
      </div>
      <div id="addCar">
        <div class="to"> <span class="el-icon-location-outline"></span> 送至&nbsp;&nbsp;广州市天河区人大... <span class="el-icon-arrow-right"></span> </div>
        <div class="add">
          <el-badge :value="3" class="item">
             <span class="el-icon-goods"></span>
          </el-badge>
          <span class="add_car">加入购物车</span></div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title:"海盐芝士味夹心吐司",
      discription:"小白心里柔软夹心吐司43g"
    };
  },
  components: {

  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
/* 详情页- 头部 */
*{padding: 0;margin: 0;box-sizing: border-box;}
  #top{
    height: 2.8125rem;
    width: 100%;
    text-align: center;
  }
.el-icon-arrow-left{
    display: inline-block;
    height: 2.8125rem;
    line-height: 2.8125rem;
    float:left;
    font-size: 1.625rem;
    width: 1.875rem;
    margin-left:1px;
  }
  #top .top{
    box-sizing: border-box;
    display: inline-block;
    height: 2.8125rem;
    line-height: 2.8125rem;
    font-size: 1rem;
    color:red;
    border-bottom:.125rem solid red;
  }
  /* 轮播图 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 1.125rem;
    opacity: 0.75;
    line-height: 15.625rem;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background:url("../assets/banner-1.jpg")no-repeat center top;
    background-size: contain;
  }
  .el-carousel__item:nth-child(2n+1) {
    background:url("../assets/banner-2.jpg")no-repeat center top;
    background-size: contain;
  }
  /* .el-carousel__item:nth-child(3) {
    background-image:url(../assets/banner-3.jpg);
    background-size: contain;
    background-repeat:no-repeat;
  }
  .el-carousel__item:nth-child(4) {
    background-image:url(../assets/banner-4.jpg);
     background-size: contain;
     background-repeat:no-repeat;
  }  */
  /* .el-carousel__item:nth-child(5) {
    background-image:url(../assets/banner-5.jpg);
      background-size: contain;
  } */
  #banner_tu{
    height: 15.625rem;
  }
/* 产品描述 */
  #discriptions{
    padding:.9375rem .9375rem 0 .9375rem;
  }
  #discriptions .title{
    height: 1.75rem;
    line-height: 1.75rem;
    font-size:1rem;
    font-weight: 700;
    text-align: left;
  }
  #discriptions .discription{
    height: 1.75rem;
    line-height: 1.75rem;
    font-size: 1rem;
    text-align: left;
    margin-bottom: .9375rem;
  }
   #discriptions .price{
     height: 1.25rem;
     line-height: 1.25rem;
     text-align: left;
     color:red;
     font-size: .75rem;
     font-weight: 700;
     padding-right:.9375rem;
     margin:1.25rem 0 .625rem 0;
     border-bottom:1px solid #f5f5f5;
   }
   #discriptions .price span{
     display: inline-block;
     float:right;
     color:#ccc;
     font-size: .75rem;
     height: 1.25rem;
     line-height: 1.25rem;
   }
   #discriptions .chandi{
     margin-top:15px;
     height: 2.25rem;
   }
   #discriptions .chandi li{
     float:left;
     height: 2.25rem;
     line-height: 2.25rem;
     font-size: .75rem;
     margin-right:.9375rem;
   }
/* 领红包 */
#honbao{
  margin:.625rem .9375rem;
  background-color: #f7d3e187;
  border-radius:.625rem;
  height: 4.375rem;
  padding-left:1.25rem;
  padding-right:15px;
}
#honbao .left{
  display: inline-block;
  height: 4.375rem;
  line-height: 4.375rem;
  font-size: .875rem;
  color:red;
  float:left;
}
#honbao .right{
  display: inline-block;
  height: 4.375rem;
  line-height: 4.375rem;
 font-size: .875rem;
  color:red;
  float:right;
}
#fenxiang{
  height: 1rem;
  line-height: 1rem;
  font-size: .625rem;
  color:#ccc;
  text-align: left;
  padding-left: 1.25rem;
  font-weight: 700;
}
#zhiwen{
  height: 3.75rem;
  padding:.9375rem .9375rem 0 .9375rem;
  font-size: 1.125rem;
  text-align: left;
}
/* 亮点 */
#liangdian{
  height: 6.25rem;
  font-size: 1rem;
  margin:15px;
  border:1px solid #f5f5f5;
  box-shadow:0px 0px 15px #ccc;
}
#liangdian p{
  font-size: 22px;
  font-weight: 500;
  height: 35px;
  line-height: 35px;
  padding-left:25px;
  text-align: left;
  margin:10px;
}
/* 商品详情 */
#xiangqing{
  padding-left:.9375rem;
  margin-top:15px;
}
#xiangqing div{
  font-style: 1.125rem;
  height: 2rem;
  line-height: 2rem;
  text-align: left;
  margin:5px 0;
}
#xiangqing p{
  font-size: 14px;
  color:rgb(150, 150, 150);
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: left;
}
#img_show{
  margin:10px 15px;
  background-color: #f5f5f5;
}
#img_show img{
  display: block;
  width: 100%;
}
/* 加入购物车 */
#addCar{
  position:fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
#addCar .to{
  height: 37px;
  line-height: 37px;
  padding-left:15px;
  background-color:rgba(255, 244, 226, 0.9);
  text-align: left;
}
#addCar .to .el-icon-location-outline{
  display: inline-block;
  height: 37px;
  line-height: 37px;
  float:left;
}
#addCar .to span{
  display: inline-block;
  width: 25px;
  height: 37px;
  line-height: 37px;
  float:right;
}
#addCar .add{
  height: 46px;
  background-color: white;
}
#addCar .add .el-icon-goods{
  display: inline-block;
  height: 2.875rem;
  line-height: 2.875rem;
  width: 15%;
  text-align: center;
  background-color: white;
  float:left;
}
#addCar .add .add_car{
  display: inline-block;
  height: 2.875rem;
  line-height: 2.875rem;
  text-align: center;
  background-color:#ff4891;
  float:right;
  font-size: 18px;
  color:white;
  width: 85%;
}

</style>

