<template>
  <div class="main">
    <tab-bar @searchBlog="searchBlog"></tab-bar>
    <tab-bar-sticky></tab-bar-sticky>
    <div class="home-main">
      <carousel></carousel>
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="grid-content left-content">
            <article-item
              v-for="(item, index) in content"
              :key="index"
              :articleItem="item"
              :showComment="true"
              :showReadAll="true"
              :blogID="item.blobid"
            ></article-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right-content">
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
          :total="100"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import tabBarSticky from "./components/TabBarSticky.vue"
import Carousel from "@/components/Carousel";
import ArticleItem from "./components/Article.vue";
import Introduction from "@/components/Navigation.vue";
import HotTag from "@/components/HotTag.vue";

// import api from '@/api'

export default {
  components: {
    TabBar,
    tabBarSticky,
    Carousel,
    Introduction,
    ArticleItem,
    HotTag,
  },
  data() {
    return {
      content: [],
    };
  },
  mounted() {
    this.gerUserArticle(0, 4);
  },
  methods: {
    // 获取部分博客
    gerUserArticle(start, end) {
      this.$store.commit("cookie/getToken");
      this.$get('/Blob/getPartPopularBlobDesc',{
        start:start,
        end:end
      })
        .then((res) => {
          console.log(res);
          let articleArr = res.data.result;
          this.content = articleArr.map((item) => {
            let brief = this.trimHtml(item.content);
            item.brief = brief;
            return item;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 去html格式
    trimHtml(str) {
      str = str.replace(/(\n)/g, "");
      str = str.replace(/(\t)/g, "");
      str = str.replace(/(\r)/g, "");
      str = str.replace(/\s*/g, "");
      str = str.replace(/&nbsp/g, "");
      /* -----将<xxx>去掉，</xxx>改为一个空格 */
      // [^>] 匹配除了>的所有
      str = str.replace(/<[^/]*>/g, "");
      // .*贪婪匹配：会尽可能匹配多的   .*?非贪婪匹配：只匹配一个
      str = str.replace(/<\/.*?>/g, " ");
      // 去掉单标签如<img src="xxx" />
      str = str.replace(/<.*?\/>/g, "");
      return str;
    },
    // 换页
    handleCurrentChange(val) {
      console.log(`当前第${val}页`);
      let realVal = (val - 1) * 4;
      this.gerUserArticle(realVal, realVal + 4);
      window.scrollTo(0, 0);
    },
    searchBlog(content) {
      console.log(content);
    },
  },
};
</script>

<style lang="less" scoped>

.home-main {
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding-top: 540px;
  .carousel {
    position: absolute;
    // width: 480px;
    width: 105%;
    top: 0;
    left: -2.5%;
  }
  .head {
    position: absolute;
    right: -60px;
    top: 200px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .left-content {
      width: 100%;
      // min-height: 2000px;
      border-radius: 5px;
    }
    .left-content > :first-child {
      margin-top: 0;
    }
    .right-content {
      .navigation {
        width: 100%;
        height: 500px;
      }
      .hotTag {
        margin-top: 20px;
      }
    }
    /deep/ .el-col {
      border-radius: 4px;
      margin-top: 10px;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
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