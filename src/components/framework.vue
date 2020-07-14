<template>
  <div>
    <div class="backgroundHeader">
      <div class="copywritings">
        <p>
          <span>IPCC</span>
        </p>
        <p class="small-txt">以IP技术和IP语音为主要应用技术的护呼叫中心构建方式，利用IP传输网来传输与交换语音、图像和文本等信息。</p>
      </div>
    </div>
    <div class="business">
      <div class="busine">
        <p>
          <span style="font-size:.24rem!important;">B/S 业务应用层</span>
          <span class="linest"></span>
        </p>
        <p> 客户在B/S结构（基于浏览器架构）的前端使用的业务管理软件，例如CRM、ERP以及OA等系统。</p>
      </div>
      <img src="../assets/framework/bs.png">
    </div>
    <div class="business">
      <div class="busine">
        <p>
          <span>C/S 业务应用层</span>
          <span class="linest"></span>
        </p>
        <p> 客户在C/S结构（基于应用程序架构）的前端使用的业务管理软件，例如CRM、ERP以及OA等系统。</p>
      </div>
      <img src="../assets/framework/cs.png" style="  margin-bottom: .3rem;">
    </div>
    <div class="picture">
      <div class="pictureMaskest">
        <div class="Masketst">
          <p>JavaScript接口层</p>
          <p> 呼叫中心与B/S结构业务应用系统集成时，提供的呼叫控制、状态监控以及数据交互的接口。</p>
        </div>
      </div>

      <div class="pictureMaskest2">
        <div class="Masketst2">
          <p>OCX双向接口层</p>
          <p> 呼叫中心与B/S结构业务应用系统集成时，提供的呼叫控制、状态监控以及数据交互的接口。</p>
        </div>
      </div>

      <div class="pictureTextOnly">
        <div class="pictureOnly">
          <div class="MasketOnly">
            <p>CTI服务</p>
            <p>客户端与通信层衔接的桥梁，所有客户端的事件、状态、以及数据都经过CTI服务层，CTI服务层的核心是ACD排队管理。</p>
          </div>
        </div>
        <div class="pictureOnly2">
          <div class="MasketOnly">
            <p>数据库</p>
            <p> CTI保存各种类型配置、坐席状态、设备状态、呼叫事件的数据层。</p>
          </div>
        </div>
      </div>

      <div class="pictureMaskest3">
        <div class="Masketst2">
          <p>底层通信服务</p>
          <p> 呼叫控制的处理层，也是核心层，所有的呼叫处理以及事件触发，设备的原始状态都是由该层处理。</p>
        </div>
      </div>

      <div class="pictureMaskest4">
        <div class="Masketst2">
          <p>通信配置服务</p>
          <p> 基于B/S结构的配置层，主要负责对通信的坐席配置、设备配置、路由配置、呼叫流程配置以及其他特殊配置。</p>
        </div>
      </div>
    </div>
    <div class="infos">
      <h3>立即免费试用 >
        <span>填写个人信息</span>
      </h3>
      <div class="info-form">
        <div class="flex">
          <div class="info-form-t">
            <span class="info-form-x">*</span> 联系人</div>
          <div class="info-form-input">
            <input placeholder="请输入您的姓名" />
          </div>
        </div>
        <div class="flex">
          <div class="info-form-t">
            <span class="info-form-x">*</span> 联系人</div>
          <div class="info-form-input">
            <input placeholder="请输入您的联系电话" />
          </div>
        </div>
        <div class="flex">
          <div class="info-form-t">
            <span class="info-form-x">*</span> 微信号</div>
          <div class="info-form-input">
            <input placeholder="请输入您的微信号" />
          </div>
        </div>
        <div class="flex">
          <div class="info-form-t">
            <span class="info-form-x">*</span> 公司名称</div>
          <div class="info-form-input">
            <input placeholder="请输入您的公司名称" />
          </div>
        </div>
        <div class="buttomtext">
          <a>提交</a>
        </div>
      </div>
    </div>
    <div class="tz">
      <div class="joinbtns" style="margin-bottom: 20px;">
        <router-link tag="div" to="/IPCC">关于IPCC</router-link>
      </div>
      <div class="joinbtns" style="margin-bottom: 20px;">
        <router-link tag="div" to="/safepolicy">安全策略</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICPP',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    window.scroll(0, 0);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backgroundHeader {
  width: 100%;
  height: 2.75rem;
  padding: .1rem;
  background: url(../assets/ICPP/banner.png);
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.copywritings {
  width: 2.27rem;
  background: rgba(0, 0, 0, 1);
  opacity: 0.5;
  margin-bottom: .44rem;
}

.copywritings>p:nth-child(1) {
  width: .3rem;
  border-bottom: .02rem solid #F5A418;
  margin: .1rem .06rem;
  padding-bottom: .03rem;
}

.copywritings>p:nth-child(2) {
  width: 96%;
  color: white;
  font-size: .12rem!important;
  margin: 0 auto;
  line-height: .18rem;
  margin-bottom: .1rem;
}

.copywritings>p>span {
  font-size: .24rem!important;
  font-weight: 800;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
}

.business,
.busine {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.busine>p:nth-child(1) {
  width: 88%;
  height: .4rem;
  line-height: .4rem;
  display: flex;
  flex-direction: column;
  margin: .26rem auto;
}

.linest {
  width: .3rem;
  border-bottom: .02rem solid #F5A418;
}

.busine>p:nth-child(2) {
  width: 88%;
  font-size: .15rem!important;
  margin: 0 auto;
}

.business>img {
  width: 92%;
  margin-top: .26rem;
}

.picture {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eeeeee;
}

.pictureMaskest,
.pictureMaskest2,
.pictureMaskest3,
.pictureMaskest4 {
  width: 90%;
  height: 2.2rem;
  background-position: center center;
  /* margin: 0 auto; */
  margin-top: .3rem;
}

.pictureMaskest {
  background: url(../assets/framework/jsjkc.png);
  background-size: cover;
  /* padding-top: .16rem; */
}

.pictureMaskest2 {
  background: url(../assets/framework/ocx.png);
  background-size: cover;
}

.pictureMaskest3 {
  background: url(../assets/framework/jp.png);
  background-size: cover;
}

.pictureMaskest4 {
  background: url(../assets/framework/dctx.png);
  background-size: cover;
  margin-bottom: .3rem;
}

.Masketst,
.Masketst2 {
  background: url(../assets/ICPP/mask.png);
  background-size: cover;
  height: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.Masketst>p:nth-child(1),
.Masketst2>p:nth-child(1) {
  height: .6rem;
  line-height: .6rem;
  font-size: .18rem!important;
}

.Masketst>p:nth-child(2),
.Masketst2>p:nth-child(2) {
  display: block;
  width: 70%;
  font-size: .12rem!important;
  line-height: .26rem;
  letter-spacing: .01rem;
}

.pictureTextOnly {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: .3rem;
}


.pictureTextOnly>div {
  width: 46%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pictureOnly {
  margin-right: .02rem;
}

.pictureOnly2 {
  margin-left: .02rem;
}

.pictureOnly,
.pictureOnly2 {
  height: 1.66rem;
  background-position: center center;
}

.pictureOnly {
  background: url(../assets/framework/cti.png);
  background-size: cover;
}

.pictureOnly2 {
  background: url(../assets/framework/sjk.png);
  background-size: cover;
}

.MasketOnly {
  background: url(../assets/ICPP/mask.png);
  background-size: cover;
  height: 1.66rem;
}

.MasketOnly>p {
  color: white;
  padding: 0 .06rem;
}

.MasketOnly>p:nth-child(1) {
  font-size: .18rem!important;
  height: .56rem;
  line-height: .56rem;
  text-align: center;
}


.MasketOnly>p:nth-child(2) {
  font-size: .12rem!important;
  line-height: .2rem;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infos>h3 {
  position: relative;
  height: .4rem;
  line-height: .4rem;
  font-size: .24rem!important;
  font-weight: 500;
  margin: .3rem 0;
}

.infos h3 span {
  font-size: .24rem!important;
  color: #F5A418;
}

.infos h3:after {
  content: "";
  width: .4rem;
  height: .02rem;
  background-color: #F5A418;
  position: absolute;
  bottom: 0;
  left: 0;
}

.tz {
  height: 1.99rem;
  background: url("../assets/framework/tzbg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infos .info-form .flex {
  margin-bottom: .1rem;
}

.buttomtext {
  width: 2.98rem;
  background-color: rgb(12, 38, 74);
  height: .48rem;
  text-align: center;
  line-height: .48rem;
  margin: .3rem auto;
}

.buttomtext a {
  color: #fff;
  font-size: .18rem!important;
}

.infos .info-form .info-form-input {
  flex-grow: 1;
  width: 2.6rem;
  border: 0.01rem solid #ccc;
}

.infos .info-form .info-form-input>input {
  border: 0;
  height: .3rem;
  padding-left: .08rem;
}

.infos .info-form .info-form-t {
  width: .8rem;
  text-align: right;
  padding-right: .1rem;
  font-size: .15rem!important;
}

.infos .info-form .info-form-t .info-form-x {
  color: #E94A20;
}

.joinbtns {
  width: 2.33rem;
  height: .6rem;
  border: .01rem solid #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.joinbtns>div {
  color: #fff;
  font-size: .24rem!important;
}

.tz>.joinbtns:nth-child(1) {
  margin-top: .2rem;
}
</style>
