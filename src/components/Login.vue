<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <h3>
        <pre><center>登录</center></pre>
      </h3>
      <el-row type="flex" justify="center">
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginrules"
          status-icon
          label-width="80px"
        >
          <el-form-item prop="account" label="账号">
            <el-input
              prefix-icon="iconfont iconyonghu"
              v-model="loginForm.account"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input
              prefix-icon="iconfont iconmima"
              v-model="loginForm.password"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-button type="primary" icon="el-icon-upload" @click="doLogin()"
            >登 录</el-button
          >
          <el-form-item>
            <router-link to="/register"> 注册账号 </router-link>
            <span>|</span>
            <router-link to="/"> 忘记密码 </router-link>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "axios"; //通过axios进行http请求
import qs from "qs";
export default {
  name: "login",
  data() {
    return {
      //登陆表单的数据绑定对象
      loginForm: {
        account: "test@yeah.net",
        password: ""
      },
      loginrules: {
        //验证账号是否合法
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    doLogin() {
      const that = this;
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return;
        const { errorCode: res } = that.$http
          .post("/user/login", qs.stringify(this.loginForm))
          .then(res => {
            if (res.data.errorCode == 0) {
              this.$message({
                showClose: true,
                message: "登录成功!",
                type: "success"
              });
              this.$router.push("/personal");
              window.sessionStorage.setItem("account", this.loginForm.account);
            } else return this.$message.error("登录失败");
          });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 740px;
  background: url("../assets/images/bg1.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/images/login_bg.png") no-repeat;
  background-size: cover;
  width: 410px;
  height: 340px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 5px;
  line-height: 40px;
}
#password {
  margin-bottom: 10px;
}
h3 {
  color: #000000b8;
  font-size: 24px;
  margin-top: 37px;
} /*登陆注册标题，后续可以换成其他文字*/
span {
  color: #bfbfbf; /*注册账号和忘记密码中间的竖线*/
}
a {
  text-decoration: none;
  color: #3962d6;
  font-size: 13px; /*注册账号找回密码*/
}
a:hover {
  color: #fa174f; /*鼠标悬浮在链接内容上时的颜色*/
}
form {
  display: block;
  margin-top: 10px;
}
.el-button--primary {
  color: #fff;
  background-color: #3962d6;
  border-color: #3962d6;
  margin-top: 13px;
  margin-bottom: 8px;
  text-align: center;
}
.el-form-item {
  margin-bottom: 15px;
}
.el-button {
  width: 100%;
  margin-left: 2px;
}
</style>
<style>
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 0px;
  border: 1px solid #dcdfe6;
  font-size: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
} /*输入框属性*/
.el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
