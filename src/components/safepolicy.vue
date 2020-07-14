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
    <div class="intelligentCall">
      <h3>智能呼叫中心</h3>
      <div class="research">
        根据风语者IPCC研发团队在众多项目实施经验，总结了对IPCC存在的主要安全性威胁，分为IP分组网本身的脆弱性和VoIP受到的安全攻击。 中通网络针对上述的安全隐患，在产品研发和项目实施中，遵循了以下安全原则。
      </div>
    </div>
    <div class="security">
      <div class="packetNetwork">
        <h3>保障IP分组网的安全</h3>
        <div class="packrt">
         IP网络安全是各个网络层次上安全措施和内容的综合，一旦一个端点出现漏洞，就会延续到整个IP网络，因此综合、全面实施各种安全措施至关重要。
        </div>
      </div>
    </div>
    <div class="safeInfo">
      <p>IP网络是实现宽带电话的基础，要保障宽带电话的安全，首先应该保障宽带网络的安全。这方面的保护措施主要包括以下内容：</p>
      <div class="firewall">
        <div class="pictures">
          <img src="../assets/safepolicy/fires.png">
        </div>
        <div class="content">
          <p>防火墙</p>
          <p class="safe-info-s">防火墙在两个网络之间执行访问控制策略，可以是软件或硬件设备。</p>
        </div>
      </div>
      <div class="firewall">
        <div class="pictures">
          <img src="../assets/safepolicy/intrusion.png" style="width:.17rem;">
        </div>
        <div class="content">
          <p>入侵检测和防护</p>
          <p class="safe-info-s">在网络中不同端点安装和实施，以监测系统、网络运行和流量，在故障出现之前采取防护和补救措施，将损失降至最低。</p>
        </div>
      </div>
      <div class="firewall">
        <div class="pictures">
          <img src="../assets/safepolicy/inspect.png" style="width:.16rem;">
        </div>
        <div class="content">
          <p>反病毒软件</p>
          <p class="safe-info-s">在网元设备和终端上分别安装和实施。</p>
        </div>
      </div>
      <div class="firewall">
        <div class="pictures">
          <img src="../assets/safepolicy/passworld.png" style="width:.15rem;">
        </div>
        <div class="content">
          <p>加密</p>
          <p class="safe-info-s">对于内容较为敏感的通信，将进行加密保护。</p>
        </div>
      </div>
      <div class="firewall">
        <div class="pictures">
          <img src="../assets/safepolicy/prohibit.png" style="width:.16rem;">
        </div>
        <div class="content">
          <p>内容检查</p>
          <p class="safe-info-s">Java、JavaScript、ActiveX等互动技术是宽带内容站点和e-mail的重要组成部分，同时也是黑客攻击的潜在媒体，在浏览器和e-mail中禁止这些功能。</p>
        </div>
      </div>
      <div class="firewall">
        <div class="pictures">
          <img src="../assets/safepolicy/inspect.png" style="width:.16rem;">
        </div>
        <div class="content">
          <p>操作系统安全</p>
          <p class="safe-info-s">J风语者IPCC是基于Linux系统设计，有效的降低了操作系统对安全性的威胁。</p>
        </div>
      </div>
    </div>
    <div class="intelligentCalls">
      <h3>保障通话安全</h3>
      <div class="researchs">
        包括采用强认证方式，如二元认证，公共密钥基础设施(PKI)、SIP和H.323协议中也嵌套了安全功能，包括地址认证； 保证呼叫处理软件运行平台的安全，确保操作系统没有运行任何非必需软件，并且已安装必要的安全补丁，服务器、路由器的不必要端口不打开。
      </div>
    </div>
    <div class="mixedList">
      <div class="mixed">
        <div class="planItem">
          <img src="../assets/safepolicy/safe01.png" style="width: 0.425rem;">
          <p>减少因安全关联(SA)/密钥交换、加密操作引起的延迟，减少对话音质量的影响</p>
        </div>
        <div class="planItem">
          <img src="../assets/safepolicy/safe02.png" style="width: 0.465rem;">
          <p>保证宽带等网络资源，带宽是实现较高质量通话的基础和优势所在</p>
        </div>
        <div class="planItem">
          <img src="../assets/safepolicy/safe03.png" style="width: 0.49rem;">
          <p>合理选择VPN和加密，平衡安全性和质量</p>
        </div>
      </div>
      <div class="minedTwo">
        <div class="planItemTwo">
          <img src="../assets/safepolicy/safe04.png" style="width: 0.485rem;">
          <p>选择合适的多VPN隧道模式，如加密的VPN模式和没有加密的VPN模式</p>
        </div>
        <div class="planItemTwo">
          <img src="../assets/safepolicy/safe05.png" style="width: 0.465rem;">
          <p>网络地址翻译和呼叫控制，减少操作时间给话音质量带来的影响</p>
        </div>
      </div>
    </div>
    <div class="safeTxs">
      <div class="safeTx">
   <P class="wirtef">
        SYSTEM SAFETY FEATURE CONTROL
      </P>
      <p class="safe-tx-t">
        系统安全特性控制
      </p>
      <p class="safe-tx-c">
        <span> 1. 不允许任何IP地址来源的SIP认证请求</span>
        <span> 2. 不允许任何未经系统认证的通话请求</span>
        <span> 3. 加强SIP分机密码的强度</span>
        <span> 4. 封锁系统管理接口账号</span>
        <span> 5. 设定分机在同一时间内，只允许有一个通话</span>
        <span> 6. 确保呼叫流程安全</span>
        <span> 7. 分机名称与分机号码不允许设成相同的号码</span>
        <span> 8. 设定中继和分机的认证方式为安全认证</span>
        <span> 9. 禁止匿名账号连接系统</span>
      </p>
      </div>
    </div>
       <div class="shape">
      <router-link tag="div" to="/framework">技术架构</router-link>
    </div>
    <div class="shape">
      <div>立即免费试用</div>
    </div>
    <div class="shape" style="margin-bottom: .46rem;">
      <router-link tag="div" to="/IPCC">关于IPCC</router-link>
    </div>
    <!-- <div class="joinbtn">
      <router-link to="/framework">技术架构</router-link>
    </div>
    <div class="joinbtn">
      <a>立即免费试用</a>
    </div>
    <div class="joinbtn" style="margin-bottom: 20px;">
      <a>关于IPCC</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ICPP',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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

.intelligentCall,
.intelligentCalls {
  width: 100%;
  height: auto;
}

.intelligentCall>h3,
.intelligentCalls>h3 {
  height: .7rem;
  font-size: .24rem!important;
  text-align: center;
  line-height: .7rem;
  font-weight: 500;
  color: #262933;
  margin-top: .2rem;
}

.research {
  width: 95%;
  margin: 0 auto;
  font-size: .12rem!important;
  line-height: .24rem;
  text-align: center;
  margin-bottom: .39rem;
}

.researchs {
  width: 93%;
  margin: 0 auto;
  font-size: .12rem!important;
  line-height: .3rem;
  text-align: center;
  margin-bottom: .39rem;
}

.security {
  width: 100%;
  height: 5.41rem;
  background: url("../assets/safepolicy/slice.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.packetNetwork {
  width: 100%;
  height: 3.34rem;
  background: white;
}

.packetNetwork>h3 {
  font-size: .24rem!important;
  font-weight: 500;
  margin-top: .83rem;
  text-align: center;
}

.packrt {
  width: 87%;
  margin: 0 auto;
  font-size: .12rem!important;
  line-height: .3rem;
  text-align: center;
  margin-top: .45rem;
}

.safeInfo {
  width: 100%;
  height: 5.77rem;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.safeInfo>p {
  display: block;
  width: 94%;
  color: white;
  font-size: .12rem!important;
  line-height: .24rem;
  margin-top: .39rem;
  margin-bottom: .11rem;
}

.firewall {
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: .1rem;
}

.mixedList {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.pictures>img {
  width: .18rem;
}

.content>p:nth-child(1) {
  font-size: .12rem!important;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: .3rem;
}

.content>p:nth-child(2) {
  font-size: .12rem!important;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
  line-height: .18rem;
}

.mixed,
.minedTwo {
  width: 100%;
  display: flex;
}

.planItemTwo {
  width: 50%;
  height: 1.63rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: .05rem .1rem;
}

.planItemTwo>p {
  font-size: .1rem!important;
  margin-top: .25rem;
  height: .7rem;
  line-height: .16rem;
  padding: 0 .24rem;
}

.planItem {
  width: 33.3%;
  height: 1.63rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: .05rem .08rem;
}

.content{
  padding-left: .1rem;
}

.planItem>p {
  font-size: .1rem!important;
  margin-top: .25rem;
  height: .7rem;
  line-height: .16rem
}

.safeTx {
  width: 100%;
 background: url("../assets/safepolicy/tx.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wirtef {
  color: #fff;
  font-size: .15rem!important;
  opacity: 0.6;
  margin-top: .53rem;
  margin-bottom: .16rem;
}

.safe-tx-t{
  font-size: .18rem!important;
  color: white;
  margin-bottom: .1rem;
}

.safe-tx-c{
  display: flex;
  flex-direction: column;
}

.safe-tx-c>span{
  font-size: .12rem!important;
  line-height: .3rem;
}

.safe-tx-c>span:nth-child(1),
.safe-tx-c>span:nth-child(2),
.safe-tx-c>span:nth-child(3){
  color: white;
}

.shape {
  width: 1.95rem;
  height: .6rem;
  background-color: rgb(12, 38, 74);
  margin: 0 auto;
  margin-top: .25rem;
  text-align: center;
  line-height: .6rem;
  color: white;
}

.shape>div{
   font-size: .24rem!important;
}






/*  
.hjcenter {
  padding: 0 20px;
}

.safe-info {
  background-color: #000;
  color: #fff;
  padding: 20px;
  line-height: 30px;
  font-size: 14px;
  text-align: left;
}

.safe-info .content p {
  margin: 0
}

.safe-info .flex {
  margin-bottom: 20px;
}

.safe-info .safe-info-s {
  color: #A3A3A3
}

.safe-info .pic {
  min-width: 30px;
}

.safe-info .pic img {
  width: 20px;
}

.content {
  flex-grow: 1;
  padding-left: 10px;
}

.hjcenter-c {
  font-size: 14px;
  text-align: left;
  line-height: 25px;
}

.hjcenter-p {
  padding: 20px;
}

.p-b20 {
  padding-bottom: 20px;
}

.fivegjs {
  margin: 20px;
  position: relative;
}

.joinbtn {
  width: 201px;
  height: 50px;
  background-color: rgb(12, 38, 74);
  line-height: 50px;
  margin: 20px auto;
  font-weight: 600;
}

.joinbtn a {
  color: #fff;
}

.fivegjs .ab-txt {
  position: absolute;
  color: #fff;
  width: 50%;
  right: 15px;
  top: 20%;
  font-size: 11px;
  text-align: left;
}




/* .plan-item {
  width: 30%;
  position: relative;
  border-radius: 5px;
  margin-bottom: 10px;
}

.plan-item img {
  height: 38px;
} */

/* .plan-item p {
  font-size: 12px;
  text-align: left;
}

.safe-tx {
  padding: 40px 50px;
  background: url("../assets/safepolicy/tx.png");
  background-size: contain;
  background-repeat: no-repeat;
}


.safe-tx .safe-tx-t {
  font-size: 16px;
  font-weight: 600;
}

.safe-tx .safe-tx-c {
  font-size: 12px;
  line-height: 38px;
  text-align: left;
}

.plan {
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 10px;
  align-items: baseline;
}

.ab {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
}

.ab-n-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  line-height: 18px;
}

.ab-n-bg .ab-c {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 12px;
}

.small-box {
  transform: scale(0.85, 0.83);
  *font-size: 10px;
}

.plan-item .ab-n-bg .ab-n-bg-t {
  font-size: 14px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0
}

.plan-item .ab-n-bg .ab-n-bg-s-t {
  font-size: 10px;
  font-weight: normal;
  text-align: left;
  margin-top: 5px;
}

.plan-item .ab p {
  margin: 0;
  font-size: 16px;
  color: #fff;
  padding: 10px;
  font-weight: 600;
}

.fivegjs .ab {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
}

.fivegjs .ab p {
  margin: 0;
  font-size: 16px;
  color: #fff;
  padding: 10px;
  font-weight: 600;
}

.introduce div {
  width: 50%;
  background-color: #F1F8FF;
  margin: 5px;
  padding: 15px 10px;
  ;
  height: 150px;
}

.introduce h4 {
  text-align: left;
  margin: 0
}

.introduce div p {
  font-size: 12px;
  ;
  text-align: left;
  line-height: 19px;
  color: #A4A7AD;
}

.introduce {
  margin: 15px 10px;
  ;
}  */ 
</style>
