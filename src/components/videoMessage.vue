<template>
  <div>
    <div class="backgroundMap">
      <div class="videoMessage">
        <h2>视频短信</h2>
        <p>
          快速传递文本、图片、音频、视频等 多媒体信息，内容更丰富，展现更生 动，带来用户更好的沟通体验
        </p>
      </div>
    </div>
    <div class="productIntroduction">
      <h3>产品介绍</h3>
      <p>通过短信向用户发送图文音视频等营销内容，内容更丰富、展现更直观、效果更显著</p>
      <div class="mobilePhone">
        <img src="../assets/video/mobile.png" class="full-img" />
      </div>
      <div class="copywriting">
        <ul>
          <li>1.产品图片、活动海报、示意图标</li>
          <li>2.广告视频、VCR宣传片、动画短片</li>
          <li>3. 宣传文案、广告词、短链接</li>
        </ul>
      </div>
    </div>
    <div class="Application" v-if="dhlist[0].selected == true">
      <h3 style="border-top: .014rem solid #E5E5E5;">应用场景</h3>

      <div class="scenario" @click="toggle1()">
        <div class="title" v-bind:style="{color:isActive1?'#1893EE':'#333'}">产品推广</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive1== false" />
          <img src="../assets/privacy/s-up.png" v-if="isActive1== true" />
        </div>
      </div>
      <div class="collapseDisplays" v-show="isActive1">
        <ul>
          <li>1.下发即时生效，瞬间达到万人传播的效果</li>
          <li>2.视觉冲击是文本的几十倍，用户打开率更胜一筹</li>
          <li>3.让品牌形象在消费者中无处不在，覆盖面广</li>
          <li>4.效果可追踪，实现品效合一</li>
        </ul>
        <img src="../assets/video/图层79.png" class="full-img" />
      </div>
      <div class="scenario" @click="toggle2()">
        <div class="title" v-bind:style="{color:isActive2?'#1893EE':'#333'}">品牌曝光</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive2== false" />
          <img src="../assets/privacy/s-up.png" v-if="isActive2== true" />
        </div>
      </div>
      <div class="collapseDisplays" v-show="isActive2">
        <ul>
          <li>1.展现内容丰富，用户的互动感和参与感更强</li>
          <li>
            2. 再美的文字不如一条视频，全方位立体展示产品
          </li>
        </ul>
        <img src="../assets/video/图层602.png" class="full-img" />
      </div>
      <div class="scenario" @click="toggle3()">
        <div class="title" v-bind:style="{color:isActive3?'#1893EE':'#333'}">电商促销</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive3== false" />
          <img src="../assets/privacy/s-up.png" v-if="isActive3== true" />
        </div>
      </div>
      <div class="collapseDisplays" v-show="isActive3">
        <ul>
          <li>
            1.保存在短信信箱，用户可随时随地查看，不再 需要安装、启动APP
          </li>
          <li>
            2. 无需跳转就能观看，立体生动展现产品
          </li>
          <li>
            3. 支持短链跟踪，活动效果看得见
          </li>
          <li></li>
        </ul>
        <img src="../assets/video/图层803.png" class="full-img" />
      </div>
      <div class="scenario" @click="toggle4()">
        <div class="title" v-bind:style="{color:isActive4?'#1893EE':'#333'}">应用推广</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive4== false" />
          <img src="../assets/privacy/s-up.png" v-if="isActive4== true" />
        </div>
      </div>
      <div class="collapseDisplays" v-show="isActive4">
        <ul>
          <li>1. 不再是单纯的70个字文本，可添加图片、视频、音频等</li>
          <li>
            2. 给用户更直观的观看效果 · 主动推送
          </li>
          <li>
            3. 主动推送内容，直击目标客户，轻松实现高转化
          </li>
          <li></li>
        </ul>
        <img src="../assets/video/图层 1004.png" class="full-img" />
      </div>

      <div class="scenario" @click="toggle5()">
        <div class="title" v-bind:style="{color:isActive5?'#1893EE':'#333'}">客户关怀</div>
        <div class="r-icon">
          <img src="../assets/privacy/un-s-up.png" v-if="isActive5== false" />
          <img src="../assets/privacy/s-up.png" v-if="isActive5== true" />
        </div>
      </div>
      <div class="collapseDisplays" v-show="isActive5">
        <ul>
          <li>
            1. 结合节日，对高价值客户进行超级短信触达
          </li>
          <li>
            2. 更生动的表现紧紧吸引眼球，提供更加优质的用户体验
          </li>
        </ul>
        <img src="../assets/video/图层 1205.png" class="full-img" />
      </div>
      <div class="productAdvantages">
        <h3>产品优势</h3>

        <div class="graphicMixing">
          <div class="ys-item" style="background-color:#6490FE">
            <img src="../assets/video/图层 80.png" style="width:.5rem;" />

            <p class="b-txt">多媒体呈现</p>

            <p class="s-txt">
              可发送1.85M以内超大容量内容 约30秒视频/10张高清图/百万字
            </p>
          </div>
          <div class="ys-item" style="color:#6290FC">
            <img src="../assets/video/图层 81.png" style="width:.48rem;" />

            <p class="b-txt" style="color:#6290FC">高效触达</p>

            <p class="s-txt" style="color:#6290FC">
              使用门槛低，无需安装app 覆盖面广，触达率高
            </p>
          </div>
        </div>
        <div class="graphicMixing Mixing">
          <div class="ys-item" style="background-color:#6490FE">
            <img src="../assets/video/图层 82.png" style="width:.46rem;" />

            <p class="b-txt">转化率高</p>

            <p class="s-txt">
              内容和形式有机组合 吸引客户点击，实现更高转化
            </p>
          </div>
          <div class="ys-item">
            <img src="../assets/video/图层 83.png" style="width:.6rem;" />

            <p class="b-txt" style="color:#6290FC">多运营商覆盖</p>

            <p class="s-txt" style="color:#6290FC">
              支持三网发送，多通道支持 全国范围覆盖，终端适配率高
            </p>
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
      <div class="andAustomers" style="padding-bottom: .2rem;">
        <img src="../assets/home/ml.png" style="width:.96rem;">
        <img src="../assets/home/bc.png" style="width:.63rem;margin-left:.18rem;">
        <img src="../assets/home/xw.png" style="width:1rem">
      </div>
      <div class="ys" style="color:black;background-color:#F8F8FA">
        <h3>接入流程</h3>

        <div class="accessProcess">
          <div class="ys-item">
            <img src="../assets/video/图层 1230.png" style="width:.42rem;" />

            <p class="b-txt2" style="text-align:center">注册账号</p>

            <p class="s-txt2">
              立即前往
              <router-link tag='a' to="/" style="color:#427EFF;text-decoration: none;">注册账号</router-link>
            </p>
          </div>
          <div class="ys-item">
            <img src="../assets/video/flowline.png" alt="" style="width:.99rem;">
          </div>
          <div class="ys-item">
            <img src="../assets/video/图层 1231.png" style="width:.425rem;" />

            <p class="b-txt2" style="text-align:center">在线创建视频短信
            </p>
            <p class="s-txt2"> 创建内容，录入号码</p>

          </div>
        </div>

        <div class="accessProcess" style="height:.52rem;display:flex; justify-content: center;
          align-items: center;margin-top:.1rem;">
          <img src="../assets/video/wx1.png" alt="" style="width:.87rem;">

        </div>
        <div class="accessProcess">
          <div class="ys-item">
            <img src="../assets/video/图层 1232.png" style="width:.425rem;" />

            <p class="b-txt2" style="text-align:center">
              测试提交发送
            </p>
            <p class="s-txt2">
              提交后等待审核
            </p>
          </div>
          <!-- <div class="ys-item">
                  <img src="../assets/video/流程线.png" alt="" style="margin-top:1rem;width:.99rem;">
                </div> -->
          <div class="ys-item">
            <img src="../assets/video/flowline.png" alt="" style="width:.99rem;">
          </div>
          <div class="ys-item">
            <img src="../assets/video/图层 1233.png" style="width:.42rem;" />

            <p class="b-txt2" style="text-align:center">

              充值使用

            </p>
            <p class="s-txt2">
              在线充值余额，正式使用
            </p>
          </div>
        </div>
      </div>

      <div class="bannerst">
        <!-- <img src="../assets/video/组93.png" class="full-img"> -->
        <div class="experience">
          <h3>马上体验</h3>
          <p>
            <input type="text" name="" id="" placeholder="请输入您的手机号" height="30px" style="border:none;">
            <button style="border:none; background-color:#5382FF;color:white">免费体验</button>
          </p>
        </div>
      </div>

      <!-- <h3>合作伙伴</h3> -->

      <!-- <div class="flex hzhb">
                    <img src="../assets/home/yd.png" width="82px" />
                    <img src="../assets/home/lt.png" width="78px" />
                    <img src="../assets/home/dx.png" width="72px" />
                  </div>
                  <div class="flex hzhb">
                    <img src="../assets/home/yl.png" width="82px" />
                    <img src="../assets/home/qn.png" width="78px" />
                    <img src="../assets/home/bc.png" width="72px" />
                  </div>
                  <div class="flex hzhb" style="padding-bottom: 20px;">
                    <img src="../assets/home/hw.png" width="82px" />
                    <img src="../assets/home/ml.png" width="78px" />
                    <img src="../assets/home/xw.png" width="72px" />
                  </div> -->
    </div>

  </div>
</template>

<script>
export default {
  name: "message",
  components: {},
  ready() { },
  created() { },
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
    toggle5() {
      this.isActive5 = !this.isActive5;
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
      isActive5: false,

      dhlist: [
        { name: "号码保护NPP概览", selected: true },
        { name: "产品详细信息", selected: false },
        { name: "入门", selected: false },
        { name: "常见问题", selected: false },
        { name: "业务规模", selected: false }
      ],
      problemlist: [
        { name: "如何申请号码保护?", selected: false },
        { name: "录音文件存在哪里?", selected: false },
        { name: "为什么这个号码会被标记?", selected: false },
        { name: "中间号绑定数量和绑定事件是多少?", selected: false },
        { name: "号码保护有没有SDK或者demo？", selected: false }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerst {
  width: 100%;
  height: 1.75rem;
  color: #fff;
  padding: .1rem;
  background: url(../assets/video/组93.png);
  background-size: cover;
  background-position: center center;
}

.bannerst>.experience>p {
  margin-top: .16rem;
}

.bannerst>.experience>p>input {
  width: 2.3rem;
  height: .33rem;
  padding-left: .04rem;
  font-size: .12rem!important;
}

.bannerst>.experience>p>button {
  width: 1rem;
  height: .33rem;
}

.backgroundMap {
  width: 100%;
  height: 2.54rem;
  color: #fff;
  padding: .1rem;
  background: url(../assets/video/bannerHeader.png);
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.videoMessage {
  width: 88%;
}

.videoMessage h2 {
  height: .4rem;
  font-weight: 900;
  font-size: .24rem!important;
}

.videoMessage p {
  font-size: .12rem!important;
  line-height: .2rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.productIntroduction {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.productIntroduction h3 {
  width: 90%;
  height: .7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .24rem!important;
  font-weight: 500;
}

.productIntroduction p {
  width: 90%;
  height: .4rem;
  text-align: center;
  font-size: .15rem!important;
  color: #333333;
}

.Application {
  width: 100%;
  height: auto;
}

.Application h3 {
  width: 100%;
  height: .68rem;
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  font-size: .24rem!important;
}

.scenario .r-icon img {
  width: .12rem;
}

.scenario .title {
  padding-left: .29rem;
}

.scenario .r-icon {
  padding-right: .29rem;
}

.collapseDisplays {
  text-align: left;
  padding: .10rem .15rem;
  font-size: .12rem!important;
  line-height: .25rem;
}

.scenario {
  border-top: .014rem solid #E5E5E5;
  height: .51rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.productAdvantages {
  width: 100%;
  height: auto;
  background: #F7F8FA;
}

.productAdvantages h3 {
  height: .9rem;
}

.graphicMixing {
  width: 100%;
  height: auto;
  display: flex;
}

.graphicMixing>.ys-item {
  width: 50%;
  height: 2rem;
  margin: .05rem .1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.graphicMixing>.ys-item>img {
  margin-top: .28rem;
}

.graphicMixing>.ys-item:nth-child(1)>p {
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.graphicMixing>.ys-item>.b-txt {
  font-size: .15rem!important;
  height: .4rem;
  line-height: .4rem;
}

.graphicMixing>.ys-item>.s-txt {
  font-size: .11rem!important;
  line-height: .2rem;
  padding: 0 .08rem;
}

.graphicMixing>.ys-item:nth-child(2) {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(35, 24, 21, 0.09);
}


.Mixing {
  padding-bottom: .68rem;
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

.accessProcess {
  width: 100%;
  height: auto;
  display: flex;
}

.accessProcess>.ys-item {
  width: 33%;
  height: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.accessProcess>.ys-item>.s-txt2,
.accessProcess>.ys-item>.b-txt2 {
  font-size: .12rem!important;
  margin-top: .1rem;
}

.collapseDisplays>ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: .1rem;
}

.collapseDisplays>ul>li {
  width: 90%;
  font-size: .12rem!important;
}

.mobilePhone {
  width: 90%;
  margin-top: .3rem;
}

.copywriting {
  width: 90%;
  margin-top: .26rem;
  margin-bottom: .26rem;
}

.copywriting ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.copywriting ul>li {
  width: 90%;
  text-align: left;
  font-size: .18rem!important;
  line-height: .3rem;
}

.expre {
  background-image: url(../assets/video/组93.png);
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
  margin: 0 10px;
}

a {
  color: #42b983;
}

.price {
  background-color: #1a9cfc;
  color: #fff;
  padding: 40px 0;
}

.price .flex {
  text-align: center;
}

.price .flex div {
  flex-grow: 1;
  padding: 10px;
  font-size: 13px;
}

.btnflex {
  padding: 20px 0;
}

.btnflex .flex {
  justify-content: space-around;
}

.btnflex .btn {
  color: #083875;
  border: 1px solid #1a9cfc;
  padding: 10px;
  height: 53px;
  line-height: 33px;
  width: 133px;
}

.banner-ab2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  text-align: left;
  margin-top: -72px;
  width: 320px;
  margin-left: -160px;
}
</style>
