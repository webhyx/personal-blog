<template>
  <div class="head" >
    <el-dropdown @command="handleCommand">
      <el-avatar size="medium" :src="circleUrl" @click="test" ></el-avatar>
      <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="toLogin">登录</el-dropdown-item>
    <el-dropdown-item command="toMy">我的</el-dropdown-item>
  </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
  methods:{
    test(){
      console.log('test');
    },
    handleCommand(command){
      console.log('command');
      if(command == "toLogin") {
        console.log('to');
      this.$router.push('login')
      } else if(command == "toMy") {
        console.log('toMy');
      }

    }
  }
}
</script>

<style lang="less" scoped>
  // .head {
    //  position: absolute;
    //   right: -60px;
    //   top: 13px;
    // .pic {
    //   width: 35px;
    //   height: 35px;
    //   border-radius: 50%;
    //   background-color: #69c37b;
    // }
  // }
</style>