<template>
  <div class="comment">
    <div class="comment-title">发表评论</div>
    <div class="comment-input">
      <el-input
        type="textarea"
        :autosize="{ minRows:5, maxRows:6 }"
        placeholder="请输入评论内容"
        v-model="textarea"
      >
      </el-input>
      <div class="button">
          <el-button>提交</el-button>
      </div>
    </div>
    <div class="comment-list">
        <p>共{{commentNum}}条评论</p>
        <div class="noComment">现在还没有人评论，快来评论吧！</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            textarea:'',
            commentNum:0
        }
    }
};
</script>

<style lang="less" scoped>
.comment {
  width: 100%;
  min-height: 300px;
  margin-top: 20px;
  background-color: #fff;
  border: 1px #f0f0f0 solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 12px 24px;
  .comment-title {
    padding-bottom: 12px;
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 600;
    border-bottom: 1px dashed #69c37b;
  }
  .comment-input {
      margin-top: 18px;
      min-height: 200px;
      .button {
          margin-top: 8px;
          text-align: right;
      }
  }
  .comment-list {
      min-height: 100px;
      padding: 1px 2px;
      font-size: 12px;
    font-family: "微软雅黑";
    border: #eee 1px solid;
    
  }
}
</style>