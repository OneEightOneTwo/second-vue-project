<template>
  <div id="me">
    <div class="me">
      <div class="use-nologin">
        <span>用户登录</span>
      </div>
      <!--  -->
      <div class="user_items">
        <ul>
          <li>
            <span>
              <i>0</i>
            </span>
            <span>
              余额
              <i>
                <img src="../../assets/youli.gif">
              </i>
            </span>
          </li>
          <li>
            <span>
              <i>
                2
                <em class="red-tip"></em>
              </i>
            </span>
            <span>红包</span>
          </li>
          <li>
            <span>
              <i>0</i>
            </span>
            <span>商品券</span>
          </li>
          <li>
            <span>
              <!-- <i>24</i> -->
            </span>
            <span>积分兑换</span>
          </li>
        </ul>
      </div>
      <!-- 会员权益 -->
      <div class="user-plus">
        <div class="plus-text">
          <p class="nav">
            <span class="left">会员权益</span>
            <span class="right">
              开通会员
              <!-- <em class="red-tip"></em> -->
            </span>
          </p>
          <p class="plus-money">
            成为优享会员，预计1年将为你
            <span class="pink">节省1121.30元</span>
          </p>
        </div>
      </div>
      <!-- 会员权益end -->
      <!-- 会员专享价 -->
      <div class="plus-items">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <span>
                <img src="../../assets/huiyuanzhuanxiangjia.png">
              </span>
              <span>会员专享价</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>
                <img src="../../assets/yixiaoshisongda.png">
              </span>
              <span>1小时送达</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>
                <img src="../../assets/zhuanxiangkefu.png">
              </span>
              <span>专属客服</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>
                <img src="../../assets/jingqingqidai.png">
              </span>
              <span>敬请期待</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 会员专享价end -->
      <!-- 图片部分 -->
      <div class="activities-wrap">
        <div class="activities-list flex">
          <div class="activities-item">
            <img src="../../assets/jinqunyouli.jpg" class="activities-img">
          </div>
          <div class="activities-item">
            <img src="../../assets/mianfeiling.png" class="activities-img">
          </div>
          <div class="activities-item">
            <img src="../../assets/kaitonghuiyuan.png" class="activities-img">
          </div>
        </div>
      </div>
      <!-- 图片部分end -->
      <!--  -->
      <div class="list-item rela">
        我的订单
        <span class="turn-right"></span>
      </div>

      <div class="list-item rela">
        我的地址
        <span class="turn-right"></span>
      </div>

      <div class="list-item rela">
        账户与安全
        <span class="turn-right"></span>
      </div>

      <div class="list-item rela">
        客户与帮助
        <span class="turn-right"></span>
      </div>

      <div class="list-item rela">
        意见反馈
        <span class="turn-right"></span>
      </div>

      <div class="list-item rela">
        关于我们
        <span class="turn-right"></span>
      </div>

      <div class="list-item rela">
        <span class="turn-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

em,
i {
  font-style: normal;
}
.use-nologin {
  width: 100%;
  height: 6.1875rem;
  background: url(../../assets/my-bg.png) 100%;
  padding-top: 3.9375rem;
}

.use-nologin span {
  display: block;
  height: 2.25rem;
  width: 5.1875rem;
  margin: 0 auto;
  line-height: 2.25rem;
  font-size: 0.875rem;
  color: #ff4891;
  text-align: center;
  border: 0.0625rem solid #ff4891;
  border-radius: 0.25rem;
}

/* 用户小导航 */
.user_items {
  height: 4.375rem;
  padding: 0.75rem 0;
}

.user_items ul {
  padding: 0.625rem 0;
  overflow: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.user_items li {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  color: #4d4d4d;
  font-size: 0.75rem;
  line-height: 1.375rem;
  padding-left: 0.125rem;
}

.user_items li span {
  display: block;
}

.user_items li span i {
  position: relative;
  font-size: 1rem;
}

.user_items li span i img {
  height: 0.75rem;
  width: 1.5rem;
  position: absolute;
  right: -1.5rem;
  top: -0.3125rem;
}

.red-tip {
  position: absolute;
  width: 0.375rem;
  height: 0.375rem;
  background: #ff3b30;
  border-radius: 0.375rem;
  right: -0.5rem;
  top: 0;
}
/* 用户小导航end */

/* 会员权益 */
.user-plus {
  padding: 0 0.9375rem;
}

.plus-text {
  width: 100%;
}

.plus-text p.nav {
  width: 100%;
  line-height: 1.875rem;
  position: relative;
}

.plus-text span.left {
  line-height: 1.875rem;
  font-size: 1.25rem;
  color: #474245;
  float: left;
  float: left;
}

.plus-text span.right {
  float: right;
  text-align: right;
  color: #969696;
  font-size: 0.75rem;
  padding-right: 0.9375rem;
  position: relative;
}

.plus-text p.nav span.right::after {
  width: 0.375rem;
  content: "";
  position: absolute;
  height: 0.375rem;
  top: 0.75rem;
  right: 0;
  border-bottom: 0.0625rem solid #888;
  border-right: 0.0625rem solid #888;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.plus-text span.right .red-tip {
  top: 0.25rem;
  right: 0.5rem;
}

.plus-money {
  width: 100%;
  height: 1.875rem;
  line-height: 1.875rem;
  color: #969696;
  font-size: 0.75rem;
  overflow: auto;
}

.pink {
  color: #ff4891;
}
/* 会员权益end */

/* 会员专享价 */
.plus-items {
  height: 3.4375rem;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0.9375rem;
}

.plus-items li {
  width: 24%;
  display: inline-block;
}

.plus-items li a {
  color: #474245;
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 0.75rem;
}

.plus-items li a span {
  display: block;
}

.plus-items li a img {
  height: 1.75rem;
  width: 1.75rem;
}
/* 会员专享价end */
/* 图片部分 */
.activities-wrap {
  box-sizing: border-box;
  width: 100%;
  padding: 0.625rem 0.625rem 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.activities-list {
  flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
}

.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
}

.activities-item {
  font-size: 0;
  line-height: 0;
  position: relative;
  padding-right: 0.625rem;
}

.activities-img {
  height: 5.625rem;
}
/* 图片部分end */
/*  */
.list-item {
  margin: 0 0.9375rem;
  height: 3.75rem;
  line-height: 3.75rem;
  border-bottom: 0.0625rem solid #f0f0f0;
  color: #262626;
  font-size: 0.9375rem;
}

.rela {
  position: relative;
}

.turn-right {
  display: block;
  text-align: right;
  padding-right: 0.625rem;
  position: absolute;
  right: 0;
  top: 0;
}

.turn-right::before {
  width: 0.5rem;
  height: 0.5rem;
  top: 1.5625rem;
  right: 0;
  border-bottom: 0.0625rem solid #ccc;
  border-right: 0.0625rem solid #ccc;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  content: "";
  position: absolute;
}
</style>
