<template>
  <div class="tabBarSticky">
      <div class="searchPart">
          <el-input placeholder="请输入搜索内容" v-model="searchInput">
        <el-button slot="append" icon="el-icon-search" @click="searchBlog"></el-button>
      </el-input>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchInput: "",
        }
    },
    methods:{
        searchBlog() {
      this.$emit("searchBlog", this.searchInput);
    },
    }
}
</script>

<style lang="less" scoped>
.tabBarSticky {
  position: -webkit-sticky;
  position: sticky;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 48px;
  margin-top: 48px;
  top: 0;
  z-index: 999;
  .searchPart {
      width: 200px;
  }
}
</style>