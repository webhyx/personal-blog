<template>
  <div class="tabBar">
    
    <div class="toLogin" @click="toLogin" >登陆</div>
    <el-avatar size="medium" :src="circleUrl"></el-avatar>
    <el-input
      placeholder="请输入搜索内容"
      prefix-icon="el-icon-search"
      v-model="searchInput"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      searchInput: "",
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
.tabBar {
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 99;
  align-items: center;
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