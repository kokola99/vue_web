<template>
<div>
 <el-container>

   <el-header height="100px">
     <img src="@/assets/logo.png":width='144' height="100">
     <el-button type="info" @click="logout">wzt  注销</el-button>
   </el-header>

   <el-container >
     <el-aside width="300px">
         <el-button class="left_menu" type="text" icon="el-icon-back"></el-button>
         <br>
         <el-button class="left_menu" type="text" icon="el-icon-loading">进行的项目</el-button>
         <br>
         <el-button class="left_menu" type="text" icon="el-icon-finished">已完成项目</el-button>
         <br>
         <el-button class="left_menu" type="text" icon="el-icon-user-solid">个人中心</el-button>
         <br>
     </el-aside>
     <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">全部项目</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">我加入的项目</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">加入项目</el-breadcrumb-item>
        </el-breadcrumb>
     </el-main>
   </el-container>
 </el-container>
</div>

</template>
