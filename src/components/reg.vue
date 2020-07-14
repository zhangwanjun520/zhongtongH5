<template>
  <div class="reg">
    <div>
      <img src="../assets/login/组 2.png" alt class="full-img" />
    </div>
    <div class="content1">
      <router-link to="/login" tag="div">登录</router-link>
      <router-link to="/reg" tag="div">注册</router-link>
    </div>
    <div class="number">
      <input
        type="text"
        name
        id
        placeholder="请输入手机号"
        ref="inpp1"
        @focus="number3()"
        @blur="try1()"
        :class="it?'blue active':'red'"
      />
      <div :class="it?'warn1':'warn2'">
        <span>请输入有效的号码</span>
      </div>
    </div>

    <div>
      <input type="text" name id placeholder="请输入短信验证码" ref="inpp2" @focus="number2()" />
    </div>

    <div>
      <el-button :disabled="disabled" @click="ask()" class="sendcode">{{btntxt}}</el-button>
    </div>

    <div class="number">
      <input
        type="text"
        placeholder="请输入6位以上数字或字母"
        @focus="password()"
        @blur="try2()"
        :class="psw?'blue':'red'"
        ref="inpp3"
      />
      <div :class="psw?'warn1':'warn2'">
        <span>请输入6位以上数字或字母</span>
      </div>
    </div>
    <div class="phone">
      <input type="text" name id placeholder="邀请码" @focus="try2()" ref="inpp4" />
    </div>
    <div>
      <input @click="choose()" type="checkbox" id="check" ref="btn" />
      我已阅读并同意
      <router-link to="/xieyi" tag="a">《中通网络服务平台用户协议》</router-link>
    </div>
    <div>
      <el-button type="primary" :disabled="choose1">注册</el-button>
      <!-- <button class="btn" @click="reg()" :class="btn?'btn2':'btn1'">注册</button> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      disabled: false,
      time: 5,
      btntxt: "发送验证码",
      it: true,
      psw: true,
      btn: false,
      choose1: true
    };
  },

  mounted() {

  },
  methods: {
    // 验证手机号
    try1() {
      let number = this.$refs.inpp1.value;
      var reg = /^1[3456789]\d{9}$/;

      if (reg.test(number)) {
        this.it = true;
      } else if (!reg.test(number)) {
        this.it = !this.it;
      }
    },
    // 验证密码
    try2() {
      // 密码验证
      let password = this.$refs.inpp3.value;
      // console.log(password);
      var reg = /^.{6,}$/;
      if (reg.test(password)) {
        this.psw = true;
      } else if (!reg.test(password)) {
        this.psw = !this.psw;
      }
    },

    sendcode() {
      this.time = 59;
      this.timer();
    },
    //发送手机验证码倒计时
    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = this.time + "秒";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "发送验证码";
        this.disabled = false;
      }
    },
    // 手机验证码
    ask() {
      let val = { validType: 1, mobile: this.$refs.inpp1.value };
      console.log(val);
      axios
        .post("http://smsclient.sinocall.com/validate/code/get.json", val)
        .then(res => {
          this.sendcode();
        });
    },
    choose() {
      this.choose1 = !this.choose1;
    },
    reg() {
      let val = {
        userName: this.$refs.inpp1.value,
        password: this.$refs.inpp3.value,
        code: this.$refs.inpp2.value,
        invCode: this.$refs.inpp4.value
      };
      // console.log(val);
      axios.post("http://smsclient.sinocall.com/user/register.json", val, {
          withCredentials: true
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style>
.reg {
  position: absolute;
  /* top: 299px; */
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
.reg > div > input {
  border: none;
  border-bottom: 1px solid gainsboro;
  width: 70vw;
  height: 7vh;
  margin-top: 20px;
}
.btn1 {
  width: 41vw;
  height: 6vh;
  border: none;
  margin-top: 10px;
  background-color: gainsboro;
  color: white;
  border-radius: 20px;
}
.btn2 {
  width: 41vw;
  height: 6vh;
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
  height: 70px;
  border-bottom: 1px solid gray;
  /* text-align: center; */
  align-items: center;
}
.sendcode {
  position: absolute;
  top: 366px;
  left: 207px;
  font-size: 12px;
}
.reg > .number > .blue {
  border-bottom: 1px solid gainsboro;
}
.reg > .number > .red {
  border-bottom: 1px solid red;
}
.number {
  position: relative;
}
.warn1 {
  position: absolute;
  top: 66px;
  font-size: 12px;
  color: red;
  left: 0;
  display: none;
}
.warn2 {
  position: absolute;
  top: 66px;
  font-size: 12px;
  color: red;
  left: 0;
  display: block;
}
#check {
  width: 5vw;
}
</style>
