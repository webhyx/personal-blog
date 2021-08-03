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
          <div class="article-content">
            <div v-html="content" />
          </div>
        </div>
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
import axios from 'axios'
import HotTag from "@/components/HotTag.vue";
import HotRecommend from "@/components/HotRecommend.vue";
export default {
  components: {
    HotTag,
    HotRecommend,
  },
  props: {
    // content: {
    //   type: String,
    //   default() {
    //     return "<h2> Article NOT Found </h2>";
    //   },
    // },
  },
  mounted(){
    this.blogID = this.$store.state.article.articleID
    console.log(this.blogID);
    axios({
            url: "http://www.hhsunset.top/Blob/GetBlobByBlobId",
            method: "get",
            params: {
              blobid:this.blogID,
            },
          }).then((res) => {
            console.log(res);
            this.title = res.data.result.title
            this.content = res.data.result.content
          })
  },
  data() {
    return {
      blogID:0,
      title: "标题",
      content: "<h3> Article NOT Found </h3>",
    };
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