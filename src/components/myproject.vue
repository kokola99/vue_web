<template>
  <div>
    <el-container>
      <el-header height="100px">
        <img src="@/assets/logo.png" :width="144" height="100" />
        <el-button type="info" @click="logout">wzt 注销</el-button>
      </el-header>

      <el-container>
        <el-aside width="300px">
          <el-button
            class="left_menu"
            type="text"
            icon="el-icon-back"
          ></el-button>
          <br />
          <el-button class="left_menu" type="text" icon="el-icon-loading"
            >进行的项目
          </el-button>
          <br />
          <el-button class="left_menu" type="text" icon="el-icon-finished"
            >已完成项目
          </el-button>
          <br />
          <el-button class="left_menu" type="text" icon="el-icon-user-solid"
            >个人中心
          </el-button>
          <br />
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >全部项目
            </el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <div style="margin: 20px 0">
            <el-button plain>我创建的项目</el-button>
            <el-button type="primary" plain>我加入的项目</el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
var log = 1;
export default {
  username: "李四",
  data() {},
  methods: {
    logout() {
      log = 0;
      if (log == 0)
        this.$alert("您已注销登录！", "Logout", {
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        });
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: rgb(255, 255, 255);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #5061cb;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 70px;
  height: 800px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

<style>
.left_menu {
  float: left;
  background-color: #5061cb;
  color: #ffffff;
  border-style: none;
  font-size: 20px;
}

.el-breadcrumb {
  font-size: 20px;
}
</style>
