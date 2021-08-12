<template>
  <div class="carousel">
         <el-carousel height="520px">
      <el-carousel-item v-for="(item,index) in imgInfo" :key="index">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgInfo:[
        {
          imgUrl:require('./images/a09aafb384d4f046d964aad908a7a05d.jpeg')
        },
          {
          imgUrl:require('./images/386ed39142f0c0c89bd0d63fb1fed036.jpeg')
        },
          {
          imgUrl:require('./images/5452c0183b85f4ceade0a3029f39936a.jpeg')
        },
          {
          imgUrl:require('./images/b6c8afdc03539589371beb3f4863215b.jpeg')
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.carousel {
    // position: absolute;
    // width: 120%;
    padding: 10px 0;
    .el-carousel__item  {
      // text-align: center;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 520px;
      }
  }
   
  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }
  
  // .el-carousel__item:nth-child(2n+1) {
  //   background-color: #d3dce6;
  // }
}
</style>