<template>
  <div class="article">
    <div class="title"><a href="">个人博客：personal-blog</a></div>
    <div class="classify">
      <span class="text">分类：</span>
      <el-tag>项目</el-tag>
      <el-tag>Java</el-tag>
      <el-tag>JavaScript</el-tag>
    </div>
    <div class="indtroduce">个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue个人博客前端部分技术栈有HTML，CSS，JavaScript，Vue
    </div>
    <div class="message">
        <div class="upTime">时间：2021-7-27</div>
        <div class="visit">访问量：999</div>
        <div class="comment"><div>评论</div></div>
        <div class="readAll"><div>阅读全文</div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.article {
  position: relative;
  width: 94%;
  height: 230px;
  margin: 10px auto;
  background-color: #fff;
  border: 1px #f0f0f0 solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .title {
    width: 90%;
    padding: 6px 0 10px 0;
    margin-left: 10px;
    border-bottom: #eee 1px solid;
    a {
      text-decoration: none;
      color: rgb(71, 61, 61);
      font-size: 23px;
      font-family: "PingFang-SC-Medium";
      font-weight: bold;
    }
    a:hover {
        color: #69c37b;
    }
  }
  .classify {
    margin: 10px 0 0 10px;
    .text {
      font-size: 14px;
      color: #999999;
    }
    .el-tag {
      height: 24px;
      line-height: 24px;
      margin-left: 8px;
      color: #69c37b;
    }
    .el-tag:first-child {
      margin-left: 0;
    }
  }
  .indtroduce {
    max-height: 72px;
    margin: 10px 10px 0 10px;
    padding: 6px 0;
    background-color: #f8f8f8;
    // 多行文本
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 14px;
    word-wrap:break-word;
    // 缩进
    text-indent: 20px;
    // 行间距
    line-height: 24px;
  }
  .message {
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    // background-color: #f0f0f0;
    .upTime {
        margin-left: 10px;
        line-height: 50px;
        font-size: 14px;
        color: #999999;
    }
    .visit {
        margin-left: 15px;
        line-height: 50px;
        font-size: 14px;
        color: #999999;
    }
    .readAll {
        position: absolute;/* 相对于父元素的position:absolute定位了 */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        right: 2px;
        bottom: 1px;
        height: 100%;
        border-radius: 2px;
        background-color: #69c37b;
        cursor: pointer;
         transition: all 0.2s linear;
        div {
            color: #fff;
            font-size: 14px;
        }
    }
    .readAll:hover {
         transition: all 0.2s linear;
        background-color: rgb(230, 41, 82);
    }
    .comment {
        position: absolute;/* 相对于父元素的position:absolute定位了 */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        right: 76px;
        bottom: 1px;
        height: 100%;
        border-radius: 2px;
        background-color: #69c37b;
        cursor: pointer;
         transition: all 0.2s linear;
        div {
            color: #fff;
            font-size: 14px;
        }
    }
    .comment:hover {
         transition: all 0.2s linear;
        background-color: rgb(230, 41, 82);
    }
  }
}
</style>