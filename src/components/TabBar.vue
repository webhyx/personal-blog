<template>
  <div class="tabBar">
    <div class="tabBarAbso">
      <span class="title">hh的博客</span>
      <el-dropdown class="login">
        <span class="el-dropdown-link">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="toLogin">登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      
    };
  },
  methods: {
    toLogin() {
      this.$router.push("login");
    },
  },
};
</script>

<style lang="less" scoped>

.tabBarAbso {
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  top: -49px;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 99;
  align-items: center;
  // background-color: @themeColor;
  background-color: #69c37b;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  .title {
    position: absolute;
    left: 0;
    top: 10px;
    font-size: 24px;
    color: #fff;
    margin-left: 16px;
  }
  .login {
    margin-right: 10px;
  }
  
  .el-avatar {
    margin-left: 15px;
  }
  .el-input {
    width: 200px;
    margin-left: 15px;
  }
}
</style>