<template>
  <div id="app">
    <el-backtop>
      <div class="iconfont icon-backtop"></div>
    </el-backtop>
    <router-view/>
    <copy-right></copy-right>
  </div>
</template>

<script>
import CopyRight from './components/CopyRight.vue'
export default {
  components:{
    CopyRight

  }
}
</script>
<style lang="less" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  background-color: #efefef;
  padding: 0;
  margin: 0;
  min-height: 3000px;
  .el-backtop {
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    .icon-backtop {
        height: 100%;
        width: 100%;
        font-size: 40px;
        text-align: center;
        line-height: 40px;
       
    }
  }
}

</style>
