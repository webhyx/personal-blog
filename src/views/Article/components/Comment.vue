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
        <li
          class="comment-li"
          v-for="(item, index) in commentInfo"
          :key="index"
        >
          <div class="user-comment">
            <div class="avatar">
              <el-avatar size="medium" :src="item.avatarUrl"></el-avatar>
            </div>
            <span class="user-name" v-if="userId === item.fromUid">作者:　</span>
            <span class="user-name" v-else>游客{{ item.fromUid }}：</span>
            <span class="content">
              {{ item.content }}
              <span class="reply-time">{{ item.replyTime }}</span>
              <!-- No v-for的数据 data-的内容只能找data中定义的，:data-id="item.fromUid" 是undefined -->
              <!-- 解决方法：直接传item作为参数，在方法中处理item对象 -->
              <span class="reply" @click="commentUserComment(item)">回复</span>
            </span>
          </div>
          <div class="user-comment-second" v-if="item.sonMessages && Number(item.sonMessages) != 0">
           <div class="sonMessage" v-for="(sonItems,sonIndex) in item.sonMessages" :key="sonIndex" >
              <div class="avatar">
              <el-avatar size="small" :src="item.avatarUrl"></el-avatar>
            </div>
            <span class="user-name" v-if="userId === sonItems.fromUid">作者:　</span>
            <span class="user-name" v-else>游客{{sonItems.fromUid}}:　</span>
            <span class="content">
              {{sonItems.content}}
              <span class="reply-time">{{sonItems.time}}</span>
              <span class="reply" @click="commentUserSecondComment(sonItems)">回复</span>
            </span>
           </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  props: {
    blobId: {
      type: Number,
      default() {
        return 0;
      },
    },
    userId: {
      type: Number,
      default() {
        return 0;
      },
    },
    comments: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      textarea: "",
      commentNum: 0,
      showNoComment: false,
      commentInfo: [
      ],
      commentSecondInfo:[]
    };
  },
  mounted() {
    // 这里console.log props的数据还没有过来，应该是网络数据请求的原因，组件已经创建，但是数据还没到父传子的程度。
    // 解决方法：父组件里的子组件标签用v-if="blboid != 0"
    console.log(this.comments);
    this.comments.map((item) => {
      this.commentInfo.push({
        avatarUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        fromUid:item.fromUid,
        id:item.id,
        content: item.content,
        replyTime: item.time,
        sonMessages:item.sonmessages
      });
      // this.commentSecondInfo.push(
      //   item.sonmessages
      // );
    });
    // 二级评论单独作为个数组：区分 二级评论 和评论二级评论的二级评论
    console.log(this.commentInfo);
  },
  methods: {
    commentArticle() {
      this.$store.commit("cookie/getToken");
      console.log(this.textarea);
      let token = this.$store.state.cookie.token;
      // post 请求不行
      console.log(token);
      let params = {
        ToUid:this.userId,
          blobid:this.$route.params.id,
          content:this.textarea,
          token:token
      }
      api.get('/Blob/CommentBlob',params).then(res => {
        console.log(res);
      });
    },
    commentUserComment(e){
      const id = e.id
      const fromUid = e.fromUid
      this.$store.commit("cookie/getToken");
      let token = this.$store.state.cookie.token;
      // post 请求不行
      let params = {
          ToUid: fromUid, //一级评论的userid
          blobid: this.$route.params.id, 
          content: '我是一个er级评论-1',
          messageid:fromUid, // 一级评论的id 或者评论二级评论时：二级评论的messageid
          token: token,
        }
      api.get('/Blob/submitCommentBlob',params).then((res) => {
        console.log(res);
      });
    },
commentUserSecondComment(e){
      const fromUid = e.fromUid
      const messageId = e.messageid
      let content = this.content + '[@3]'
      this.$store.commit("cookie/getToken");
      let token = this.$store.state.cookie.token;
      // post 请求不行
      let params = {
          ToUid: fromUid, //一级评论的userid
          blobid: this.$route.params.id, 
          content: '我是一个三级评论[@3]',
          messageid:messageId, // 一级评论的id 或者评论二级评论时：二级评论的messageid
          token: token,
        }
      api.get('/Blob/submitCommentBlob',params).then((res) => {
        console.log(res);
      });
    }
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
      .comment-li {
        list-style-type: none;
        padding: 10px 0;
        border-bottom: #eee 1px solid;
        &:nth-last-child(1) {
          border: none;
        }
        .avatar {
          width: 28px;
          height: 28px;
        }
        .user-comment {
          display: flex;
          // align-items: center;
          .user-name {
            // 强制不换行，文本不会换行，文本会在在同一行上继续，直到遇到 br 标签为止。
            white-space: nowrap;
            padding-top: 8px;
            padding-left: 14px;
            font-size: 14px;
            color: #555666;
          }
          .content {
            padding-top: 8px;
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
        .user-comment-second {

           
          // align-items: center;
          
          .sonMessage {
            display: flex;
            margin: 12px 0 0 42px;
              .user-name {
            // 强制不换行，文本不会换行，文本会在在同一行上继续，直到遇到 br 标签为止。
            white-space: nowrap;
            padding-top: 6px;
            padding-left: 5px;
            font-size: 13px;
            color: #555666;
          }
          .content {
            padding-top: 6px;
            color: #222226;
            font-size: 13px;
            .reply-time {
              white-space: nowrap;
              padding-left: 6px;
              font-size: 12px;
              color: #6b6b6b;
            }
            .reply {
              white-space: nowrap;
              padding-left: 5px;
              font-size: 12px;
              color: #5893c2;
              cursor: pointer;
            }
          }
            
          }
        
        }
      }
    }
  }
}
</style>