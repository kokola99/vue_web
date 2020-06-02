<template>
    <div>
        <el-container>
            <!--<span>我创建的项目</span>-->
            <el-header height="100px">
                <img src="@/assets/logo.png" :width='144' height="100">
                <el-button type="info" @click="logout">wzt 注销</el-button>
            </el-header>

            <el-container>
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
                        <el-breadcrumb-item :to="{ path: '/' }">我创建的项目</el-breadcrumb-item>
                    </el-breadcrumb>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>项目名称</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                                    </div>
                                    <div v-for="o in 1" :key="o" class="text item">
                                        {{'项目详情' }}
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>项目名称</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                                    </div>
                                    <div v-for="o in 1" :key="o" class="text item">
                                        {{'项目详情' }}
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>项目名称</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                                    </div>
                                    <div v-for="o in 1" :key="o" class="text item">
                                        {{'项目详情' }}
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    var log = 1;
    export default {
        username: "李四",
        data() {

        },
        methods:
            {
                logout() {
                    log = 0;
                    if (log == 0)
                        this.$alert('您已注销登录！', 'Logout', {
                            callback: action => {
                                this.$message({
                                    type: 'info',
                                    message: `action: ${action}`
                                });
                            }
                        });
                },
            }
    }
</script>

<style>
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
<<<<<<< HEAD
    
=======
>>>>>>> 5c64f468d5f06e15ccb89560918102670d634f8b
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }

    .el-header, .el-footer {
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
        background-color: #E9EEF3;
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
        background-color: #5061CB;
        color: #FFFFFF;
        border-style: none;
        font-size: 20px;
    }

    .el-breadcrumb {
        font-size: 20px;
    }

</style>