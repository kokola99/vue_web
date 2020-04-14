<template>
  <div class="login clearfix">
    <div class="login-wrap">
      <h3><center>注册</center></h3>
      <el-row type="flex" justify="center">
        
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          
          <el-form-item prop="applicantPhone" label="手机号">
            <el-input prefix-icon="iconfont iconshouji" v-model="user.applicantPhone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="用户名">
            <el-input prefix-icon="iconfont iconyonghu1" v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input prefix-icon="iconfont iconyouxiang" v-model="user.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input prefix-icon="iconfont iconmimacopy" v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="确认密码">
            <el-input prefix-icon="iconfont iconmimacopy" v-model="user.password" show-password placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon @click="doRegister()">注册</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
    };
  },
  created() {
    // console.log($);
    // console.log("1111");
  },
  methods: {
    doRegister() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (this.user.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.user.email)) {
          this.$message.error("请输入有效的邮箱！");
        } else if (!this.user.password) {
          this.$message.error("请输入密码！");
          return;
        } else {
          this.$router.push({ path: "/" }); //无需向后台提交数据，方便前台调试
          axios
            .post("/register/", {
              name: this.user.username,
              email: this.user.email,
              password: this.user.password
            })
            .then(res => {
              // console.log("输出response.data", res.data);
              // console.log("输出response.data.status", res.data.status);
              if (res.data.status === 200) {
                this.$router.push({ path: "/" });
              } else {
                alert("您输入的用户名已存在！");
              }
            });
        }
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 840px;
  background: url("../assets/images/bg1.png") no-repeat;
  background-size: cover;
  overflow: hidden;
  margin-bottom: px;
}
.login-wrap {
  background: url("../assets/images/login_bg2.png") no-repeat;
  background-size: cover;
  width: 400px;
  height: 500px;
  margin: 210px auto;
  overflow: hidden;
  padding-top: 3px;
  line-height: 0px;
}
 
h3 {
  color: #030303b8;
  font-size: 24px;
  margin-top: 50px;
}
form {
    display: block;
    margin-top: 35px;
}
.el-button--primary {
    color: #FFF;
    background-color: #3962d6;
    border-color: #3962d6;
    text-align:center;
}
.el-button {
  width: 170%;
  margin-left: -105px;
}
</style>
