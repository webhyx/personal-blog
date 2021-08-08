<template>
  <div class="upload-container">
    <el-button
      :style="{ background: color, borderColor: color }"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click="clickUpload"
    >
      upload
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        ref="upload"
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        class="editor-slide-upload"
        :action="dataUpdate"
        list-type="picture-card"
        :auto-upload="false"
        :on-error="hanleFail"
      >
        <el-button size="small" type="primary"> Click upload </el-button>
      </el-upload>
      <el-button @click="dialogVisible = false"> Cancel </el-button>
      <el-button type="primary" @click="handleSubmit"> Confirm </el-button>
    </el-dialog>
  </div>
</template>

<script>
// import { getToken } from 'api/qiniu'

export default {
  name: "EditorSlideUpload",
  props: {
    color: {
      type: String,
      default: "#1890ff",
    },
  },
  data() {
    return {
      dialogVisible: false,
      dataUpdate: `http://121.40.125.179/Blob/ImgUpdate?token=${this.$store.state.cookie.token}`,
      imgUrlList: [],
      listObj: {},
      fileList: [],
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    clickUpload(){
      // fileList 存储的就是图片对象，要上传的信息
      this.fileList = []
      this.dialogVisible = true
    },
    handleSubmit() {
      const imgFiles = document.querySelector("input[type=file]").files;
      this.$store.commit('article/setFileList',imgFiles)
      for (let index = 0; index < imgFiles.length; index++) {
        const reader = new FileReader();
        reader.readAsDataURL(imgFiles[index]);
        reader.onload = () => {
          const _base64 = reader.result;
          // this.imgUrlList.push(_base64); //将_base64赋值给图片的src，实现图片预览
          // console.log("FileReader");
          // console.log(this.imgUrlList);
          this.$emit("successCBK", _base64);
        };
      }
      this.dialogVisible = false;
      // this.imgUrlList = []
      console.log(this.fileList);
      // this.fileList = []

    },
    hanleFail(err, file, fileList) {
      console.log("no");
      console.log(err);
      console.log(fileList);
    },
    handleSuccess(response, file, fileList) {
      console.log("yes");
      console.log(response);
      console.log(fileList);
      // const imgUrlRes = fileList.map((item) => {
      //   item = `http://121.40.125.179${item.response.result.msg}`;
      //   return item
      // });
      // this.imgUrlList = imgUrlRes;
    },
    handleRemove(file) {
      // const uid = file.uid
      // const objKeyArr = Object.keys(this.listObj)
      // for (let i = 0, len = objKeyArr.length; i < len; i++) {
      //   if (this.listObj[objKeyArr[i]].uid === uid) {
      //     delete this.listObj[objKeyArr[i]]
      //     return
      //   }
      // }
    },
    beforeUpload(file) {
      let types = ["image/jpeg", "image/gif", "image/bmp", "image/png"];
      // 判断图片类型 includes判断是否是数组中的某个元素
      const isImage = types.includes(file.type);
      // 图片大小
      const isLtSize = file.size / 1024 / 1024 < 5;

      if (!isImage) {
        this.$message.error("上传图片只能是 JPG、GIF、BMP、PNG 格式!");
        return false;
      }
      if (!isLtSize) {
        this.$message.error("上传图片大小不能超过 5MB!");
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  ::v-deep .el-upload--picture-card {
    width: 100%;
  }
}
</style>
