<template>
  <div class="app">
      <el-container class="home-container">
        <el-header>
            <div class="app-side-logo">
              <img src="@/assets/logo.png"
                :width="isCollapse ? '110' : 150"
                height="110">
               <!--<span>项目管理系统</span>-->
            </div>
          <!-- 样例菜单 -->
         
          <el-menu
            :default-active="activeIndex1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="1">创建项目</el-menu-item>
            <el-submenu index="2">
                <template slot="title">加入小组</template>
                <el-menu-item index="2-1">小组1</el-menu-item>
                <el-menu-item index="2-2">小组2</el-menu-item>
                <el-menu-item index="2-3">小组3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">小组4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <!--<el-menu-item index="3" disabled></el-menu-item>-->
            <el-menu-item index="3"><a href="Join.vue" target="_blank">我的项目</a></el-menu-item>
        </el-menu>
        <el-button type="info" @click="logout">退出登录</el-button>
        </el-header>


        <!--主页面中main部分的结构-->
        <el-main>
            <!--主页面中间大图片-->
            <div class="demo-image__placeholder">
              <div class="block">
                <el-image :src="picture">
                <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
                </div>
                </el-image>
              </div>
            </div>
          <h2 align="center">在线高效项目管理</h2>
          
          <div class="demo-image__placeholder">
              <div class="block">
                <el-image :src="p2">
                <div slot="placeholder" class="image-slot">
                </div>
                </el-image>
              </div>
            </div>
            <h4 align="center">从每一个产品项目的开始到执行结束，project助你把控全程。</h4>
            <!--<div style="backgroundImage: 'url(' + img + ')' no-repeat left top;">-->
            <div class="rightullidiv">
                  <img src="../assets/main/111.png" alt="" class="rightulliimg">
                <div style="position:absolute;z-indent:-1;">
                  <span>现在就开始使用，开启高效工作！</span>
                </div>
            </div>
        </el-main>

        <!--尾部页眉处结构-->
        <el-footer>
            <div class="footer">
              <el-container>
                <el-row>
                  <el-col :span="4"><router-link to="">产品</router-link></el-col>
                  <el-col :span="4"><router-link to="">服务</router-link></el-col>
                  <el-col :span="4"><router-link to="">公司</router-link></el-col>
                  <el-col :span="4"><router-link to="">售前咨询</router-link></el-col>
                  <el-col :span="4"><router-link to="">意见反馈</router-link></el-col>
                  <el-col :span="4"><router-link to="">联系我们</router-link></el-col>
                  <el-col :span="24"><p class="copyright">Copyright © web.10版权所有 | webworker10</p></el-col>
                </el-row>
    
              </el-container>
            </div>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Container',
  name: 'Footer',
  data() {
    return {
      username: '',
      isCollapse: false,
      activeIndex: '1',
      picture: require('@/assets/main/555.png'),
      p2: require('@/assets/main/777.png'),
      /*img: require('@/assets/main/333.png')
      /*p3: require('@/assets/main/444.png'),*/
    };
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出登陆?', '提示', {})
        .then(() => {
          sessionStorage.removeItem('user');
          this.$router.push('/login');
        })
        .catch(() => { });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted: function () {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.username = user;
    }
  },
}
</script>

<style>
/*头部风格*/
.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-menu {
    margin-left: 0px;
    margin-right: 0px;
}
.el-menu-item {
    padding-left: 0px;
    padding-right: 100px;
    font-size: 15px;
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 0px;
}
.el-submenu {
    padding-right: 80px;
}
.el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #909399;
    padding-left: 20px;
    font-size: 15px;
}
element.style {
    border-bottom-color: transparent;
    padding-left: 0px;
    padding-right: 80px;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 3px solid #D43B37;
    color: #303133;
}
.el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
}
</style>
<style>
h4{
  color: #1919D7;
  font-weight: 350;
}
</style>


<style scoped>
.footer{
  width: 100%;
  height: 200px;
  background: #2237DE;
}
.footer .el-container{
  width: 1200px;
  margin: auto;
}
.footer .el-row {
  align-items: center;
  padding: 0 200px;
  padding-bottom: 15px;
  width: 100%;
  margin-top: 38px;
}
.footer .el-row a{
  color: #fff;
  font-size: 14px;
}
.footer .el-row .copyright{
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.footer .el-container{
  color: white;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: chartreuse;
}
.footer .el-row[data-v-18652670] {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 200px;
    padding-bottom: 15px;
    width: 100%;
    margin-top: 38px;
}
p {
  /*copyright*/
    display: block;
    margin-block-start: 2em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.footer .el-row[data-v-18652670][data-v-18652670] {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 200px;
    padding-bottom: 15px;
    width: 100%;
    margin-top: 45px;
}
.footer .el-container[data-v-18652670] {
    width: 1200px;
    height: 130px;
    margin: auto;
}
.footer .el-row a[data-v-18652670] {
    color: #fff;
    font-size: 15px;
    font-weight: 600;
}
</style>
<style scoped>
element.style {
    position: absolute;
    width: 120px;
    height: 100px;
    left: 400px;
}
.rightullidiv {
     width: 100%;
     height: 100%;
     background: #FFFFFF;
     display: flex;
     justify-content: center;
     align-items: center;
}
.rightulliimg {
  max-width: 100%;
  max-height: 100%;
}
span {
  font-size: 23px;
  color: #1919D7;
  font-weight: 500;
}
</style>