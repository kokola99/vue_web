<template>
    <div>
        <el-container>
            <!--<span>新建项目</span>-->
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
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="活动名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="完成时限">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                                                style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="是否可见">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="活动性质">
                            <el-checkbox-group v-model="form.type">
                                <el-checkbox label="工作" name="type"></el-checkbox>
                                <el-checkbox label="活动" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="项目简介">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
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
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
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