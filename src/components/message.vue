<template>
  <div>
    <div class="banner">
      <!-- <img src="../assets/message/banner.png" class="full-img"> -->
      <div class="bannerShort">
        <h2>短信</h2>
        <p>稳定触达的短信发送服务，包括短信通知、短信验证码，满足企业和客户的多场景沟通，三网覆盖，集成快速， 发送结果可知
        </p>
      </div>
    </div>
    <div class="productFunction">
      <h3>产品功能</h3>
      <h4>短信通知</h4>
      <p>通知类文字短信服务，适合活动通知、物流信息、官方通知等多类使用场景，面向海量用户也可瞬时下发,</p>
      <h4>短信验证码</h4>
      <p>高质量专用通道下发，专业安全防护，稳定触达，适合用户注册、支付确认、密码修改等多类场景</p>
      <div class="pics">
        <img src="../assets/message/cpgn.png" class="full-img">
      </div>

    </div>
    <div class="ourStrengths">
      <h3>我们的优势</h3>
      <div class="flex">
        <div class="yst-item">
          <p class="b-txt">极速触达</p>
          <p class="s-txt">五星机房+BGP网络+北上广深机房分布+主番多条链数，集群服务；</p>
        </div>
        <div class="yst-item">
          <p class="b-txt">三网覆盖</p>

          <p class="s-txt">短信通道容量=1/31的使用率+多根通道备份+独享11位号码；</p>
        </div>
      </div>
      <div class="flex">
        <div class="yst-item">
          <p class="b-txt">极简集成</p>

          <p class="s-txt">接入灵活一行代码即可搞定；</p>
        </div>
        <div class="yst-item">
          <p class="b-txt">专业安全</p>

          <p class="s-txt">独立安全保障机制，IP地址白名单。</p>
        </div>
      </div>
    </div>
    <div class="cooperations">
      <p>伙伴与客户</p>
    </div>

    <div class="andAustomers">
      <img src="../assets/home/yd.png" style="width:1.02rem;">
      <img src="../assets/home/lt.png" style="width:.9rem">
      <img src="../assets/home/dx.png" style="width:.85rem">
    </div>
    <div class="andAustomers">
      <img src="../assets/home/yl.png" style="width:.93rem;margin-left:.06rem;">
      <img src="../assets/home/qn.png" style="width:.87rem;margin-left:.2rem;">
      <img src="../assets/home/hw.png" style="width:.85rem;margin-left:.26rem;">
    </div>
    <div class="andAustomers">
      <img src="../assets/home/ml.png" style="width:.96rem;">
      <img src="../assets/home/bc.png" style="width:.63rem;margin-left:.18rem;">
      <img src="../assets/home/xw.png" style="width:1rem">
    </div>
    <div class="productPrice">
      <span>产品价格</span>
      <div class="transitionLine">
        <div class="leftLine"></div>
        <div>product price</div>
        <div class="rightLine"></div>
      </div>
    </div>
    <div class="rechargeAmount">
      <div class="flex">
        <div style="width: 1.8rem;display: flex;justify-content: flex-start;">1000
          < 充值金额 <1,0000元</div>
            <div>0.050 元/条</div>
        </div>
        <div class="flex">
          <div style="display: flex;justify-content: flex-start;">1,0000
            < 充值金额 <100,000元</div>
              <div>0.045 元/条</div>
          </div>
          <div class="flex">
            <div style="width: 1.85rem;display: flex;justify-content: flex-start;">
              < 充值金额 <100,000元</div>
                <div>0.040 元/条</div>
            </div>
          </div>
          <div class="btnFlex">
            <div class="flex">
              <div class="btn">立即开通</div>
              <div class="btn">4008-175-888</div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'message',
  components: {

  },
  ready() {

  },
  created() {

  },
  mounted() {
    window.scroll(0, 0);
  },
  methods: {
    toggle1: function() {
      this.isActive1 = !this.isActive1;
    },
    toggle2() {
      this.isActive2 = !this.isActive2;
    },
    toggle3() {
      this.isActive3 = !this.isActive3;
    },
    toggle4() {
      this.isActive4 = !this.isActive4;
    }
  },

  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-b20 {
  padding-bottom: .2rem;
}

.banner {
  position: relative;
  width: 100%;
  height: 2.38rem;
  background: url("../assets/message/banner.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bannerShort {
  width: 88%!important;
  position: absolute;
  top: 66%;
  left: 50%;
  color: #fff;
  text-align: left;
  margin-top: -.72rem;
  margin-left: -1.6rem;
  height: 1.3rem;
  background: url("../assets/message/zhe.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bannerShort h2 {
  font-weight: 900;
  font-size: .24rem!important;
  margin-left: .2rem;
  padding-top: .1rem;
  padding-bottom: .1rem;
}

.productPrice {
  width: 100%;
  height: .9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.productPrice>span {
  line-height: .24rem;
}

.transitionLine {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.transitionLine>div:nth-child(2) {
  padding: 0 .03rem;
}

.leftLine {
  width: 1.28rem;
  height: .001rem;
}

.rightLine {
  width: 1.28rem;
  height: .001rem;
}

.leftLine {
  background: -webkit-linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
  background: linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
  background: -moz-linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
  background: -o-linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
}

.rightLine {
  background: -webkit-linear-gradient(90deg, #1A2056, #FFFFFF);
  background: linear-gradient(90deg, #1A2056, #FFFFFF);
  background: -moz-linear-gradient(90deg, #1A2056, #FFFFFF);
  background: -o-linear-gradient(90deg, #1A2056, #FFFFFF);
}

.productPrice span {
  color: #262933;
  font-weight: 600;
  font-size: .18rem!important;
}

.bannerShort p {
  width: 2.8rem;
  font-size: .12rem!important;
  line-height: .2rem;
  margin-left: .2rem;
}

.cooperations {
  width: 100%;
  height: .7rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cooperations p {
  font-size: .24rem!important;
  font-weight: 500;
}

.andAustomers {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: .1rem;
}

.andAustomers img {
  height: 100%;
}

.yst-item {
  width: 100%;
  padding: 0 .15rem;
}

.productFunction p {
  font-size: .14rem;
}

.yst-item .b-txt {
  font-size: .24rem!important;
  text-align: left;
  color: #fff;
  height: .6rem;
  line-height: .6rem;
}

.yst-item .s-txt {
  font-size: .15rem!important;
  font-family: Source Han Sans CN;
  color: #cccccc;
  opacity: 0.9;
  line-height: .22rem;
  padding-bottom: .16rem;
  display: block;
}

.ourStrengths .flex {
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ourStrengths {
  width: 100%;
  height: 5.46rem;
  color: #fff;
  padding: .1rem;
  background: url("../assets/message/ysbg.png");
  background-size: cover;
  background-position: center center;
}

.ourStrengths h3 {
  font-size: .3rem!important;
  font-weight: normal;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
}

.productFunction {
  margin: 0 .2rem 0 .2rem;
}

.productFunction {
  text-align: left;
}

.productFunction h3 {
  font-weight: normal;
  color: #40507B;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  font-size: .24rem!important;
}

.productFunction h4 {
  font-weight: normal;
  color: #40507B;
  font-size: .2rem!important;
  height: .6rem;
  line-height: .6rem;
}

.productFunction p {
  color: #666666;
  font-size: .16rem!important;
  line-height: .26rem;
}

.pics {
  padding: .3rem .2rem;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 .1rem;
}

a {
  color: #42b983;
}

.rechargeAmount {
  background-color: #1A9CFC;
  color: #fff;
  height: 1.57rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.rechargeAmount .flex {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.rechargeAmount .flex div {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: .1rem;
  font-size: .12rem!important;
}

.btnFlex {
  padding: .2rem 0;
}

.btnFlex .flex {
  justify-content: space-around;
}

.btnFlex .btn {
  color: #083875;
  border: .01rem solid #1A9CFC;
  padding: .1rem;
  height: .53rem;
  line-height: .33rem;
  width: 1.33rem;
  text-align: center;
}
</style>
