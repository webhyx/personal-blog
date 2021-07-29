<template>
  <div class="hot-tag">
      <div class="tag-title">
          热门标签
      </div>
      <div class="tag-list">
          <el-tag effect="plain" type="success">vue</el-tag>
          <el-tag effect="plain" type="success">css</el-tag>
          <el-tag effect="plain" type="success">JavaScript</el-tag>
          <el-tag effect="plain" type="success">Java</el-tag>
          <el-tag effect="plain" type="success">redis</el-tag>
          <el-tag effect="plain" type="success">数据库</el-tag>
          <el-tag effect="plain" type="success">Git</el-tag>
          <el-tag effect="plain" type="success">前端</el-tag>
          <el-tag effect="plain" type="success">后端</el-tag>
          <el-tag effect="plain" type="success">数据结构</el-tag>
          <el-tag effect="plain" type="success">算法</el-tag>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
     .hot-tag {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px #f0f0f0 solid;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    .tag-title {
      width: calc(100% - 48px);
      margin: 10px auto 0;
      padding-bottom: 15px;
      text-align: center;
      font-size: 20px;
      font-family: "微软雅黑";
      font-weight: 600;
      border-bottom: 1px dashed #69c37b;
    }
    .tag-list {
        padding: 15px;
        .el-tag {
            cursor: pointer;
            margin: 4px;
        }
    }
     }
</style>