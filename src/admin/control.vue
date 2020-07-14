<template>
  <div class="control">
    <div class="control1">
      <el-button type="success" plain size="small" style="width:70px">控制台</el-button>
    </div>
    <!-- 短信彩信国际 -->
    <div class="control2">
      <div class="content2">
         <router-link to="/home/control/data" tag="span">
           <el-tag>今日数据</el-tag>
        </router-link>
        <router-link to="/home/control/number" tag="span">
          <el-tag >短信</el-tag>
        </router-link>
        <router-link to="/home/control/caixin" tag="span">
          <el-tag >彩信</el-tag>
        </router-link>
        <router-link to="/home/control/inter" tag="span">
          <el-tag>国际</el-tag>
        </router-link>
        <router-view></router-view>

      </div>

    </div>
    <div  style="width:100px;height:110px;background-color:red;">

      </div>
  </div>
</template>
<script>
// import Box from './components/box'
export default {
  data() {
    return {
      name: ""
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.full-img {
  width: 100%;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
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
.control {
  display: flex;
  flex-direction: column;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
}
.control1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid gainsboro;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
#user {
  font-size: 12px;
  width: 85px;
  height: 30px;
  border: 1px solid red;
}
.control2 {
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>
