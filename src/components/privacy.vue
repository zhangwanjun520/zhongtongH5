<template>
  <div>
    <div class="bannerPic">
      <!-- <img src="../assets/privacy/banner01.png" style="width:100%;"> -->
      <div class="protection">
        <h3>号码保护</h3>
        <p>防止用户手机/座机号码隐私泄露的融合通信解决方案</p>
        <p>适用于网络、出行、求职、外卖等场景</p>
      </div>
      <div class="navigationBar">
        <div v-for="(item,i) in dhlist" :key="i">
          <span v-bind:style="{color:item.selected == true?'#1893EE':'#fff'}" @click="clickDh(i)">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="numberProtection" v-if="dhlist[0].selected == true">
      <div class="gn">
        <div style="padding:.15rem;display:flex; justify-content: center;align-items: center;">
          <span style="font-size: 0.18rem !important;
                                          border-bottom: .015rem solid #666666;
                                          line-height: .3rem;
                                          display: block;">产品功能</span>
          <span style="padding-left:.1rem;">/Product function</span>
        </div>
        <p>
          中间号是基于运营商移动网电信品质的通信能力产品!满足实名制、真实SIM卡托管产品， 可有效保护交易双方的号码隐私安全，防止出现后续电话骚扰，防止企业重要信息发生泄漏,试用于代驾， 物流，快递，房地产销售，二手车，o2o等行业，安全保护好原有电话号码不被泄露.
        </p>

        <div class="pic">
          <img src="../assets/privacy/gnjs.png" style="width:100%;">
        </div>

      </div>
      <h3 style=" border-top: .014rem solid #E5E5E5;font-weight:500;">应用场景</h3>

      <div class="scenario" @click="toggle1()">
        <div class="title" v-bind:style="{color:isActive1?'#1893EE':'#333'}">网约车出行</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive1== false">
          <img src="../assets/privacy/s-up.png" v-if="isActive1== true">
        </div>
      </div>
      <div class="collapseDisplay" v-show="isActive1">
        <ul>
          <li>司机和乘客通过中间号联系对方，有效保护司乘号码隐私；</li>
          <li>订单结束后解除中间号绑定，有效避免电话骚扰；</li>
          <li>1个中间号支持多对绑定关系，号码资源有效利用；</li>
          <li>支持通话录音，订单纠纷可追溯。</li>
        </ul>
        <img src="../assets/privacy/cx.png" class="full-img">
      </div>
      <div class="scenario" @click="toggle2()">
        <div class="title" v-bind:style="{color:isActive2?'#1893EE':'#333'}">企业协同办公</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive2== false">
          <img src="../assets/privacy/s-up.png" v-if="isActive2== true">
        </div>
      </div>
      <div class="collapseDisplay" v-show="isActive2">
        <ul>
          <li>办公应用隐藏员工真实手机号码，有效保护员工号码隐私；</li>
          <li>企业公费电话和号码保护有效结合，便捷管理通话成本；</li>
          <li>防止员工号码被恶意窃取，避免电话骚扰；</li>
        </ul>
        <img src="../assets/privacy/xtbg.png" class="full-img">
      </div>
      <div class="scenario" @click="toggle3()">
        <div class="title" v-bind:style="{color:isActive3?'#1893EE':'#333'}">外卖送餐</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive3== false">
          <img src="../assets/privacy/s-up.png" v-if="isActive3== true">
        </div>
      </div>
      <div class="collapseDisplay" v-show="isActive3">
        <ul>
          <li>顾客、商家、骑手均通过中间号联系，保护各方号码隐私；</li>
          <li>订单结束后解除中间号绑定，有效避免电话骚扰；</li>
          <li>1个中间号支持多对绑定关系，号码资源有效利用；</li>
          <li>支持通话录音，订单纠纷可追溯；</li>
        </ul>
        <img src="../assets/privacy/wmsc.png" class="full-img">
      </div>
      <div class="scenario4" @click="toggle4()">
        <div class="title" v-bind:style="{color:isActive4?'#1893EE':'#333'}">中介服务</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive4== false">
          <img src="../assets/privacy/s-up.png" v-if="isActive4== true">
        </div>
      </div>
      <div class="collapseDisplay4" v-show="isActive4">
        <ul>
          <li>顾客与中介顾问通过中间号联系，保护顾客隐私不泄露；</li>
          <li>通过分配中间号统一保护客户信息，防止客源流失；</li>
          <li>1个中间号支持多对绑定关系，号码资源有效利用；</li>
          <li>支持通话录音，高效把控服务质量；</li>
        </ul>
        <img src="../assets/privacy/zjfw.png" class="full-img">
      </div>
      <div class="advantages">
        <h3>产品优势</h3>
        <div class="flexList">
          <div class="advantages-item">
            <img src="../assets/privacy/ychm.png" style="width:.425rem;height:.38rem;">

            <p class="b-txt">隐藏号码</p>

            <p class="s-txt">双向或单项号码隐藏的功能，同时不影响双方通信。</p>
          </div>
          <div class="advantages-item">
            <img src="../assets/privacy/liwu.png" style="width:.49rem;height:.38rem;">

            <p class="b-txt">开放接口</p>

            <p class="s-txt">实时话单上传，实时号码查询。</p>
          </div>
        </div>
        <div class="flexList">
          <div class="advantages-item">
            <img src="../assets/privacy/lyjk.png" style="width:.49rem;height:.38rem;">

            <p class="b-txt">录音监控</p>

            <p class="s-txt">提供详细话单及数据统计分析，自动录音监控。</p>
          </div>
          <div class="advantages-item">
            <img src="../assets/privacy/wuqi.png" style="width:.425rem;height:.38rem;">

            <p class="b-txt">增值服务</p>

            <p class="s-txt">语音识别，呼叫控制、拦截过滤掉无效号码。</p>
          </div>
        </div>
      </div>
      <h3 style="font-weight:500;">合作伙伴与客户</h3>

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
      <div class="andAustomers" style="padding-bottom: .2rem;">
        <img src="../assets/home/ml.png" style="width:.96rem;">
        <img src="../assets/home/bc.png" style="width:.63rem;margin-left:.18rem;">
        <img src="../assets/home/xw.png" style="width:1rem">
      </div>
    </div>
    <div class="banner-dh02" v-if="dhlist[1].selected == true">
      <div class="briefs">
        号码隐私保护(Phone Number Protection)是一款基于基础运营商通信网络能力的互联网产品，可以帮忙使用本产品的企业保护其客户电话号码不泄露、通过对虚拟号码服务过程进行录音来管理客户电话服务质量， 同时该产品适用于出行、物流、外卖、招聘等多种业务场景，API接口简单易用，可以快读实现平台客户保护用户隐私的需求。
      </div>
      <div class="detail-gns">
        <h3>功能</h3>
        <p>中通云号码保护目前有点击拨号 (回拨) 和中间号 （直拨） 两种。 </p>
        <h4>点击拨号（回拨）</h4>
        <p>点击拨号（回拨）是主叫方发起通话后，中通· 云通信平台先呼通主叫，主叫方接听后再呼通被叫方，平台负责与运营商标准对接并完成主被叫通话音频富媒体流中转。</p>
        <h4>中间号（直拨）</h4>
        <p style="padding:0;">中间号（直拨）是通过向商家平台方分配固定或者动态小号，用户拨打小号可直连到商家平台，平台显示的用户主叫号码均为平台统一号码。</p>
      </div>
      <div class="detail-gns">
        <h3 style="margin-top:0">类型</h3>
        <p>
          <strong style="font-weight: 500;">·AXB中间号：</strong> AXB中间号是为了保护一对一专属服务场景中的用户A、服务方B的隐私,为 A\B这一对通话的专属隐私保护功能； </p>
        <p>
          <strong style="font-weight: 500;">·AXN隐私号：</strong> AXN隐私号是为A用户分配一个专属的隐私号，任何号码N通过拨打X号码都可以转接到A。 </p>
        <p>
          <strong style="font-weight: 500;">·AXN分机号：</strong> 和AXN隐私号功能类似，AXN分机号在AXN基础上引入了分机号，从而降低X号码的使用量，在呼叫时候首先拨打X号码，听到提示音后输入对应分机号转接到A； </p>
        <p style="padding:0;">
          <strong style="font-weight: 500;">·95AXN隐私号：</strong> 和AXN隐私号功能类似，主要区别在于X码号类型，95AXN隐私号采用95开头的扩位码号作为X号码，相比与普通X号码，单个号码月租较低 </p>
      </div>
      <div class="joinUst">
        <div class="Access">
          <p>现在接入中通网络 · 云通信</p>
          <p>即享
            <span style="color: #1893EE">88</span>元开发大礼包</p>
        </div>
        <div class="joinBtn">
          <a>立即接入</a>
        </div>
      </div>
    </div>
    <div class="banner-dh3" v-if="dhlist[2].selected == true">
      <div class="briefst">
        <p style="text-align: center">中通云号码保护目前是线下来完成的您的对接服务。</p>
      </div>
      <img src="../assets/privacy/joinlc.png" class="full-img">
      <div class="detail-gns">
        <h3>第 1 步：开通申请</h3>
        <p style="font-size:.12rem!important;">登录中通云控制台。如果没有账号，请先注册一个中通云账号。拥有中通云账号后，您可以在中通云网站、控制台登录中通云，从而选购和使用您需要的云产品和服务。登录成功后，点击 立即申请 开始您的业务对接。 </p>
        <h3>第 2 步：商务对接</h3>
        <p style="font-size:.12rem!important;">在审批完成后，会有专人根据您留下的联系方式找到您开始对接，确定应用场景和商务意向后悔开始线下对接。</p>
        <h3>第 3 步：对接测试</h3>
        <p style="font-size:.12rem!important;">一般会形成 QQ 讨论组和您进行相关技术支持和服务，给您报备白名单，分配APPID等。</p>
        <h3>第 4 步：正式上线</h3>
        <p style="font-size:.12rem!important;">对接测试成功，且商务合同流程完成之后，您可以申请正式上线到生产环境，开始使用您的相关服务。</p>
      </div>
      <div class="joinUst">
        <div class="Access">
          <p>现在接入中通网络 · 云通信</p>
          <p>即享
            <span style="color: #1893EE">88</span>元开发大礼包</p>
        </div>
        <div class="joinBtn">
          <a>立即接入</a>
        </div>
      </div>
    </div>
    <div class="banner-dh4" v-if="dhlist[3].selected == true">
      <div class="briefste">
        <p>本页面提供关于中通云号码保护的一些常见问题解答，如果您再使用过程中遇到问题，可以拨打客服热线来寻求帮助。</p>
      </div>
      <h2>一般常见问题</h2>
      <div class="xlst">
        <div v-for="(item,index) in problemlist" :key="index" class="xl-title">
          <div v-bind:style="{color:item.selected == true?'#1893EE':'#333'}" @click="clickxl(index)" class="re">
            {{item.name}}
            <img src="../assets/privacy/un-s-up.png" v-if="item.selected == false">
            <img src="../assets/privacy/s-up.png" v-if="item.selected == true">
          </div>
          <div v-if="item.selected == true && index == 0" class="xl-txt">
            进入
            <span style="color: #1893EE">号码保护申请页面</span>立即申请该产品，申请完成后，需要等待审核，审核时间大概三个工作日，届时审核结果以邮件形式通知您。
          </div>
          <div v-if="item.selected == true  && index == 1" class="xl-txt">
            存放再COS云存储，mp3格式，有效期是一周。可以通过URL下载长期保存
          </div>
          <div v-if="item.selected == true  && index == 2" class="xl-txt">
            号码呼叫被叫次数过多，用户会取工信部投诉或者把号码拉黑并在第三方软件（腾讯手机管家，百度安全卫士，360等）标记骚扰电话。如果投诉， 工信部收到投诉就会去处理这一块投诉问题，然后会转到给我们，一般情况下就会关停号码，如果是在第三方软件标记，就会在用户有按照软件下显示骚扰电话。
          </div>
          <div v-if="item.selected == true  && index == 3" class="xl-txt">
            中间号绑定数在合法范围内不限：一个小号同时的通话数，技术上没限制，但是运营商会有监控，并发太高可能会被屏蔽， 一般一个小号同事处于通话的并发数控制在10路左右。中间号绑定时间：一般在设定一周，如要增加，需额外设置，如果没有通知，一般会定义默认一天。 中间号的收费标准：主叫拨打还是会扣费，跟我们的正常通话是一样。回拨的是网络电话，主叫方不扣费。
          </div>
          <div v-if="item.selected == true  && index == 4" class="xl-txt">
            您好，当前号码保护只有 PHP 语言的 demo，其他语言的目前没有提供，后续会增加，敬请期待。
          </div>
        </div>
      </div>

      <div class="joinUst">
        <div class="Access">
          <p>现在接入中通网络 · 云通信</p>
          <p>即享
            <span style="color: #1893EE">88</span>元开发大礼包</p>
        </div>
        <div class="joinBtn">
          <a>立即接入</a>
        </div>
      </div>
    </div>
    <div class="banner-dh5" v-if="dhlist[4].selected == true">
      <div class="detail-gnste">
        <h3>号码隐私保护服务计价方式</h3>
        <p>号码隐私保护服务费用包含两部分：号码月租费和隐私保护通话服务费；号码月租费以申请的号码数量乘以号码单价计算；隐私保护通话服务费按实际产生通话时长乘以单价。</p>
        <h3>关于实名制</h3>
        <p>号码隐私保护服务只针对企业开通此服务，需要企业实名才能开通；同时AXN隐私号依据《工信部网安函（2016）452号》的要求，每个号码需要实名到人，同一个身份证号码最多可以申请5个隐私号码。</p>
        <h3>AXB中间号X号码复用规则</h3>
        <p>在AXB中间号场景中，同一个中间号码X可以供200对AXB绑定关系复用，但是要求这200对AXB关系中A号码和B号码不能存在重复。</p>
      </div>
      <div class="joinUst">
        <div class="Access">
          <p>现在接入中通网络 · 云通信</p>
          <p>即享
            <span style="color: #1893EE">88</span>元开发大礼包</p>
        </div>
        <div class="joinBtn">
          <a>立即接入</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'privacy',
  components: {},
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
    },
    //      点击导航
    clickDh: function(idx) {
      for (let i = 0; i < this.dhlist.length; i++) {
        if (idx == i) {
          this.dhlist[i].selected = true;
        } else {
          this.dhlist[i].selected = false;
        }
      }
    },
    //     点击下拉
    clickxl: function(idx) {
      this.problemlist[idx].selected = !this.problemlist[idx].selected;
    }
  },

  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      dhlist: [{ 'name': '号码保护NPP概览', 'selected': true }, { 'name': '产品详细信息', 'selected': false }, { 'name': '入门', 'selected': false }, { 'name': '常见问题', 'selected': false }, { 'name': '业务规则', 'selected': false }],
      problemlist: [{ 'name': '如何申请号码保护?', 'selected': false }, { 'name': '录音文件存在哪里?', 'selected': false }, { 'name': '为什么这个号码会被标记?', 'selected': false }, { 'name': '中间号绑定数量和绑定事件是多少?', 'selected': false }, { 'name': '号码保护有没有SDK或者demo？', 'selected': false }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerPic {
  width: 100%;
  height: 2.74rem;
  color: #fff;
  background: url(../assets/video/组93.png);
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.xlst {
  padding: .20rem;
}

.xlst .re img {
  position: absolute;
  right: 0;
  width: .11rem;
  top: .03rem;
}

.xlst .re {
  position: relative;
  font-size: .12rem!important;
}


.xl-title {
  text-align: left;
  padding: .10rem 0;
  font-size: .14rem!important;
}

.xl-title:nth-child(3) {
  padding-bottom: 0;
}

.xl-txt {
  margin: .10rem;
  padding: 0 .10rem;
  border-left: .02rem solid #E5E5E5;
  line-height: .25rem;
  font-size: .12rem!important;
}

.joinUst {
  width: 100%;
  height: 1.85rem;
  font-size: .16rem!important;
  font-weight: 600;
  background: url("../assets/privacy/joinUSbg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Access {
  width: 100%;
  height: .9rem;
  margin-top: .2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.Access p {
  display: block;
  font-size: .2rem!important;
  font-weight: 500;
  line-height: .32rem;
}

.joinBtn {
  line-height: .40rem;
  text-align: center;
  margin: 0 auto;
}

.joinBtn a {
  display: block;
  width: 1.20rem;
  height: .40rem;
  background-color: #1A9CFC;
  color: #fff;
}

.briefs {
  padding: .2rem .2rem 0 .2rem;
  text-align: left;
  font-size: .12rem!important;
  line-height: .20rem;
}

.detail-gns,
.detail-gnste {
  padding: 0 .2rem 0 .2rem;
  font-size: .14rem!important;
}

.detail-gns h3 {
  height: .6rem;
  line-height: .6rem;
  font-weight: 500;
  text-align: center;
  font-size: .24rem!important;
}

.detail-gnste h3 {
  height: .8rem;
  line-height: .8rem;
  font-weight: 500;
  font-size: .24rem!important;
}

.detail-gnste p {
  font-size: .12rem!important;
  color: #333333;
}

.briefst {
  width: 100%;
  height: .5rem;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.briefst p {
  font-size: .12rem!important;
}

.banner-dh3 .detail-gns p {
  text-align: left;
}

.banner-dh3 .detail-gns h3 {
  text-align: left;
  font-size: .18rem!important;
}



.detail-gns h4 {
  text-align: left;
  font-size: .15rem!important;
  font-weight: 500;
  margin-bottom: .10rem;
}


.banner-dh02 .detail-gns p {
  text-align: left;
  padding-bottom: .16rem;
  font-size: .12rem!important;
}

.banner-dh4 {
  width: 100%;
  height: auto;
}

.banner-dh4 h2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: .24rem!important;
}

.briefste {
  width: 100%;
  height: .7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.briefste p {
  width: 90%;
  font-size: .12rem!important;
}

.protection {
  width: 82%;
  height: 1.7rem;
  margin-top: .8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.protection h3 {
  height: .4rem;
  font-weight: 900;
  font-size: .2rem!important;
}

.protection p {
  font-size: .12rem!important;
  line-height: .2rem;
}

.navigationBar {
  color: #fff;
  background: rgba(0, 0, 0, 1);
  height: .5rem;
  width: 100%;
  padding: 0 .10rem;
  overflow-x: scroll;
  display: flex;
  align-items: center;
}

.navigationBar div {
  padding: 0 .10rem;
  white-space: nowrap;
  text-align: center;
}

.navigationBar div>span {
  font-size: .13rem!important;
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

.advantages {
  width: 100%;
  background-color: #F7F8FA;
}

.advantages h3 {
  text-align: center;
  font-weight: 500;
}

.advantages-item {
  width: 1.50rem;
  background-color: #fff;
  padding: .15rem;
  height: 1.70rem;
  margin-bottom: .20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.advantages-item .b-txt {
  font-size: .15rem!important;
  font-weight: 600;
  margin: .1rem 0 .1rem 0;
}

.advantages-item .s-txt {
  font-size: .12rem!important;
  text-align: left;
}

.advantages .flexList {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.numberProtection h3 {
  width: 100%;
  height: .68rem;
  line-height: .6rem;
  text-align: center;
  font-size: .18rem!important;
}

.scenario,
.scenario4 {
  border-top: .014rem solid #E5E5E5;
  width: 100%!important;
  height: .51rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scenario,
.scenario4 .title {
  padding-left: .29rem;
}

.scenario4 {
  border-bottom: .01rem solid #f2f2f2;
}

.scenario,
.scenario4 .r-icon {
  padding-right: .29rem;
}

.scenario .r-icon img {
  width: .12rem;
}

.scenario4 .r-icon img {
  width: .12rem;
}

.scenario,
.scenario4 .title {
  flex-grow: 1;
  text-align: left;
  font-size: .16rem!important;
}

.collapseDisplay,
.collapseDisplay4 {
  text-align: left;
  padding: .10rem .15rem;
  font-size: .12rem!important;
  line-height: .25rem;
}

.collapseDisplay4 {
  padding: 0 .15rem .10rem .15rem;
}

.collapseDisplay>ul,
.collapseDisplay4>ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: .1rem;
}

.collapseDisplay>ul>li,
.collapseDisplay4>ul>li {
  width: 95%;
  font-size: .12rem!important;
}

.gn {
  margin: .15rem .15rem 0 .15rem;
}

.numberProtection {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.numberProtection .gn p {
  text-align: left;
  font-size: .13rem!important;
  padding: 0 .15rem;
  line-height: .23rem;
  color: #666666;
}

.pic {
  padding: .20rem;
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
  margin: 0 .10rem;
}

a {
  color: #42b983;
}
</style>
