<template>
  <div class="home">
    <div class="top">
      <el-button type="info" plain @click="back">返回</el-button>
      <el-input placeholder="请输入标题" v-model="title" clearable></el-input>
      <el-button type="success" plain @click="save">保存</el-button>
      <el-button type="success" plain @click="publish">发布</el-button>
    </div>
    <div class="Tinymce_box">
      <tinymce v-model="content" :height="500" />
      <div class="editor-content">
        <h3>预览效果：</h3>
        <div v-if="content" v-html="content" />
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

  data() {
    return {
      content: "",
      title: "",
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    save() {
      let data = new FormData();
      // if(document.querySelector("input[type=file]").files[0]){
      //   data.append("files", document.querySelector("input[type=file]").files[0]);
      // }
      data.append("content", this.content);
      data.append("title", this.title);
      var options = {
        url: `http://www.hhsunset.top/Blob/DraftUpdate?token=${this.$store.state.cookie.token}`,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };

      //send request
      axios(options)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "保存成功!",
            });
            this.$router.push('personalHome')
          } else {
            this.$message.error("发布失败!");
          }
          // this.$router.push('personalHome')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    publish() {
      console.log('1');
      let data = new FormData();
     if(document.querySelector("input[type=file]").files[0]){
        data.append("files",document.querySelector("input[type=file]").files[0]);
      }
      // <img class="wscnph" src="${item}" >
      let txtContent= this.content.replace(/<+img class="wscnph" src=".*?"+\s\/>/g ,"<img class='wscnph' src='$[]'/>")
      console.log(txtContent);
      data.append("content", txtContent);
      data.append("title", this.title);
      /* 
      因为params是添加到url的请求字符串中的，用于get请求。 
      而data是添加到请求体（body）中的， 用于post请求。
       */
      var options = {
        url: `http://www.hhsunset.top/Blob/BlobUpdate?token=${this.$store.state.cookie.token}`,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };

      //send request
      axios(options)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "发布成功!",
            });
            this.$router.push("personalHome");
          } else {
            this.$message.error("发布失败!");
          }
        })
        .catch((error) => {
          console.log(error);
        });

        this.$store.commit('article/clearFileList')
    },
    upDist() {
      let data = new FormData();
      data.append("token", this.$store.state.cookie.token);
      data.append("file", document.querySelector("input[type=file]").files[0]);
      var options = {
        url: `http://www.hhsunset.top/NodeJsDeployment`,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };
      axios(options)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
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
      &:first-child {
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