<template>
  <div class="copyRight">
    <div class="text">
      <div class="copyright">Copyright © &nbsp www.xxxooo.com &nbsp All Right Reserved</div>
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