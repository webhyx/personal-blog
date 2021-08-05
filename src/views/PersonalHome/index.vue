<template>
  <div class="personal-home">
    <div class="topLine">
      <div class="state">个人中心</div>
      <div class="personal">
        <div class="create" @click="toEdit"><div class="text">创作</div></div>
        <svg class="icon-font">
          <use xlink:href="#icon-guanliyuan"></use>
        </svg>
        <div class="logout" @click="logout">退出</div>
        <div class="message">消息</div>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="left-content">
          <div class="myDraft">我的草稿</div>
        <article-item v-for="(item,index) in draftContent" :key="index" :articleItem="item" :blogID="item.blobid" :blogTitle="item.title" :blogContent="item.content"  :showDelete="true" :showEdit="true" ></article-item>
      </div>
      </el-col>
      <el-col :span="12">
        <div class="right-content">
          <div class="myBlog">我的博客</div>
        <article-item v-for="(item,index) in blogContent" :key="index" :articleItem="item" :blogID="item.blobid" :blogTitle="item.title" :blogContent="item.content"  :showDelete="true" :showEdit="true" :isDraftorBlog="false"></article-item>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleItem from '../Home/components/Article.vue'
import axios from "axios";
export default {
  components: {
    ArticleItem
  },
  data(){
    return {
      draftContent:[],
      blogContent: [],
    }
  },
  mounted(){
    // 这里没有
    this.$store.commit("cookie/getToken");
    const draftUrl = `http://www.hhsunset.top/Blob/DraftGet?token=${this.$store.state.cookie.token}`
    this.gerUserArticle(draftUrl,'draft')

    const blogUrl = `http://www.hhsunset.top/Blob/GetMyBlob?token=${this.$store.state.cookie.token}`
    this.gerUserArticle(blogUrl,'blog')
  },
  methods: {
    logout() {
      this.$store.commit('cookie/clearToken')
      this.$router.replace('home')
    },
    gerUserArticle(url,contentType='draft') {
      this.$store.commit("cookie/getToken");
      axios({
        url:url,
        method:"get",
      }).then(res => {
        console.log(res);
        let articleArr = res.data.result
        if(contentType == 'draft') {
          this.draftContent = articleArr.map( item => {
          let brief = this.trimHtml(item.content)
          item.brief = brief
          return item
        })
        } else {
          this.blogContent = articleArr.map( item => {
          let brief = this.trimHtml(item.content)
          item.brief = brief
          return item
        })
        }
      }).catch(err => {
        console.log(err);
      })
    },
    trimHtml(str){
    str = str.replace(/(\n)/g, "");
    str = str.replace(/(\t)/g, "");
    str = str.replace(/(\r)/g, "");
    str = str.replace(/\s*/g, "");
    str = str.replace(/&nbsp/g,"")
    /* -----将<xxx>去掉，</xxx>改为一个空格 */
    // [^>] 匹配除了>的所有
    str = str.replace(/<[^/]*>/g,"");
    // .*贪婪匹配：会尽可能匹配多的   .*?非贪婪匹配：只匹配一个
    str = str.replace(/<\/.*?>/g," ")
    return str;
},
toEdit() {
  this.$router.push('edit')
}
  }
};
</script>

<style lang="less" scoped>
.personal-home {
  width: 90%;
  min-height: 1000px;
  margin: 0 auto;
  padding-top: 48px;
  .topLine {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    // line-height: 48px;
    margin: 0 auto;
    padding: 0 24px;
    .personal {
      display: flex;
      width: 160px;
      position: relative;
      align-items: center;
      justify-content: space-between;
      .create {
        position: absolute;
        display: flex;
        right: 150px;
        top: 50%;
        width: 100px;
        height: 36px;
        justify-content: center;
        align-items: center;
        transform: translate(-50%,-50%);
        background-color: #69c37b;
        border-radius: 9px;
        cursor: pointer;
        .text {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          font-family: "微软雅黑";
        }
      }
      .icon-font {
        width: 32px;
        height: 32px;
      }
      .logout,.message {
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
  .left-content {
    .myDraft {
      margin-top: 10px;
      text-align: center;
      font-size: 18px;
      font-family: "微软雅黑";
      color: #69c37b;
    }
  }
  .right-content {
    .myBlog {
      margin-top: 10px;
      text-align: center;
      font-size: 18px;
      font-family: "微软雅黑";
      color: #69c37b;
    }
  }
}
</style>