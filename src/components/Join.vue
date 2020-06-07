<!--本页面包含：我加入项目，加入成功）-->
<template>
  <div>
    <el-container>
      <el-header height="100px">
        <img src="@/assets/logo.png" :width="144" height="100" />
        <el-button type="info" @click="logout">注销</el-button>
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
            >进行中项目</el-button
          >
          <br />
          <el-button class="left_menu" type="text" icon="el-icon-finished"
            >已完成项目</el-button
          >
          <br />
          <el-button class="left_menu" type="text" icon="el-icon-user-solid"
            >个人中心</el-button
          >
          <br />
        </el-aside>

        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >全部项目</el-breadcrumb-item
            >
            <el-breadcrumb-item :to="{ path: '/' }"
              >我加入的项目</el-breadcrumb-item
            >
            <el-breadcrumb-item :to="{ path: '/' }"
              >加入项目</el-breadcrumb-item
            >
          </el-breadcrumb>
          <br />
          <el-main id="subcard">
            <br />
            <el-form
              :model="numberValidateForm"
              hide-required-asterisk
              ref="numberValidateForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="项目编号："
                prop="proj_no"
                :rules="[
                  { required: true, message: '项目编号不能为空' },
                  { type: 'number', message: '项目编号必须为数字值' }
                ]"
              >
                <el-input
                  type="text"
                  maxlength="10"
                  show-word-limit
                  v-model.number="numberValidateForm.proj_no"
                  placeholder="请输入项目的数字编号"
                  autocomplete="off"
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button-group style="position:relative; left:-45px">
                  <el-button
                    type="primary"
                    @click="submitForm('numberValidateForm')"
                    >加入项目</el-button
                  >
                  <el-button @click="resetForm('numberValidateForm')"
                    >重置</el-button
                  >
                </el-button-group>
              </el-form-item>
            </el-form>
            <br />
          </el-main>

          <el-dialog
            style="margin: auto;width:1000px"
            title="加入项目成功"
            :visible.sync="dialogVisible"
            width="60%"
            :before-close="handleClose"
          >
            <span>项目编号：截至时间：</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">完成</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >查看项目</el-button
              >
            </span>
          </el-dialog>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
var log = 1;
var joinok = true;
export default {
  username: "李四",
  data() {
    return {
      dialogVisible: false,
      numberValidateForm: {
        proj_no: ""
      }
    };
  },
  methods: {
    logout() {
      log = 0;
      if (log == 0)
        this.$alert("您已注销登录！", "Logout", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        });
    },
    //提交加入项目表单，成功则弹出对话框
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (joinok) {
            //alert('submit!');
            this.dialogVisible = true;
          } else {
            alert("join failed!");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  height: 1000px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100px;
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

#subcard {
  width: 480px;
  background-color: rgb(255, 255, 255);
  margin: auto;
}
</style>
