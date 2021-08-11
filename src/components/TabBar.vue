<template>
  <div class="tabBar">
    <div class="tabBarAbso">
      <div class="toLogin" @click="toLogin">登陆</div>
      <el-avatar size="medium" :src="circleUrl"></el-avatar>
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
  top: -48px;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 99;
  align-items: center;
  // background-color: @themeColor;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  .toLogin {
    margin: 0 20px 0 15px;
    cursor: pointer;
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