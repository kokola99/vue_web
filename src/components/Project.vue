<!--本页面只为临时页面，具体任务数据要和后端连接起来才可实现，页面内数据为临时编造数据，存放在data_tableList中，后续和sql接口相连接-->
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
        <p>全部项目</p>
        <div class="button">
        <el-button class="add" type="primary" icon="el-icon-plus" >添加</el-button>
        <el-button class="my" type="primary">我的任务</el-button>
        </div>
        <el-table :data="tableList"  height="680px" style="width: 100%">
            <el-table-column property="number" label="任务编号" width="100" height="50" backgroung></el-table-column>
            <el-table-column property="describe" label="任务描述" width="300" align="center"></el-table-column>
            <el-table-column property="name" label="负责人"></el-table-column>
            <el-table-column property="condition" label="状态" align="left"></el-table-column>
            <el-table-column property="up_time" label="更新时间"></el-table-column>
            <el-table-column property="deadline" label="截止时间"></el-table-column>
        </el-table>
        <div class="paginationClass">
            <el-pagination
              background      
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5,10,15]"
              :page-size="pagesize"
              layout="total,jumper,prev, pager, next,sizes"
              :total="files_count"
            ></el-pagination>
        </div>
     </el-main>
   </el-container>
 </el-container>
</div>

</template>

<script>
  var log = 1;
  export default
  {
      username: "李四",
      data(){
          return {
                loading:true,
                currentPage:1,
                pagesize:10,
                files_count:5,
                fileList:[],
                searchFile:"",
          tableList: [{
      "number": "01",
      "describe": "这是任务1",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, {
      "number": "02",
      "describe": "这是任务2",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "03",
      "describe": "这是任务3",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "04",
      "describe": "这是任务4",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "05",
      "describe": "这是任务5",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "06",
      "describe": "这是任务6",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "07",
      "describe": "这是任务7",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "08",
      "describe": "这是任务8",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "09",
      "describe": "这是任务9",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "10",
      "describe": "这是任务10",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "11",
      "describe": "这是任务11",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "12",
      "describe": "这是任务12",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "13",
      "describe": "这是任务13",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "14",
      "describe": "这是任务14",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "15",
      "describe": "这是任务15",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "16",
      "describe": "这是任务16",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "16",
      "describe": "这是任务16",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "17",
      "describe": "这是任务17",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
    }, { 
      "number": "18",
      "describe": "这是任务18",
      "name": "张三",
      "condition": "已完成",
      "up_time": "2020-04-22",
      "deadline": "2020-05-15",
          }]
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
            //分页 初始页currentPage、初始每页数据数pagesize和数据testpage--->控制每页几条
    handleSizeChange:function(size){
        this.pagesize = size;
        this.hadleGetFilesListApi();
        console.log(this.pagesize)
        console.log(this.hadleGetFilesListApi())
    },
    // 控制页面的切换
    handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
        // console.log(currentPage)
        this.hadleGetFilesListApi();
    },
    //对所有数据进行分页处理 发送请求
    hadleGetFilesListApi() {
      selectphoneAll(this.currentPage, this.pagesize)
        .then(res => {
          console.log("111"+res);
          this.tableData = res.data.filesInfo;
          console.log("3333"+this.tableData);
          this.files_count = res.data.files_count;
          this.tableDateAll = res.data.filesInfo;
          this.loading = false;
        })
        .catch({});
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
  p {
    text-align: left;
  }/*全部项目四个字*/
  .el-table {
    padding: 5px 0px;
  }
  .button {
    text-align: left;
    margin-bottom: 5px;
  }/*main里两个button的位置样式*/
  .add {
    margin-left: 0px;
    margin-right: 50px;
  }/*button添加的样式*/
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
.el-pagination {
  margin-top: 20px;
}
</style>