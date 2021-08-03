<template>
  <div id="app">
    <el-backtop>
      <div class="iconfont icon-backtop"></div>
    </el-backtop>
    <router-view />
    <copy-right></copy-right>
  </div>
</template>

<script>
import CopyRight from "./components/CopyRight.vue";
export default {
  components: {
    CopyRight,
  },
  created() {
    //在页面加载时读取localStorage里的状态信息  (vuex)
    localStorage.getItem("userMsg") &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem("userMsg"))
        )
      );
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("userMsg", JSON.stringify(this.$store.state));
    });
  },
};
</script>
<style lang="less" >
#app {
  width: 100%;
  min-height: 3000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  background-color: #efefef;
  padding: 0;
  margin: 0;
  .el-backtop {
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    .icon-backtop {
      height: 100%;
      width: 100%;
      color: #69c37b;
      font-size: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
