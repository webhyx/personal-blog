<template>
  <div class="home">
      <div class="Tinymce_box">
      <tinymce v-model="content" :height="500" @upLoadFormData="getUploadForm" />
      <div v-if="content" class="editor-content">
        <h3>预览效果：</h3>
        <div v-html="content" />
      </div>
    </div>
    <input type="file" class="file" id="mulFile" value="please choose multipart files" multiple>
    <el-button @click="upLoad">上传</el-button>
  </div>
</template>

<script>

import Tinymce from "@/components/Tinymce";
import axios from 'axios';
export default {
  name: 'Home',
  components: { Tinymce },
  data() {
    return {
      content: "",
      formDataArr:[],
      arrtest:[]
    };
  },
  methods:{
    getUploadForm(res){
      console.log(res);
      this.formDataArr.push(res)
    },
    upLoad(){
      this.$store.commit('cookie/getToken')
      let userToken = this.$store.state.cookie.token
      console.log(userToken);
      //  var formData = new window.FormData()
      //               var files= document.querySelector('input[type=file]').files;
      //               for (let index = 0; index < files.length; index++) {
      //                   formData.append('files',files[index])
      //               }
      // let arr = []
      // arr.push(formData)
      // console.log(formData);
      axios({
        method:"get",
        url:`http://121.40.125.179/Blob/DraftUpdate?token=${userToken}`,
        params:{
          files:this.formDataArr,
          title:'xxx',
          content:'<div>yes</div>'
        }
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss"  scoped>
.Tinymce_box {
  display: flex;
}
.editor-content {
  margin-left: 30px;
  flex:1;
  border: 2px dashed #eee;
  padding:0 20px;
  h3 {
  color: #808080;
  text-align: center;
}
}

</style>