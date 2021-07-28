<template>
  <div class="copyRight">
    <div class="beautify"></div>
    <div class="beautify1"></div>
    <div class="text">
      <div class="copyright">Copyright ©　www.xxxooo.com　All Right Reserved</div>
      <div class="record">
        备案号: <a href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备2021100640号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .copyRight {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 250px;
    background-color: #373D41;;
    color: #73777a;
    .beautify {
      position: absolute;
      width: 100%;
      top: 0;
      height: 30px;
      background-color: #69c37b;
    }
    .beautify1 {
      position: absolute;
      width: 100%;
      top: 20px;
      height: 20px;
      /* 渐变色 */
      background: linear-gradient(to top, #373D41 0%,#69c37b 100%);
    }
      .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .copyright {
      margin-bottom: 4px;
    }
    a {
      color: #73777a;
    }
  }
  }

</style>