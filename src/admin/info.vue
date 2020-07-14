<template>
  <div class="info">
    <div v-for="(item,index) in userInfo" :key="index">
      <ul style="list-style:none">
        <li>
          <a-avatar style="backgroundColor:#87d068" icon="user" />
        </li>
        <li>
          <!-- 弹框修改资料 -->
          <Button type="primary" @click="modal =false">修改资料</Button>
          <div :class="modal?'modal':'modal2'" style="z-index:999">
            <div class="modal-content">
              <p style="padding-top:3vh">
                昵称:
                <input type="text" placeholder="请输入昵称" v-model="inp" />
              </p>
              <p>
                邮箱
                <input type="text" placeholder="请输入邮箱" v-model="inp2" @blur="email" />
                <span :class="email1?'inp1':'inp2'">邮箱格式错误</span>
              </p>
              <p>
                <el-button type="primary" style="float:left" @click="modal =true">取消</el-button>
                <el-button @click="getupdata" type="primary" style="float:right;margin-right:3vh">确定</el-button>
              </p>
            </div>
          </div>
        </li>
        <li>账号：{{item.userName}}</li>
        <li>昵称：{{item.nickname}}</li>
        <li>手机：{{item.userName}}重新绑定</li>
        <li>登录二次校验</li>
        <li>邮箱：</li>
      </ul>
      <div v-for="(sitem,sindex) in item.custList" :key="sindex">
        <ul style="list-style:none">
          <li>公司：{{sitem.custName}}</li>
          <li>证件号码：暂无数据</li>
          <li slot="error" class="image-slot">
            证件照片：
            <i class="el-icon-picture-outline"></i>
          </li>
          <li>认证状态：已认证</li>
          <li>证件时间：</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: [],
      company: [],
      modal: true,
      inp: "",
      inp2: "",
      email1: true
    };
  },
  created() {
    this.getuserInfo();
  },
  mounted() {},
  methods: {
    // 获取用户信息
    getuserInfo() {
      var token = localStorage.getItem("info");
      var token2 = JSON.parse(token).token;
      // console.log(token2);
      axios
        .post(
          "http://smsclient.sinocall.com/IMS/getImsOwnAndSub/api.json",
          {},
          {
            headers: {
              Authorization: token2
            }
          },
          {
            withCredentials: true
          }
        )
        .then(res => {
          console.log(res.data.result);
          var list = res.data.result;
          this.userInfo = list;
        });
    },
    // 正则验证邮箱
    email() {
      var inp2value = this.inp2;
      console.log(inp2value);
      var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (reg.test(inp2value)) {
        return true;
        // console.log(true)
      } else if (!reg.test(inp2value)) {
        this.email1 = !this.email1;
        // console.log(false)
        return false;
      }
    },
    // 用户信息修改资料
    getupdata() {
      // 判断验证邮箱的返回值是否为true,为true则执行提交信息操作
      if (this.email() == true) {
        var inpvalue = this.inp;
        var inp2value = this.inp2;
        // 获取用户id
        var id = localStorage.getItem("info");
        // console.log(id);
        var id2 = JSON.parse(id).info.id;
        // console.log(id2);
        // 获取token
        var token = localStorage.getItem("info");
        var token2 = JSON.parse(token).token;
        let val = { id: id2, nickName: this.inpvalue, email: this.inp2value };
        axios.post(
            "http://smsclient.sinocall.com/user/update.json",
            val,
            {
              // 根据后端接口需求，请求头需要携带token
              headers: {
                Authorization: token2
              }
            },
            {
              withCredentials: true
            }
          )
          .then(res => {
            console.log(res);
            if (res.data.message == "success") {
              this.modal = true;
              this.getuserInfo();
            }
          });
      }
    }
  }
  // 弹框修改资料
};
</script>
<style >
.info {
  width: 100%;
  background-color: #f4f7fe;
}
.info > div > ul > li {
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  /* margin-bottom: 10px; */
}
.info > div > div > ul > li {
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.el-message-box {
  width: 260px;
  font-size: 12px;
}
.el-message-box > input {
  height: 20px;
}
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
}
.modal2 {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
}
.modal-content {
  width: 80vw;
  height: 35vh;
  background-color: white;
  margin: auto;
  margin-top: 35vh;
}
.modal-content > p {
  margin: auto;
  margin-top: 5vh;
  margin-left: 5vw;
}
.modal-content > p > input {
  border: none;
  border: 1px solid gainsboro;
  width: 50vw;
  height: 5vh;
}

.inp1 {
  position: absolute;
  display: none;
}
.inp2 {
  position: absolute;
  display: block;
}
</style>
