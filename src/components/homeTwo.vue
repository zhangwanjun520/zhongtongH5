<template>
  <div class="homeTwo">
    <div class="headerTwo">
      <div class="centerTitle">
        <div class="AIX">中通网络·通信服务平台</div>
        <div class="biao">
         Zhongtong network and communication service platform
        </div>
        <div class="biao" style="margin-top:20px;">
          为您提供专业移动信息服务
        </div>
      </div>
    </div>

       <!-- 公司介绍 -->
       <!-- 第三个版本 -->
    <div class="company">
      <div class="comp1">
        <p>公司介绍</p>
        <p>COMPANY PROFILE</p>
      </div>
      <div class="comp2">
        <span>
          <img src="../assets/home2/intro.png" alt />
        </span>

      </div>
      <div class="comp3">
          <span>
          <p class="title">北京中通网络通信股份有限公司</p>
          <p class="info1">北京中通网络通信股份有限公司（以下简称“中通网络”），公司成立于2006年，并于2016年1月14日在全国股转系统（新三板）挂牌，股票代码：835426。</p>
          <p class="info1">公司主要专注于企业智能的信息技术与解决方案，产品涉足风语者智能呼叫中心系统（IPCC）、风语者AI智能通行系统、风语者智能机器人等，中通网络通信旨在整合4大5G运营商的5G通信资源、大数据、物联网等广泛的通信能力，通过统一标准化的开放接口为政府和企业用户提供智能短信、语音、视频会议、人脸识别、物联网链接等通信能力和解决方案</p>
        </span>
      </div>
    </div>

  <!-- 公司服务 -->
    <div class="serve">
      <div class="serve1">
        <p>公司服务</p>
        <p>COMPANY PROFILE</p>
      </div>
      <!-- 主要内容三块 -->
      <div class="serve2">
        <div class="con1">
          <p class="image">
            <img src="../assets/home2/serve1.png" alt />
          </p>
          <p class="tit">短信</p>
          <p class="info">稳定触达的短信发送服务，包括短信通知、短信验证码，满足企业和客户的多场景沟通，三网覆盖，集成快速，发送结果可知</p>
          <p class="button" @click="goMessage">
            <el-button type="primary" round size="mini">查看详情>></el-button>
          </p>
        </div>
        <div class="con1">
          <p class="image">
            <img src="../assets/home2/serve2.png" alt />
          </p>
          <p class="tit">隐私号</p>
          <p class="info">基于运营商移动网电信品质的通信能力产品， 满足实名制、真实SIM卡托管产品， 可有效保护交易双方的号码隐私安全</p>
          <p class="button" @click="goPravicy">
            <el-button type="primary" round size="mini">查看详情>></el-button>
          </p>
        </div>
        <div class="con1">
          <p class="image">
            <img src="../assets/home2/serve3.png" alt />
          </p>
          <p class="tit">5G短信</p>
          <p class="info">5G短信本身还是短信，只是功能上大大地增强，从原来只能发70个字的文本短信，变成了带菜单、带卡片、带企业logo的新短信，让传统短信具有互联网能力。</p>
          <p class="button button2" @click="gofiveG">
            <el-button type="primary" round size="mini">查看详情>></el-button>
          </p>
        </div>
      </div>
    </div>


    <div class="productPrices">
      <span>伙伴与客户</span>
      <div class="transitionLines">
        <div class="leftLines"></div>
        <div style="width: 60%;
                    text-align: center;font-size:.1rem!important">PARTNERS AND CUSTOMERS</div>
        <div class="rightLines"></div>
      </div>
    </div>
    <div class="andAustomers">
      <img src="../assets/home/yd.png" style="width:.82rem;">
      <img src="../assets/home/lt.png" style="width:.78rem">
      <img src="../assets/home/dx.png" style="width:.71rem">
    </div>
    <div class="andAustomers">
      <img src="../assets/home/yl.png" style="width:.73rem;margin-left:.06rem;">
      <img src="../assets/home/qn.png" style="width:.65rem;margin-left:.2rem;">
      <img src="../assets/home/bc.png" style="width:.54rem;margin-left:.18rem;">
    </div>
    <div class="andAustomers" style="padding-bottom: .2rem;">
      <img src="../assets/home/hw.png" style="width:.61rem;margin-left:.26rem;">
      <img src="../assets/home/ml.png" style="width:.65rem;">
      <img src="../assets/home/xw.png" style="width:.91rem">
      <img src="../assets/home/qh.png" style="width:1.01rem">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
      goMessage() {
      this.$router.push("/msg");
    },
    goPravicy() {
      this.$router.push("/privacy");
    },
    gofiveG() {
      this.$router.push("/smart");
    }
  }

}
</script>

<style>
.homeTwo {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.headerTwo {
  width: 100%;
  height: 3.15rem;
  background: url(../assets/home2/banner.png);
  background-size: cover;
  background-position: center center;
}

.centerTitle {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.AIX {
  font-size: .27rem!important;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(252, 253, 254, 1);
  padding-bottom: .21rem;
  margin-top: 1.29rem;
}

.biao {
  width: 96%;
  font-size: .11rem!important;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(235, 238, 246, 1);
  line-height: .18rem;
  text-align: center;
  /* font-weight: bold; */
}

.hardwares {
  width: 100%;
  margin-top: .42rem;
  margin-bottom: .39rem;
  text-align: center;
}

.hardwares>div:nth-child(1) {
  font-size: .2rem!important;
  font-family: Microsoft YaHei;
  color: rgba(51, 51, 51, 1);
}

.hardwares>div:nth-child(2) {
  margin-top: .07rem;
  font-size: .12rem!important;
  font-family: Arial;
  color: rgba(95, 97, 109, 1);
}

.softwareProduct {
  width: 100%;
  height: 3.99rem;
  background-image: url("../assets/homeTwo/homePage.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topProduct {
  margin-top: .44rem;
  margin-bottom: .39rem;
  text-align: center;
}

.topProduct>div:nth-child(1) {
  font-size: .2rem!important;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  margin-bottom: .07rem;
}

.topProduct>div:nth-child(2) {
  font-size: .1rem!important;
  font-family: Arial;
  color: rgba(255, 255, 255, 1);
}

.centerProduct {
  width: 100%;
  display: flex;
  justify-content: center;
}

.centerlines,
.centerlines3 {
  width: 1.08rem;
  height: 1.7rem;
  background-image: url("../assets/homeTwo/bian.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centerlines2 {
  width: 1.08rem;
  height: 1.7rem;
  background-image: url("../assets/homeTwo/blue.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: .1rem;
  margin-right: .1rem;
}

.centerlines>img {
  width: .31rem;
  padding: .19rem 0 .14rem 0;
}

.centerlines2>img {
  width: .4rem;
  padding: .21rem 0 .08rem 0;
}

.centerlines3>img {
  width: .34rem;
  padding: .21rem 0 .07rem 0;
}

.centerline1>div:nth-child(1) {
  font-size: .13rem;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  margin-bottom: .12rem;
}

.centerline1,
.centerline3,
.one-scenario,
.one-scenario2,
.one-scenario3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.centerline1>div:nth-child(2) {
  font-size: .08rem!important;
  font-family: Microsoft YaHei;
  color: rgba(212, 222, 244, 1);
  line-height: .15rem;
  width: 94%;
  margin: 0 auto;
}

.centerline2>div:nth-child(1),
.centerline3>div:nth-child(1) {
  font-size: .13rem!important;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  margin-bottom: .09rem;
}

.centerline2>div:nth-child(2) {
  font-size: .08rem!important;
  font-family: Microsoft YaHei;
  color: rgba(212, 222, 244, 1);
  line-height: .15rem;
}

.centerline3>div:nth-child(2) {
  font-size: .08rem!important;
  font-family: Microsoft YaHei;
  color: rgba(212, 222, 244, 1);
  line-height: .15rem;
  text-align: center;
}

.bottomProduct>div {
  width: 1.3rem;
  height: .37rem;
  border: .01rem solid rgba(255, 255, 255, 1);
  font-size: .15rem;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: .37rem;
  text-align: center;
  margin-top: .35rem;
}

.applicationScenario {
  display: flex;
  flex-direction: column;
  margin-bottom: .31rem;
}






.productPrices {
  width: 100%;
  /* height: .9rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: .7rem;
}

.transitionLines {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: .46rem;
}

.leftLines {
  width: 1.28rem;
  height: .001rem;
}

.rightLines {
  width: 1.28rem;
  height: .001rem;
}

.leftLines {
  background: -webkit-linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
  background: linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
  background: -moz-linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
  background: -o-linear-gradient(-90deg, #F2473D, #1A2056, #FFFFFF);
}

.rightLines {
  background: -webkit-linear-gradient(90deg, #1A2056, #FFFFFF);
  background: linear-gradient(90deg, #1A2056, #FFFFFF);
  background: -moz-linear-gradient(90deg, #1A2056, #FFFFFF);
  background: -o-linear-gradient(90deg, #1A2056, #FFFFFF);
}

.productPrices span {
  color: #262933;
  font-weight: 600;
  font-size: .24rem!important;
  font-weight: bold;
  margin-bottom: .06rem;
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

/* 公司介绍 */
.company {
  width: 100%;
  margin: auto;
  /* border: 1px solid; */
  height: 750px;
  position: relative;
}
.comp1 {
  width: 200px;
  height: 25px;
  margin: 70px auto;
  border: 2px solid #e4e4e4;
  border-radius: 20px;
  position: relative;
}
.comp1 > p:nth-child(1) {
  position: absolute;
  left: 50%;
  margin-left: -38px;
  font-size: 15px;
  top: -15px;
  background-color: white;
  color: #2cadff;
  padding: 0px 5px 0px 5px;
}

.comp1 > p:nth-child(2) {
   font-size: 12px !important;
  position: absolute;
  left: 50%;
  margin-left: -65px;
  bottom: -7px;
  background-color: white;
  color: #999999;
  padding: 0px 5px 0px 5px;
}
.comp2{
  width: 300px;
  height: 240px;
  margin: auto;
  border: 3px solid #e4e4e4;
  position: relative;
}
.comp2>span>img{
  width: 300px;
  position: absolute;
  left: 10px;
  top: -10px;
}
.comp3{
  width: 88%;
  margin: auto;
  font-size: .12rem ;
  font-family:Source Han Sans CN;

}
.title{
  font-size: .14rem;
  color: #2CAEFF;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

}
.info1{
  text-indent: 2em;
  line-height: 24px;
}

/* 公司服务 */
.serve {
  width: 100%;
  height: 1550px;
  background: url("../assets/home2/banner2.png");
  background-position: center;
  background-size: cover;
}
.serve1 {
  width: 200px;
  height: 30px;
  margin: 50px auto;
  border: 2px solid rgba(235, 238, 246, 0.8);
  border-radius: 20px;
  position: relative;
}
.serve1 > p:nth-child(1) {
  position: absolute;
  left: 50%;
  margin-left: -35px;
  font-size: 15px;
  top: -15px;
  color: gray;
  padding: 0px 5px 0px 5px;
  background-color: rgba(235, 238, 246, 1);
}

.serve1 > p:nth-child(2) {
  position: absolute;
  left: 50%;
  margin-left: -65px;
  font-size: 12px;
  bottom: -5px;
  color: gray;
  padding: 0px 5px 0px 5px;
  background-color: rgba(235, 238, 246, 1);
}
.serve2 {
  /* width: 60%; */
  width: 100%;
  /* border: 1px solid white; */
display: flex;
flex-direction: column;
align-items: center;
  margin: auto;
  height: 1500px;
}
.serve2 > div {
  width: 280px;
  height: 350px;
  border-radius: 10px;
  margin-top: 100px;
  background-color: white;
  position: relative;
}
.tit {
  text-align: center;
  font-size: 18px;
  margin-top: 90px;
  margin-bottom: 15px;
}
.info {
  width: 80%;
  margin: auto;
  text-align: center;
  font-size: 14px;
  /* margin-top: 20px; */
  line-height: 26px;
}
.button {
  margin: auto;
  text-align: center;
  margin-top: 25px;
}
.button2 {
  margin-top: 25px;
}
.image {
  position: absolute;
  /* width: 150px; */
  width: 100%;
  text-align: center;
  top: -80px;
}
.image > img {
  width: 150px;
}
.button>.el-button--mini, .el-button--mini.is-round{
  background-color: transparent;
  color: #2CAEFF;
}
</style>
