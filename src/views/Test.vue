<template>
  <div id="test">
    <input type="file"  multiple="multiple" />
    <el-button @click="getImgUrl">获取url</el-button>
    <img :src="imgUrl" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  methods: {
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