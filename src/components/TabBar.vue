<template>
  <div class="tabBar">
    <div class="tabBarAbso">
      <span class="title">hh的博客</span>
      <el-dropdown class="login">
        <span class="el-dropdown-link">
          <!-- <el-avatar size="medium" :src="circleUrl"></el-avatar> -->
          <div class="avatar" :class="userAvatar"></div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toLogin" v-if="isShowLogin">登录</el-dropdown-item>
          <el-dropdown-item v-if="isShowLogout" @click.native="loginOut">退出</el-dropdown-item>
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
        userAvatar:'el-icon-user',
        isShowLogin:true,
      isShowLogout:false
      
    };
  },
  mounted(){
    this.$store.commit('cookie/getToken')
    const token = this.$store.state.cookie.token
    if( token && token != 0){
      this.isShowLogout = true
      this.isShowLogin = false
      this.userAvatar = 'el-icon-user-solid'
    }
  },
  methods: {
    toLogin(){
      console.log('login');
      this.$router.push("login");
    },
    loginOut(){
      this.$store.commit('cookie/clearToken')
      this.isShowLogout = false
      this.isShowLogin = true
      this.userAvatar = 'el-icon-user'
      console.log('Loginout~');
    }
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
    .el-dropdown-link {
      width: 35px;
        height: 35px;
      .avatar {
        font-size: 25px;
      }
    }
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