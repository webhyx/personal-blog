<template>
  <div class="article">
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="left-content">
          <div class="title-part">
            <div class="title">{{ title }}</div>
            <div class="state">
              <div class="writer">
                <div class="icon iconfont icon-zuozhe"></div>
                <div class="name">张三</div>
              </div>
              <div class="dispub-time">
                <div class="icon iconfont icon-shijian"></div>
                <div class="time">2021-7-29</div>
              </div>
              <div class="view">
                <div class="icon iconfont icon-liulan-copy"></div>
                <div class="times">999次</div>
              </div>
            </div>
          </div>
          <div class="article-content" @click="handleHtml($event)">
            <div v-html="content"  />
          </div>
        </div>
          <comment :userId="userid" :comments="comments" :blobId="blobId" v-if="blobId != 0"></comment>
      </el-col>
      <el-col :span="6">
        <div class="right-content">
          <div class="hotTag">
            <hot-tag></hot-tag>
          </div>
          <div class="hotRecommend">
            <hot-recommend></hot-recommend>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api'
import HotTag from "@/components/HotTag.vue";
import HotRecommend from "@/components/HotRecommend.vue";
import Comment from './components/Comment.vue'
export default {
  components: {
    HotTag,
    HotRecommend,
    Comment
  },
  data() {
    return {
      blogID:0,
      userid:0,
      title: "标题",
      content: "<h3> Article NOT Found </h3>",
      imgPaths: [],
      comments:[],
      blobId:0
    };
  },
  created() {
    // this.$router.go(0)
    window.scrollTo(0, 0);

    this.blogID = this.$route.params.id;
    api.get('/Blob/GetBlobByBlobId',{blobid:this.blogID}).then((res) => {
      console.log(res);
      this.imgPaths = res.data.result.paths;
      this.title = res.data.result.title;
      this.content = res.data.result.content;
      this.userid = res.data.result.userid
      this.comments = res.data.result.comments
      this.blobId = res.data.result.blobid 
      this.showImg();
    });
  },
  mounted() {
    // getImgDom[0].attr("style","max-width:200px")
  },
  methods: {
    handleHtml($event){
　　　　console.log($event.target)
　　},
    showImg() {
      this.imgPaths = this.imgPaths.map((item) => {
        item = `/api${item}`;
        return item;
      });
      this.content = this.content.replace(/\$\[]/g, this.imgPaths[0]);
      // let getImgDom = document.getElementsByTagName("img")
      // let getImgDom = document.getElementsByClassName("wscnph");
      // getImgDom[0].style["max-width"] = "200px";
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  width: 90%;
  margin: 0 auto;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      border-radius: 4px;
      margin-top: 10px;
    }
    .left-content {
      width: 100%;
      background-color: #fff;
      min-height: 1000px;
      border-radius: 5px;
      border: 1px #f0f0f0 solid;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      .article-content {
        margin: 10px;
      }
      .title-part {
        .title {
          width: 100%;
          margin: 10px 0;
          text-align: center;
          font-size: 24px;
          font-family: "微软雅黑";
          font-weight: 500;
        }
        .state {
          display: flex;
          .writer {
            display: flex;
            margin-left: 12px;
            align-items: baseline;
            cursor: default;
            &:hover {
              .icon {
                color: #69c37b;
              }
              .name {
                color: #69c37b;
              }
            }
            .name {
              margin-left: 6px;
            }
          }
          .dispub-time {
            display: flex;
            margin-left: 12px;
            line-height: 23px;
            cursor: default;
            &:hover {
              .icon {
                color: #69c37b;
              }
              .time {
                color: #69c37b;
              }
            }

            .time {
              margin-left: 6px;
            }
          }
          .view {
            display: flex;
            margin-left: 12px;
            align-items: baseline;
            cursor: default;
            &:hover {
              .icon {
                color: #69c37b;
              }
              .times {
                color: #69c37b;
              }
            }

            .times {
              margin-left: 6px;
            }
          }
        }
      }
      .article-content {
        /* v-html的内容要样式穿透 */
       /deep/ .wscnph {
          width: 500px;
        }
      }
    }
    .right-content {
      .hotTag {
        width: 100%;
        // height: 225px;
        background-color: #fff;
        border-radius: 5px;
      }
      .hotRecommend {
        width: 100%;
        height: 500px;
        margin-top: 20px;
        background-color: #fff;
      }
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