<template>
  <div class="comment">
    <div class="comment-title">发表评论</div>
    <div class="comment-input">
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 6 }"
        placeholder="请输入评论内容"
        v-model="textarea"
      >
      </el-input>
      <div class="button">
        <el-button @click="commentArticle">提交</el-button>
      </div>
    </div>
    <div class="comment-list">
      <p>共{{ commentNum }}条评论</p>
      <div class="noComment" v-if="showNoComment">
        现在还没有人评论，快来评论吧！
      </div>
      <ul class="comment-ul">
        <li class="comment-li" v-for="(item,index) in commentInfo" :key="index">
          <div class="user-comment">
            <div class="avatar">
              <el-avatar size="small" :src="item.avatarUrl"></el-avatar>
            </div>
            <span class="user-name">{{item.userName}}：</span>
            <span class="content">
              {{item.content}}
              <span class="reply-time">{{item.replyTime}}</span>
            <span class="reply">回复</span>
            </span>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:{
    userId:{
      type:Number,
      default(){
        return ''
      }
    },
    comments:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      textarea: "",
      commentNum: 0,
      showNoComment: false,
      commentInfo:[
        {
          avatarUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          userName:"游客",
          content:"这个水母真好看~这个水母真好看呀真好看~~",
          replyTime:"1天前"
        },
        {
          avatarUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          userName:"游客",
          content:"这个水母真丑，丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~丑的一批~~",
          replyTime:"1天前"
        },
        {
          avatarUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          userName:"游客",
          content:"这个水母真不错，真不错，真不错，真不错，针不戳针不戳针不戳针不戳针不戳针不戳针不戳针不戳针不戳~~",
          replyTime:"1天前"
        }
      ]
    };
  },
  mounted(){
    console.log(this.comments);
  },
  methods: {
    commentArticle() {
    this.$store.commit('cookie/getToken')
      console.log(this.textarea);
      let token = this.$store.state.cookie.token
      // post 请求不行
      console.log(token);
      axios({
        url:'/api/Blob/CommentBlob',
        method:'get',
        params:{
          ToUid:this.userId,
          blobid:this.$route.params.id,
          content:this.textarea,
          token:token
        }
      }).then(res => {
        console.log(res);
      })
    },
  },
};
</script>

<style lang="less" scoped>
.comment {
  width: 100%;
  min-height: 300px;
  margin-top: 20px;
  box-sizing: border-box;
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
    .noComment {
      color: #eee;
    }
    .comment-ul {
      padding-inline-start: 10px;
      .comment-li{
        list-style-type:none;
        padding: 10px 0;
        border-bottom: #eee 1px solid;
        &:nth-last-child(1){
          border: none;
        }
        .avatar {
          width: 28px;
          height: 28px;
        }
        .user-comment{
          display: flex;
          // align-items: center;
          .user-name{
            // 强制不换行，文本不会换行，文本会在在同一行上继续，直到遇到 br 标签为止。
            white-space: nowrap;
            padding-top: 4px;
            padding-left: 5px;
            font-size: 14px;
            color: #555666;
          }
          .content{
            padding-top: 4px;
            color: #222226;
            font-size: 14px;
            .reply-time {
            white-space: nowrap;
            padding-left: 5px;
            font-size: 13px;
            color: #6b6b6b;
          }
          .reply {
            white-space: nowrap;
            padding-left: 5px;
            font-size: 14px;
            color: #5893c2;
            cursor: pointer;
          }
          }
          
        }
      }
    }
     }
}
</style>