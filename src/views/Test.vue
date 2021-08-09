<template>
  <div id="test">
   <el-button
      :style="{ background: color, borderColor: color }"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click="dialogVisible = true"
    >
      upload
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
      <div class="imgUpload">
        <input type="file">
      <el-button size="small" type="primary"> Click upload </el-button>
      </div>
      <el-button @click="dialogVisible = false"> Cancel </el-button>
      <el-button type="primary" @click="handleSubmit"> Confirm </el-button>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible:false,
      imgUrl: "",
    };
  },
  methods: {
    handleSubmit(){
      console.log('handleSubmit');
    },
    getImgUrl() {
      const imgFiles = document.querySelector("input[type=file]").files;
      console.log(document.querySelector("input[type=file]").files);
      for (let index = 0; index < imgFiles.length; index++) {
        const reader = new FileReader();
        reader.readAsDataURL(imgFiles[index]);
        reader.onload = () => {
          const _base64 = reader.result;
          this.imgUrl = _base64; //将_base64赋值给图片的src，实现图片预览
          console.log(this.imgUrl);
        };
      }
    },
  },

  mounted() {},
};
</script>
<style lang="less" scoped>
.imgUpload {

}
</style>