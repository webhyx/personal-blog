<template>
  <div class="home">
    <div class="top">
      <el-button type="info" plain @click="back">返回</el-button>
      <el-input placeholder="请输入标题" v-model="title" clearable></el-input>
      <el-button type="success" plain @click="save">保存草稿</el-button>
    </div>
    <div class="Tinymce_box">
      <tinymce v-model="content" :height="500" />
      <div class="editor-content">
        <h3>预览效果：</h3>
        <div  v-if="content" v-html="content" />
        <!-- {{content}} -->
      </div>
    </div>
    <!-- <el-button @click="upDist">上传dist</el-button> -->
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import axios from "axios";
export default {
  name: "Home",
  components: { Tinymce },
//   props: {
//     title:{
//       type: String,
//       default(){
//         return ""
//       }
//     },
//     content: {
//       type: String,
//       default() {
//         return "";
//       },
//     },
//   },
  data() {
    return {
    title: "",
      content: "",
    };
  },
 created(){
    // this.$router.go(0)
    window.scrollTo(0,0);
  },
  mounted(){
      this.title = this.$store.state.article.blogTitle
      this.content = this.$store.state.article.blogContent

  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    save() {
        let data = new FormData();
      // if(document.querySelector("input[type=file]").files[0]){
      //   data.append("files", document.querySelector("input[type=file]").files[0]);
      // }
      this.$store.commit("cookie/getToken")
      data.append("blobid",this.$route.params.id)
      data.append("content", this.content);
      data.append("files",[])
      data.append("title", this.title);
      data.append("token",this.$store.state.cookie.token)
      const options ={
          url:`/api/Blob/DraftChange`,
          method:'post',
          data:data
      }
      axios(options).then(res => {
          console.log(res);
           if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "保存成功!",
            });
          } else {
            this.$message.error("保存失败!");
          }
      }).catch(err => {
          console.log(err);
      })
    },
  },
};
</script>
<style lang="less"  scoped>
.home {
  .top {
    display: flex;
    padding: 10px 10px 0;
    .el-button {
      margin-left: 10px;
      // background: #69c37b;
      // color: #fff;
      &:first-child{
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
  .Tinymce_box {
  display: flex;
  margin: 10px;
}
.editor-content {
  margin-left: 30px;
  flex: 1;
  background-color: #fff;
  border: 2px dashed #eee;
  padding: 0 20px;
  h3 {
    color: #808080;
    text-align: center;
  }
}
}
</style>