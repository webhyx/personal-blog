<template>
  <div class="article">
    <div class="title" @click="toArticle">
      <span href="">{{ articleItem.title }}</span>
    </div>
    <div class="classify">
      <span class="text">分类：</span>
      <el-tag>项目</el-tag>
      <el-tag>Java</el-tag>
      <el-tag>JavaScript</el-tag>
    </div>
    <div class="indtroduce">
      {{ articleItem.brief }}
    </div>
    <div class="message">
      <div class="upTime">时间：2021-7-27</div>
      <div class="visit">访问量：{{ articleItem.visited }}</div>
      <div class="delete" v-if="showDelete" @click="confirmDelete">
        <div>删除</div>
      </div>
      <div class="edit" v-if="showEdit" @click="editArticle"><div>编辑</div></div>
      <div class="comment" v-if="showComment"><div>评论</div></div>
      <div class="readAll" v-if="showReadAll" @click="toArticle">
        <div>阅读全文</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    articleItem: {
      type: Object,
      default() {
        return {};
      },
    },
    // 博客ID
    blogID: {
      type: Number,
      default() {
        return 0;
      },
    },
    blogTitle:{
      type:String,
      default(){
        return ''
      }
    },
    blogContent:{
      type:String,
      default(){
        return ''
      }
    },
    showDelete: {
      type: Boolean,
      dafault: false,
    },
    showEdit: {
      type: Boolean,
      dafault: false,
    },
    showComment: {
      type: Boolean,
      dafault: false,
    },
    showReadAll: {
      type: Boolean,
      dafault() {
        return false;
      },
    },
    isDraftorBlog:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {};
  },
  mounted() {
    //博客id传到vuex中
    this.$store.commit('article/setBlogID',this.blogID)
  },
  methods: {
    toArticle() {
      this.$router.push("article/"+this.blogID);
    },
    editArticle(){
        this.$store.commit('article/setBlogTitle',this.blogTitle)
        this.$store.commit('article/setBlogContent',this.blogContent)
      if(this.isDraftorBlog) {
        
        this.$router.push('editDraft/'+this.blogID)
      } else {
        this.$router.push('editBlog/'+this.blogID)
      }
      
    },
    confirmDelete() {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log("delete");
          this.$store.commit("cookie/getToken");
          const deleteUrl = this.isDraftorBlog ? "http://www.hhsunset.top/Blob/DraftDelete": "http://www.hhsunset.top/Blob/BlobDelete"
          axios({
            url: deleteUrl,
            method: "get",
            params: {
              blobid: this.blogID,
              token: this.$store.state.cookie.token,
            },
          })
            .then((res) => {
              console.log('删除接口：');
              console.log(res);
              if (res.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
              } else {
                this.$message.error("删除失败!");
              }
              // 刷新页面 重新渲染文章列表
              this.$router.go(0);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  position: relative;
  width: 95%;
  height: 230px;
  background-color: #fff;
  border: 1px #f0f0f0 solid;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    transform: scale(1.01); // 放大1.01倍
    transition: all 0.3s; // 设置加载时间
  }
  .title {
    width: 90%;
    padding: 6px 0 10px 0;
    margin-left: 10px;
    border-bottom: #eee 1px solid;
    span {
      text-decoration: none;
      cursor: pointer;
      color: rgb(71, 61, 61);
      font-size: 23px;
      font-family: "微软雅黑";
      font-weight: bold;
    }
    span:hover {
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
      cursor: pointer;
      &:hover {
        background-color: #69c37b;
        color: #fff;
      }
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
    word-wrap: break-word;
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
    .delete {
      position: absolute; /* 相对于父元素的position:absolute定位了 */
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      right: 76px;
      bottom: 1px;
      height: 100%;
      border-radius: 2px;
      background-color: rgb(252, 0, 0);
      cursor: pointer;
      transition: all 0.2s linear;
      div {
        color: #fff;
        font-size: 14px;
      }
    }
    .delete:hover {
      transition: all 0.2s linear;
      background-color: rgb(139, 3, 3);
    }
    .edit {
      position: absolute; /* 相对于父元素的position:absolute定位了 */
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      right: 2px;
      bottom: 1px;
      height: 100%;
      border-radius: 2px;
      background-color: #699fc3;
      cursor: pointer;
      transition: all 0.2s linear;
      div {
        color: #fff;
        font-size: 14px;
      }
    }
    .edit:hover {
      transition: all 0.2s linear;
      background-color: rgb(44, 41, 230);
    }
    .readAll {
      position: absolute; /* 相对于父元素的position:absolute定位了 */
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
      position: absolute; /* 相对于父元素的position:absolute定位了 */
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