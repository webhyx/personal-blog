<template>
  <div class="tabBarSticky">
     <div class="recommendList">
        <div
          class="linkItem"
          v-for="(item, index) in recommendLinks"
          :key="index"
        >
          <a :href="item.tolink">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use></svg
          ></a>
        </div>
      </div>
    <div class="searchPart">
      <el-input placeholder="请输入搜索内容" v-model="searchInput">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="searchBlog"
          
        ></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      recommendLinks: [
        {
          name: "vue",
          icon: "#icon-vue",
          tolink: "https://cn.vuejs.org/",
        },
        {
          name: "github",
          icon: "#icon-github",
          tolink: "https://github.com/",
        },
        {
          name: "gitee",
          icon: "#icon-gitee",
          tolink: "https://gitee.com/",
        },
        {
          name: "echart",
          icon: "#icon-echart",
          tolink: "https://echarts.apache.org/zh/index.html",
        },
        {
          name: "element-ui",
          icon: "#icon-elment",
          tolink: "https://element.eleme.cn/#/zh-CN",
        },
      ],
    };
  },
  methods: {
    searchBlog() {
      this.$emit("searchBlog", this.searchInput);
    },
  },
};
</script>

<style lang="less" scoped>
.tabBarSticky {
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 48px;
  margin-top: 48px;
  top: 0;
  z-index: 999;
  .recommendList {
    display: flex;
    margin-left: 10px;
    .icon {
  width: 1.8em;
  height: 1.8em;
  vertical-align: -0.15em;
  margin: 0 2px;
  fill: currentColor;
  overflow: hidden;
}
  }
  .searchPart {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 200px;
  }
}
</style>