<template>
<div>
 <el-container>
   <el-header height="100px">
     <img src="@/assets/logo.png" :width='144' height="100">
     <el-button type="info" @click="logout">退出登录</el-button>
   </el-header>
   <el-divider></el-divider>
   <el-container >
     <el-aside width="300px">
         <el-button class="left_menu" type="text" icon="el-icon-back"></el-button>
         <br>
         <el-button class="left_menu" type="text" >基本信息</el-button>
         <br>
         <el-button class="left_menu" type="text" >我的团队</el-button>
         <br>
         <el-button class="left_menu" type="text" >小组任务</el-button>
         <br>
         <el-button class="left_menu" type="text" >项目进度</el-button>
         <br>
         <el-button class="left_menu" type="text" >周报/月报</el-button>
         <br>
         <el-button class="left_menu" type="text" >小组公告</el-button>
         <br>
         <el-button class="left_menu" type="text" >小组投票</el-button>
         <br>
     </el-aside>
     <el-main>
        <el-form ref="form" :model="form">
            <el-form-item label="项目名称:">
                <el-input v-model="form.name" class="proname"></el-input>
            </el-form-item>
            <el-form-item label="项目时限:">
                <el-col class="deadline">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                </el-col>
                <el-col class="line">-</el-col>
                <el-col class="deadline"> 
                    <el-time-picker placeholder="选择时间" v-model="form.date2"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="项目简介:">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item width="500px">
                <el-button type="primary" class="exit_b" @click="exit">删除项目</el-button>
            </el-form-item>
        </el-form>
     </el-main>
   </el-container>
 </el-container>
</div>
</template>

<script>
    export default {
    data() {
      return {
        form: {
          name: '',
          date1: '',
          date2: '',
          delivery: false,
          desc: ''
        }
      }
    },
    methods: {
      exit() {
        this.$confirm('你确定要删除这个项目吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
<style>
  .el-header{
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #5061CB;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 70px;
    height: 800px;
  }
  
  .el-main {
    background-color: #FFFFFF;
    color: #333;
    line-height: 20px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
  }
 .el-form-item__label {
    text-align: left;
    float: left;
    width:80px;
    font-size: 16px;
    color: #000000;
    line-height: 30px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    }
 .el-textarea__inner {
    display: block;
    resize:none;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 340px;
    height: 200px;
    font-size: inherit;
    color: #606266;
    background-color: #FFF;
    border: 1px solid #DCDFE6;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
 }
 .el-textarea /*项目简介框*/
 {
    position: relative;
    display: inline-block;
    width: 400px;
    vertical-align: bottom;
    font-size: 14px;
}
</style>

<style>
.left_menu/*左侧button*/
{
  float:left;
  background-color:#5061CB;
  color:#FFFFFF;
  border-style:none;
  font-size:20px;
}
.line/*日期时间之间的横线*/
{
    width: 80px;
    padding-left: 10px;
}
.exit_b/*删除项目按钮*/
{
   margin-left: 25px;
}
</style>
<style scoped>
form /*表单*/
{
    display: block;
    margin-top: 80px;
    margin-left: 60px;
    height: 500px;
    width:550px;
    padding-top:60px;
    padding-left:30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    } 
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 110px;
}
  .proname/*项目名称input框的属性*/
  {
      width: 300px;
  }
</style>
<style scoped>
.deadline /*日期时间col*/
{
    width:135px;
    padding-left: 35px;
}
</style>
<style scoped>
.el-input--prefix .el-input__inner /*时间日期输入框*/
{
    padding-left: 30px;
    width:80px
  }
</style>