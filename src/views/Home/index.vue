<template>
  <div class="home-main">
    <home></home>

  </div>
</template>

<script>
import Home from "./components/Home"
export default {
  components: {
    Home
  }
}
</script>

<style lang="less" scoped>
  .home-main {
    width: 90%;
    
    margin: 0 auto;
  }
</style>