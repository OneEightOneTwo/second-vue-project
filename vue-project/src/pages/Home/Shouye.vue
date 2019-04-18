<template>
  <div id="header">
    <div class="header">
      <div class="mall-home-head">
        <div class="vux-flexbox locate-bar vux-flex-row" style="top: 0px; z-index: 2;">
          <div
            class="vux-flexbox-item text-center location-wrap"
            style="margin-left: 8px; flex: 0 0 50%; text-align: left; padding-left: 1rem;"
          >
            <div class="chrome-icon">
              <img src="../../assets/one-hours.png" alt class="icon-img" style>
            </div>

            <div class="location-nav">
              <span class="building-name">广州市天河区人民政府</span>
            </div>
          </div>

          <div class="vux-flexbox-item text-right" style="margin-left: 8px;">
            <div>
              <div class="search-nav">
                <div class="search-nav-box">
                  <img src="../../assets/search.png" class="search-nav-img">
                  <div class="search-nav-text">搜索</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="category product-category-swiper">
        <div class="category-nav">
          <section class="category-nav-wrap">
            <div
              class="swiper-container category-nav swiper-container-horizontal swiper-container-free-mode swiper-container-android"
            >
              <div
                class="swiper-wrapper"
                style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
              >
                <div
                  class="swiper-slide category-nav-item category-nav-item-active swiper-slide-active"
                  style="width: auto;"
                >
                  <span>热卖</span>
                </div>
                <div class="swiper-slide category-nav-item swiper-slide-next" style="width: auto;">
                  <span>‍会员特价</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>0.99元菜市场</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>新鲜水果</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>时令蔬菜</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>精品肉蛋</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>海鲜水产</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>大牌乳品</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>网红零食</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>酒水饮料</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>烘焙糕点</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>方便速食</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>卤味熟食</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>粮油调味</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>美妆百货</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>出游季</span>
                </div>
                <div class="swiper-slide category-nav-item" style="width: auto;">
                  <span>囤货专区</span>
                </div>
              </div>
            </div>
            <div class="category-nav-btn"></div>
            <div class="category-nav-img" style="display: none;">
              <h3>
                全部品类
                <i></i>
              </h3>
              <ul class="category-nav-ul">
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225039946.png?mryxw=120&amp;mryxh=120&quot;);"
                  ></i>
                  <h4>热卖</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190218143311278.png?mryxw=1059&amp;mryxh=1058&quot;);"
                  ></i>
                  <h4>‍会员特价</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190104093258105.png?mryxw=140&amp;mryxh=140&quot;);"
                  ></i>
                  <h4>0.99元菜市场</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190415010710117.png?mryxw=96&amp;mryxh=96&quot;);"
                  ></i>
                  <h4>新鲜水果</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411215607573.png?mryxw=96&amp;mryxh=96&quot;);"
                  ></i>
                  <h4>时令蔬菜</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411233944397.png?mryxw=96&amp;mryxh=96&quot;);"
                  ></i>
                  <h4>精品肉蛋</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411215703249.png?mryxw=96&amp;mryxh=96&quot;);"
                  ></i>
                  <h4>海鲜水产</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411215729751.png?mryxw=96&amp;mryxh=96&quot;);"
                  ></i>
                  <h4>大牌乳品</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225358505.png?mryxw=140&amp;mryxh=140&quot;);"
                  ></i>
                  <h4>网红零食</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225617637.png?mryxw=140&amp;mryxh=140&quot;);"
                  ></i>
                  <h4>酒水饮料</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225750228.png?mryxw=140&amp;mryxh=140&quot;);"
                  ></i>
                  <h4>烘焙糕点</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190329213300525.png?mryxw=144&amp;mryxh=144&quot;);"
                  ></i>
                  <h4>方便速食</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225647021.png?mryxw=140&amp;mryxh=140&quot;);"
                  ></i>
                  <h4>卤味熟食</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190329212200665.png?mryxw=144&amp;mryxh=144&quot;);"
                  ></i>
                  <h4>粮油调味</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190329212257188.png?mryxw=144&amp;mryxh=144&quot;);"
                  ></i>
                  <h4>美妆百货</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190417171845292.png?mryxw=144&amp;mryxh=144&quot;);"
                  ></i>
                  <h4>出游季</h4>
                </li>
                <li>
                  <i
                    class="icon"
                    style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190306172132766.png?mryxw=144&amp;mryxh=144&quot;);"
                  ></i>
                  <h4>囤货专区</h4>
                </li>
              </ul>
            </div>
            <div class="category-nav-mask01" style="display: none;"></div>
            <div class="category-nav-mask02" style="display: none;"></div>
            <div id="slideLoading" class="slideLoading" style="display: none;">
              <img src="https://j-image.missfresh.cn/img_20181204113632737.gif" alt>
            </div>
            <div id="address-warning" class="address-warning" style="display: none;">
              <i></i>
              <em></em>
            </div>
          </section>
        </div>
        <div class="category-box">
          <div
            class="swiper-container category-swiper swiper-container-horizontal swiper-container-autoheight swiper-container-android"
          >
            <div
              class="swiper-wrapper"
              style="transform: translate3d(0px, 0px, 0px);"
            >
              <div
                class="swiper-slide category-swiper-slide swiper-slide-active"
                style="width: 360px;"
              >
                <div class="product-category-contaier" active="true">
                  <section class="recommend-title">
                    <div class="recommend-text">
                      <img src="../../assets/youxianyanxuan.png">
                      <em>优鲜严选</em>
                    </div>
                    <div class="recommend-text">
                      <img src="../../assets/anxinjiance.png">
                      <em>安心检测</em>
                    </div>
                    <div class="recommend-text">
                      <img src="../../assets/peifubaozhang.png">
                      <em>赔付保障</em>
                    </div>
                  </section>
                  <div class="category-border">
                    <div></div>
                  </div>
                  <!--  -->
                  <section class="prdCard-wrap">
                    <img src="../../assets/white_bg.png" alt class="bgImg">
                    <div class="category-wrap">
                      <div class="lantern-wrap lantern-five">
                        <div class="lantern-item">
                          <div class="lantern-item-img">
                            <img
                              data-v-f6a0fd68
                              src="../../assets/benzhouxinpin.png"
                              class="image-view"
                              style
                            >
                            <!---->
                          </div>
                          <p>本周新品</p>
                        </div>
                        <div class="lantern-item">
                          <div class="lantern-item-img">
                            <img
                              data-v-f6a0fd68
                              src="../../assets/yaoqingyouli.png"
                              class="image-view"
                              style
                            >
                            <!---->
                          </div>
                          <p>邀请有礼</p>
                        </div>
                        <div class="lantern-item">
                          <div class="lantern-item-img">
                            <img
                              data-v-f6a0fd68
                              src="../../assets/meiriqiandao.png"
                              class="image-view"
                              style
                            >
                            <!---->
                          </div>
                          <p>每日签到</p>
                        </div>
                        <div class="lantern-item">
                          <div class="lantern-item-img">
                            <img
                              data-v-f6a0fd68
                              src="../../assets/coudanzhuanqu.png"
                              class="image-view"
                              style
                            >
                            <!---->
                          </div>
                          <p>凑单专区</p>
                        </div>
                        <div class="lantern-item">
                          <div class="lantern-item-img">
                            <img
                              data-v-f6a0fd68
                              src="../../assets/kaitonghuiyuan1.png"
                              class="image-view"
                              style
                            >
                            <!---->
                          </div>
                          <p>开通会员</p>
                        </div>
                      </div>
                      <div class="card-wrap">
                        <img
                          data-v-f6a0fd68
                          src="../../assets/huiyuantiyanka.png"
                          class="image-view"
                          style
                        >
                        <img
                          data-v-f6a0fd68
                          src="../../assets/meirijianguo.png"
                          class="image-view"
                          style
                        >
                      </div>
                    </div>
                    <!---->
                  </section>
                  <!-- 列表 -->
                  <div class="all-products-wrap">
                    <div class="product-container">
                      <div
                        class="product-list-divider-wrap"
                        style="background-color: rgb(255, 255, 255);"
                      >
                        <div class="list-divider-container product-list-divider">
                          <div class="banner-img" style="height: 68.16px;">
                            <img
                              src="../../assets/xinrenbimai.jpg"
                              class="image-view divider-banner"
                            >
                          </div>
                        </div>
                        <div style="padding: 0px 1%; width: 100%; box-sizing: border-box;">
                          <!---->
                        </div>
                      </div>

                      <div
                        class="product-list-item-wrap"
                        style="background-color: rgb(255, 255, 255);"
                      >
                        <!---->
                        <div style="padding: 0px 1%; width: 100%; box-sizing: border-box;">
                          <section class="product-item-container">
                            <div class="product-item">
                              <div class="item-image">
                                <div class="promotion">
                                  <div class="product-item-promotion">
                                    <!---->
                                    <!---->
                                  </div>
                                </div>
                                <div class="product-item-image">
                                  <img src alt>
                                  <img
                                    src="../../assets/xinren-jiangcong.jpg"
                                    width="200"
                                    class="vux-x-img b-loaded"
                                    id="vux-ximg-x1j7v"
                                  >
                                </div>
                              </div>
                              <div class="item-detail">
                                <div class="item-title">
                                  <div class="product-item-title">
                                    <p class="sub-title">新人-葱姜蒜组合包</p>
                                    <p class="mess-title">“用心”给你每一道菜加点料</p>
                                  </div>
                                </div>
                                <div class="item-tag">
                                  <div class="product-item-tag">
                                    <span>
                                      <p
                                        class="tag-text"
                                        style="background-color: rgb(255, 255, 255); border-color: rgb(245, 159, 193); color: rgb(245, 159, 193);"
                                      >
                                        <!---->
                                        <span class="product-item-tag-txt">新人专享</span>
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div class="item-price">
                                  <div class="product-item-price">
                                    <div class="up-price-height">
                                      <div
                                        class="up-price"
                                        style="color: rgb(150, 150, 150); text-decoration: line-through; display: none;"
                                      >
                                        <span class="name"></span>
                                        <span class="sign">￥</span>
                                        <span class="price">1.9</span>
                                      </div>
                                    </div>
                                    <div class="down-price" style="color: rgb(255, 72, 145);">
                                      <!---->
                                      <span class="sign">￥</span>
                                      <span class="price">0.01</span>
                                      <span class="name"></span>
                                      <!---->
                                      <span
                                        class="has-line-through"
                                        style="color: rgb(150, 150, 150); text-decoration: line-through;"
                                      >
                                        ￥
                                        <span class="price has-line">1.9</span>
                                      </span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <div class="item-cart">
                                  <div class="product-item-cart">
                                    <!---->
                                    <div class="cart">
                                      <img src="../../assets/cart.png" class="image">
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <!---->
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                   
                   <!-- er -->
                    <div
                        class="product-list-item-wrap"
                        style="background-color: rgb(255, 255, 255);"
                      >
                        <!---->
                        <div style="padding: 0px 1%; width: 100%; box-sizing: border-box;">
                          <section class="product-item-container">
                            <div class="product-item">
                              <div class="item-image">
                                <div class="promotion">
                                  <div class="product-item-promotion">
                                    <!---->
                                    <!---->
                                  </div>
                                </div>
                                <div class="product-item-image">
                                  <img src alt>
                                  <img
                                    src="../../assets/xinren-jiangcong.jpg"
                                    width="200"
                                    class="vux-x-img b-loaded"
                                    id="vux-ximg-x1j7v"
                                  >
                                </div>
                              </div>
                              <div class="item-detail">
                                <div class="item-title">
                                  <div class="product-item-title">
                                    <p class="sub-title">新人-葱姜蒜组合包</p>
                                    <p class="mess-title">“用心”给你每一道菜加点料</p>
                                  </div>
                                </div>
                                <div class="item-tag">
                                  <div class="product-item-tag">
                                    <span>
                                      <p
                                        class="tag-text"
                                        style="background-color: rgb(255, 255, 255); border-color: rgb(245, 159, 193); color: rgb(245, 159, 193);"
                                      >
                                        <!---->
                                        <span class="product-item-tag-txt">新人专享</span>
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div class="item-price">
                                  <div class="product-item-price">
                                    <div class="up-price-height">
                                      <div
                                        class="up-price"
                                        style="color: rgb(150, 150, 150); text-decoration: line-through; display: none;"
                                      >
                                        <span class="name"></span>
                                        <span class="sign">￥</span>
                                        <span class="price">1.9</span>
                                      </div>
                                    </div>
                                    <div class="down-price" style="color: rgb(255, 72, 145);">
                                      <!---->
                                      <span class="sign">￥</span>
                                      <span class="price">0.01</span>
                                      <span class="name"></span>
                                      <!---->
                                      <span
                                        class="has-line-through"
                                        style="color: rgb(150, 150, 150); text-decoration: line-through;"
                                      >
                                        ￥
                                        <span class="price has-line">1.9</span>
                                      </span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <div class="item-cart">
                                  <div class="product-item-cart">
                                    <!---->
                                    <div class="cart">
                                      <img src="../../assets/cart.png" class="image">
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <!---->
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 2.5rem;
}

.mall-home-head {
  width: 100%;
  text-align: left;
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  box-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  margin-bottom: 1.25rem;
}

.mall-home-head .locate-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
  position: fixed;
  width: 100%;
  height: 2.5rem;
  z-index: 99;
  background: #fff;
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

.vux-flexbox .vux-flexbox-item {
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-flex: 1;
  min-width: 1.25rem;
  width: 0%;
}

.mall-home .text-center {
  text-align: center;
}

.mall-home .mall-home-head .chrome-icon,
.mall-home .mall-home-head .location-nav {
  display: inline-block;
  margin: 0 0.125rem;
}

/* 一小时送达 */
.chrome-icon .icon-img {
  height: 1em;
  vertical-align: middle;
}

/* 地址 */
.location-nav {
  position: relative;
  text-align: center;
  white-space: nowrap;
  line-height: 1rem;
  width: 14rem;
  transform: translateY(-1rem);
}

.location-nav .building-name {
  max-width: 4.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
}

/* .location-nav .building-name:after {
  position: absolute;
  right: -0.75rem;
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 0.2em;
  background: url(../../assets/down-arrow.png) no-repeat center;
  background-size: 0.6rem;
  vertical-align: middle;
  font-size: 1rem;
} */

.search-nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  box-align: center;
  -moz-box-align: center;
  -webkit-box-align: center;
  height: 1.875rem;
  background: #f5f5f5;
  border-radius: 4rem;
  text-align: left;
  line-height: 1.875rem;
  font-size: 0;
  margin-right: 0.625rem;
}
.search-nav-img {
  display: inline-block;
  vertical-align: middle;
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 0.5625rem;
}

.search-nav-text {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.875rem;
  color: #c6c6c6;
  margin-left: 0.3125rem;
}

/*  */
.category {
  display: flex;
  display: -webkit-flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
}

.category-nav-wrap {
  width: 100%;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
}

.category-nav-item-active span {
  color: #ff4891;
  border-bottom: 2px solid #ff4891;
}

.category-nav-item span {
  display: inline-block;
  height: 100%;
  margin: 0 0.9375rem;
  box-sizing: border-box;
  border-bottom: 0.125rem solid transparent;
}

.category-nav-wrap .category-nav-btn {
  width: 2.625rem;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  background: #fff url(../../assets/down-arrow.png) no-repeat center 0.5rem;
  background-size: 0.875rem;
  z-index: 15;
  background-position-y: 50%;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -o-transform: translate(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-slide,
.swiper-slide-active {
  width: 100%;
  padding: 0;
}
.category-nav-item {
  display: inline-block;
  box-sizing: border-box;
  color: #262626;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
}

/* 优选严选*/
.recommend-title {
  width: 100%;
  height: 3.0625rem;
  line-height: 3.0625rem;
  display: box;
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  -webkit-justify-content: space-around;
}

.recommend-title .recommend-text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  color: #4d4d4d;
  font-size: 0.75rem;
}

.recommend-title .recommend-text img {
  vertical-align: sub;
  width: 1rem;
  height: 1rem;
}

.recommend-title .recommend-text em,
.recommend-title .recommend-text i {
  font-style: normal;
}
/* 优选严选end */

/*  */
.prdCard-wrap {
  width: 100%;
  position: relative;
}

.prdCard-wrap .bgImg {
  width: 100%;
}

.prdCard-wrap .category-wrap {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.prdCard-wrap .lantern-wrap {
  width: 100%;
  height: 6.8125rem;
  display: box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
}

.prdCard-wrap .lantern-item {
  position: relative;
  padding-top: 1.5rem;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  box-flex: 1;
  text-align: center;
}

.prdCard-wrap .lantern-item-img {
  position: relative;
  display: inline-block;
}

.prdCard-wrap .lantern-five img {
  width: 2.5rem;
}

.prdCard-wrap .lantern-item img {
  display: inline-block;
  width: 2.75rem;
}

.prdCard-wrap .lantern-item p {
  color: #474245;
  font-size: 0.75rem;
}

.prdCard-wrap .card-wrap {
  padding: 0 0.6rem;
  overflow: hidden;
}

.prdCard-wrap .card-wrap img:nth-of-type(1) {
  float: left;
}

.prdCard-wrap .card-wrap img:nth-of-type(2) {
  float: right;
}

.prdCard-wrap .card-wrap img {
  display: inline-block;
  width: 10.625rem;
  height: 6.25rem;
}

.image-view {
  display: block;
}
/*  */
/*  */
.banner-img {
  width: 100%;
  display: block;
}

.list-divider-container .divider-banner {
  width: 100%;
  height: 100%;
}

/* 列表 */
.product-item-container {
    padding: 0 0.625rem;
    background-color: #fff;
}

.product-item-container .product-item {
    background: #fff;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0;
    -moz-flex: 1 1 0;
    flex: 1 1 0;
    position: relative;
    box-sizing: border-box;
    padding: 1.375rem 0;
    border-bottom: 0.0625rem solid #f5f5f5;
}

.product-item-container .product-item .promotion {
    position: absolute;
    left: 0;
    top: 0;
}

.product-item-image img {
    width: 120PX;
    background: url(../../assets/default-image-product.2031e18.png) no-repeat center center;
    background-size: 100% 100%;
}

.vux-x-img, .b-lazy {
    -webkit-transition: opacity 500ms ease-in-out;
    transition: opacity 500ms ease-in-out;
    max-width: 100%;
}

.product-item-container .product-item .item-detail {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    position: relative;
}

.product-item-container .product-item .item-detail .item-title {
    margin-top: 0.625rem;
}

.product-item-title .sub-title {
    font-size: 1rem;
    color: #474245;
}

.product-item-title p {
    width: 12.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.product-item-title .mess-title {
    font-size: 0.875rem;
    color: #969696;
}

.product-item-container .product-item .item-detail .item-cart {
    position: absolute;
    right: 0;
    bottom: 0.3125rem;
}

.product-item-cart .cart .image {
    width: 45PX;
    display: block;
    -webkit-transform: translateY(18%);
    transform: translateY(18%);
}

.product-item-container .product-item .item-detail .item-price {
    margin-bottom: 0.625rem;
}

.product-item-container .product-item .item-detail .item-tag {
    line-height: 1.3125rem;
    height: 1.625rem;
    margin-bottom: 1.25rem;
}

.product-item-price .down-price {
    line-height: 1;
}

.product-item-price .down-price .price {
    font-size: 1rem;
    letter-spacing: -1PX;
    display: inline;
    vertical-align: baseline;
    margin-left: -0.3125rem;
}

.product-item-tag .tag-text {
    display: inline-block;
    border-radius: 0.125rem;
    font-size: 0.75rem;
    height: 0.875rem;
    line-height: 0.875rem;
    border: 1PX solid #c6c6c6;
    margin-right: 0.3125rem;
    padding: 0 0.125rem;
    color: #262626;
    position: relative;
}

.product-item-price .down-price .has-line-through {
    display: inline-block;
    text-decoration: line-through;
    margin-left: -0.1875rem;
}
</style>