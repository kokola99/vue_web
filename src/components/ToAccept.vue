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
          <el-breadcrumb-item :to="{ path: '/#/project' }">全部任务</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">我的任务</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <el-button-group>
            <el-button type="text">未接收任务</el-button>
            <el-button type="text">进行中任务</el-button>
            <el-button type="text">已完成任务</el-button>
        </el-button-group> 
        <el-table :data="tableList" stripe height="680px" style="width: 100%">
            <el-table-column property="number" label="任务编号" width="100" height="50" backgroung></el-table-column>
            <el-table-column property="describe" label="任务描述" width="200" align="center"></el-table-column>
            <el-table-column property="deadline" label="截止时间"></el-table-column>
            <el-table-column label="操作" align="center">
        <template slot-scope="scope">
        <el-button @click="viewtask(scope.row)">查看详情</el-button>
        <el-button @click="accepttask(scope.row)">接收</el-button>
        </template>
    </el-table-column>
        </el-table>

     </el-main>
   </el-container>
 </el-container>

</template>

<script>
  var log = 1;
  export default
  {
      username: "李四",
      data(){
          return {
                dialogVisible: false,
                loading:true,
                currentPage:1,
                pagesize:10,
                files_count:5,
                fileList:[],
                searchFile:"",
        form: {
          intro: '',
          leader: '',
          date: '',
          desc: ''
        },
          tableList: [{
      "number": "01",
      "describe": "这是任务1",
      "deadline": "2020-05-15",
      "detail": "这是任务1的详情要求",
    }, {
      "number": "02",
      "describe": "这是任务2",
      "deadline": "2020-05-15",
      "detail": "这是任务1的详情要求",
    }, { 
      "number": "03",
      "describe": "这是任务3",
      "deadline": "2020-05-15",
      "detail": "这是任务1的详情要求",
    },]
        }
      },
      /*mounted() {
            },
        和后端链接*/
        methods: 
        {
            logout() 
            {
                log = 0;
                if(log==0)
                this.$alert('确定退出登陆吗？', 'Logout', {
                    confirmButtonText: '确定',
                    callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                    }
                    });
            },
            viewtask(row) 
            {
                this.$alert(row.detail, '任务要求', {
                confirmButtonText: '确定' });
            },  
            accepttask(row)
            {
            this.$alert('<h2>任务接收成功！</h2>', '', {
            dangerouslyUseHTMLString: true,
            type:'success',
            center:true
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
