<template>
  <div class="home-main">
      <el-row :gutter="20">
    <el-col :span="18">
      <div class="grid-content  left-content">
        <article-item></article-item>
        <article-item></article-item>
        <article-item></article-item>
        <article-item></article-item>
      </div>
    </el-col>
        <el-col :span="6">
      <div class="grid-content  right-content">
        <div class="navigation">
          <introduction></introduction>
        </div>
        <div class="hotTag">
          <hot-tag></hot-tag>
        </div>
      </div>
    </el-col>
  </el-row>
  <div class="pagination">
      <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination>
  </div>
  </div>
</template>

<script>
import ArticleItem from './components/Article.vue'
import Introduction from '@/components/Navigation.vue'
import HotTag from '@/components/HotTag.vue'
export default {
  components: {
    Introduction,
    ArticleItem,
    HotTag
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
  .right-content {
    .navigation {
      width: 100%;
      height: 500px;
    }
    .hotTag {
      width: 100%;
      height: 300px;
      margin-top: 30px;
      background-color: #fff;
      border-radius: 5px;
    }
  }
  .left-content {
    width: 100%;
    // min-height: 2000px;
    border-radius: 5px;
  }
  .left-content>:first-child {
    margin-top: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-top: 10px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
 .pagination {
   display: flex;
   justify-content: center;
   margin-top: 35px;
   .el-pagination {
     /deep/.active {
       background-color: #69c37b !important;
     }
}
}
  }
</style>