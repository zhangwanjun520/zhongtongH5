<template>
  <div id="app">
    <div class="header">
      <img src="./assets/home/logo.png" class="logo" />
      <div class="a">
        <a
          href="http://smsclient.sinocall.com/#/login"
          style=" text-decoration: none;color:white;"
          class="aa"
        >
         <el-button size="mini">登录/注册</el-button></a>
      </div>
      <!-- <div > -->
      <img src="./assets/home/menu.png" class="iconLogo" @click="nav = !nav" />
      <!-- </div> -->
    </div>
    <el-aside v-if="nav">
      <el-menu class="el-menu-vertical-demo" default-active="2" :unique-opened="true">
        <!-- <el-menu-item index="1" class="user" @click.native="duan">
          <router-link to="/homePage" tag="span">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <span slot="title">通信产品</span>
          </template>
          <el-menu-item index="2-2" class="user" @click.native="duan">
            <a href="http://www.sinocall.net/"> 400/95客服号码</a>
          </el-menu-item>
          <router-link to="/privacy" tag="el-menu-item" index='2-1' @click.native="duan">隐私号</router-link>
          <router-link to="/msg" tag="el-menu-item" index='2-3' @click.native="duan">短信</router-link>
          <router-link to="/videomessage" tag="el-menu-item" index='2-4' @click.native="duan">视频短信</router-link>
          <router-link to="/smart" tag="el-menu-item" index='2-5' @click.native="duan">5G短信</router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span slot="title">解决方案</span>
          </template>
          <router-link to="/IPCC" tag="el-menu-item" index='3-1' @click.native="duan">IPCC</router-link>
          <router-link to="/intelligent" tag="el-menu-item" index='3-2' @click.native="duan">智能通行</router-link>
          <router-link to="/meeting" tag="el-menu-item" index='3-3' @click.native="duan">视频会议</router-link>
          <el-menu-item index="3-4" class="user" @click.native="duan">
            <a href="http://www.dongrobot.com/"> 机器人客服</a>
          </el-menu-item>
        </el-submenu>

        <el-menu-item index="5" class="user" @click.native="duan">
          <router-link to="/about" tag="span">关于我们</router-link>
        </el-menu-item>-->

        <el-menu-item index="2-1">
          <router-link to="/homePage" tag="span">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/msg" tag="span">短信</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/privacy" tag="span">隐私号</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/smart" tag="span">5G消息</router-link>
        </el-menu-item>
        <el-menu-item index="2-5">
          <a href="http://www.sinocall.net/" style="  text-decoration:none;color:black;">400/95客服号码</a>
        </el-menu-item>
        <el-menu-item index="2-6">
          <router-link to="/about" tag="span">关于我们</router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding:0;" @click.native="show">
      <router-view></router-view>
    </el-main>
    <div class="foot">
      <div style="padding-bottom:.2rem;">
        <p class="padding">联系我们</p>
        <p>公司地址：北京市朝阳区惠河南街62-108</p>
        <p>联系电话：4008-150-888</p>
        <!-- <p>售后服务：400-889-5678</p> -->
        <p>传真电话：+86-010-85757990</p>
      </div>
      <div class="paddings">
        <p>北京中通网络通信股份有限公司</p>
        <p>备案号 ：京ICP备07500258号</p>
        <p>京公网安备 11010502036786号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showMenu: false,
      showpMenu: false,
      showjjMenu: false,
      nav: false
    };
  },
  methods: {
    show() {
      if (this.nav == true) {
        this.nav = false;
      }
    },
    duan() {
      this.nav = !this.nav;
    },
    clickhome: function() {
      this.$router.push("/");
      this.showMenu = false;
    },
    clickzhproduct: function(type) {
      if (type == 1) {
        this.$router.push("/privacy");
      } else if (type == 3) {
        this.$router.push("/msg");
      } else if (type == 5) {
        this.$router.push("/videomessage");
      } else if (type == 8) {
        this.$router.push("/smart");
      }
      this.showMenu = false;
    },
    clickjj: function(type) {
      if (type == 1) {
        this.$router.push("/privacy");
      } else if (type == 4) {
        this.$router.push("/IPCC");
      } else if (type == 6) {
        this.$router.push("/meeting");
      } else if (type == 2) {
        this.$router.push("/about");
      } else if (type == 66) {
        this.$router.push("/intelligent");
      }
      this.showMenu = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;  */
  color: #2c3e50;
  overflow: hidden;
  /*margin-top: 60px;*/
}

.a {
  text-align: center;
}
.aa>.el-button--mini, .el-button--mini.is-round{
  background-color: transparent;
  color: gainsboro;
}
.login {
  height: 0.21rem;
}

.logo {
  width: 0.96rem;
}

.iconLogo {
  width: 0.24rem;
}

.full-img {
  width: 100%;
}

.flex {
  display: flex;
  align-items: center;
  justify-items: center;
}

.flex-item {
  flex-grow: 1;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

/*移动端*/

.header {
  width: 100%;
  height: 0.49rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
}

.el-aside {
  position: fixed;
  top: 0.5rem;
  right: 0;
  z-index: 999;
  width: 40% !important;
  height: auto;
  box-shadow: 0px 2px 21px 0px rgba(35, 24, 21, 0.15);
}

.el-submenu .el-menu-item {
  height: 0.46rem;
  line-height: 0.46rem;
}

.el-menu-item {
  padding: 0;
}

.user {
  /* text-align: center; */
}

.user > span {
  display: block;
}

.el-aside > .el-menu > .el-submenu__title {
  padding-left: 0.14rem !important;
  width: 1.48rem;
}

.el-aside > .el-menu-vertical-demo {
  height: 100% !important;
  font-size: 0.4rem !important;
}

.user > a {
  color: #000000;
  text-decoration: none;
}

/*底部*/

.foot {
  background-color: #0c264a;
  color: #f0f0f0;
  padding: 0.15rem 0.25rem;
  text-align: left;
}

.foot div p {
  font-size: 0.15rem !important;
  line-height: 0.3rem;
}

.padding {
  padding: 0.1rem 0;
}

.paddings {
  padding-bottom: 0.2rem;
}

.menu-item-box {
  position: fixed;
  background-color: white;
  color: #fff;
  overflow: hidden;
  -webkit-transition: all 800ms;
  transition: all 800ms;
  z-index: 10;
  right: 0;
  top: 0.49rem;
  width: 2rem;
}

.menu-item-box-li {
  width: inherit;
  position: relative;
  padding: 0.05rem 0.2rem 0.05rem;
  line-height: 0.34rem;
  text-align: left;
  color: #000000;
}

.menu-item-box-li a {
  color: #000000;
  text-decoration: none;
}

.chlidmenu {
  text-align: left;
  list-style: none;
  margin: 0;
}

.aa {
  display: inline-block;
  /* width: 18vw; */
  /* height: 5vh; */
  /* padding: .04rem .04rem; */
  padding: 0.04rem 0.04rem 0.06rem 0.04rem;
  /* line-height: 5vh; */
  border-radius: 0.05rem;
  font-size: 0.12rem !important;
}
</style>
