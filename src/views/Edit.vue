<template>
  <div class="home">
    <el-button @click="dispublish">发布</el-button>
    <div class="Tinymce_box">
      <tinymce v-model="content" :height="500" />
      <div v-if="content" class="editor-content">
        <h3>预览效果：</h3>
        <!-- <div v-html="content" /> -->
        <div>
          {{content}}
        </div>
      </div>
    </div>
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
      title: "文章标题",
    };
  },
  methods: {
    dispublish() {
      let data = new FormData();
      data.append("files", document.querySelector("input[type=file]").files[0]);
      data.append("content", this.content);
      data.append("title", this.title);
      var options = {
        url: `http://121.40.125.179/Blob/DraftUpdate?token=${this.$store.state.cookie.token}`,
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss"  scoped>
.Tinymce_box {
  display: flex;
}
.editor-content {
  margin-left: 30px;
  flex: 1;
  border: 2px dashed #eee;
  padding: 0 20px;
  h3 {
    color: #808080;
    text-align: center;
  }
}
</style>