<template>
<div id="test">
        <el-upload
  class="upload-demo"
  :action=token
  :on-success="handleSuccess"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<span>{{fileList}}</span>

</div>
</template>
<script>
import axios from "axios";
  export default {
    data() {
      return {
        token :`http://121.40.125.179/Blob/ImgUpdate?token=${this.$store.state.cookie.token}`,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleSuccess(response, file, fileList){
          console.log(response);
          console.log(file);
          console.log(fileList);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    mounted(){
        this.$store.commit('cookie/getToken')
        const token = `http://121.40.125.179/Blob/ImgUpdate?token=${this.$store.state.cookie.token}`
        console.log(token);
        axios({
        method: "post",
        url: "http://121.40.125.179/Blob/ImgUpdate?token=eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImFkYzdiMmNiNWYyZWUwYTQ5YTg1MzJmNDZmNTRjMDFmIiwibmFtZSI6Imh1YW5neXV4dWFuIiwiaWQiOjQsImV4cCI6MTYzNDg3MzEzNSwiaWF0IjoxNjI2MjMzMTM1fQ.9Qz9yCszXnsSV_83pa5WYTP0FFSPy3L7N9gbxd_E2b4",
      }).then(res => {
          console.log(res);
      })
    }
  }
</script>