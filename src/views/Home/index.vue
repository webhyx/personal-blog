<template>
  <div class="home-main">
      <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content  left-content">
        <div class="personal">
          <introduction></introduction>
        </div>
        <div class="navigation"></div>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content  right-content">
        <article-item></article-item>
        <article-item></article-item>
        <article-item></article-item>
        <article-item></article-item>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue'
import ArticleItem from './components/Article.vue'
export default {
  components: {
    Introduction,
    ArticleItem
  }
}
</script>

<style lang="less" scoped>
  .home-main {
    width: 90%;
    margin: 0 auto;
    .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .left-content {
    .personal {
      width: 100%;
      height: 500px;
      background-color: #fff;
      border-radius: 5px;
    }
    .navigation {
      width: 100%;
      height: 1000px;
      margin-top: 30px;
      background-color: #fff;
      border-radius: 5px;
    }
  }
  .right-content {
    width: 100%;
    min-height: 2000px;
    border-radius: 5px;
  }
  .right-content>:first-child {
    margin-top: 10px;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
  }
</style>