<!--本页面包含：未接收任务，接收任务，查看详情（任务要求）-->
<template>
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
       <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/#/project' }">我的团队</el-breadcrumb-item>
        </el-breadcrumb>

        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      </el-table>
      <el-button @click="viewtask(scope.row)">邀请他人</el-button>
     </el-main>
   </el-container>
 </el-container>
 

</template>

<script>
  var log = 1;
   export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王梓廷',
            address: '海棠10'
          }, {
            date: '2016-05-04',
            name: '张永乐',
            address: '海棠10'
          }, {
            date: '2016-05-01',
            name: '孙黄青',
            address: '海棠6'
          }, {
            date: '2016-05-03',
            name: '刘震',
            address: '海棠10'
          }]
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
  .el-table {
    padding: 5px 0px;
  }
</style>

<style>
.left_menu
{
  float:left;
  background-color:#5061CB;
  color:#FFFFFF;
  border-style:none;
  font-size:20px;
}

</style>
