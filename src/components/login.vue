<template>
  <div class="login">
    <div>
      <img src="../assets/login/组 2.png" alt class="full-img" />
    </div>
    <div class="content1">
      <router-link to="/login" tag="div">登录</router-link>
      <router-link to="/reg" tag="div">注册</router-link>
    </div>
    <div class="number">
      <input type="text" value="17615408128" ref="inp3" @focus="number()" @blur="number1()" />
    </div>
    <div class="phone">
      <input type="text" value="123456" ref="inp4" @focus="password()" @blur="password1()" />
    </div>
    <div class="phone">
      <input type="text" name id placeholder="请输入验证码" @blur="try1()" @focus="try2()" ref="inp5" />
      <div class="divIdentifyingCode" @click="changeCode()">
        <img id="img" style="height:40px; width: 100px; cursor: pointer;" :src="imgCode" />
        <div class="change">换一换</div>
      </div>
    </div>
    <div>
      <button class="btn" @click="login()">登陆</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// 密码加密
import md5 from "js-md5";
export default {
  data() {
    return {
      imgCode: "url"
    };
  },
  mounted() {
    this.changeCode();
  },
  created(){

  },
  methods: {
    // 密码加密
    Ca(pwd) {
      pwd = pwd.toUpperCase();
      pwd = md5(pwd);
      console.log(pwd);
      return pwd;
    },
    // 获取验证码
    changeCode() {
      withCredentials: true;
      //生成一个随机数（防止缓存）
      this.imgCode =
        "http://smsclient.sinocall.com/validate/captcha-image.json?time" +
        "=" +
        new Date().getTime();
    },

    login() {
      // 密码加密
      console.log(this);
      var pss = this.$refs.inp4.value;
      this.Ca(pss);
      axios
        .post(
          "http://smsclient.sinocall.com/user/login.json",
          {
            userName: this.$refs.inp3.value,
            password: this.Ca(pss),
            validCode: this.$refs.inp5.value
          },
          {
            headers: {
              loginType: "webapp"
            }
          },
          {
            // 单独配置
            withCredentials: true
          }
        )
        .then(res => {
          console.log(res)
          if (res.data.message === "success") {
            //  登录成功的时候将数据存到本地
            //  console.log(res.data.result.userInfo.userName)
            localStorage.setItem(
              "info",
              JSON.stringify({
                info: res.data.result.userInfo,
                token: res.data.result.token
              })
            );
            // console.log(JSON.parse(localStorage.getItem("info")))
            this.$router.push("/home/control");
          }
        });
    }
  }
};
</script>
<style>
.login {
  position: absolute;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  position: relative;
  z-index: 9;
}
.login > div > input {
  border: none;
  border-bottom: 1px solid gainsboro;
  width: 70vw;
  height: 7vh;
  margin-top: 10px;
}
.btn {
  width: 60vw;
  height: 7vh;
  border: none;
  margin-top: 10px;
  background-color: #3b87fd;
  color: white;
  border-radius: 20px;
}
.divIdentifyingCode {
  width: 40px; /*设置图片显示的宽*/
  height: 40px; /*图片显示的高*/
  background: #e2e2e2;
  margin: 0;
  font-size: 12px;
  position: relative;
}
.change {
  font-size: 12px;

  background-color: white;
  position: absolute;
  bottom: 0;
  right: -96px;
  z-index: 200;
}

.content1 {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gray;
  align-items: center;
}
</style>
