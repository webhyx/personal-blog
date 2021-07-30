<template>
  <div class="hot-recommend">
    <div class="recommend-title">热门推荐</div>
    <div class="recommend-list">
        <div class="recommend-item" v-for="(item,index) in list" :key="index">
            <div class="rank">{{index+1}}</div>
            <span class="title">{{item}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type: Array,
      default() {
        return [
            'vue3新特性及与vue2的区别',
            'Git中报错403如何解决',
            '打包工具中：钻石用webpack,王者用vite,而我用...',
            'Promise的原理及源码解析',

        ]
      },
        }
    },
    data(){
        return {
        }
    }
};
</script>

<style lang="less" scoped>
.hot-recommend {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px #f0f0f0 solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  .recommend-title {
    width: calc(100% - 48px);
    margin: 10px auto 0;
    padding-bottom: 15px;
    text-align: center;
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 600;
    border-bottom: 1px dashed #69c37b;
  }
  .recommend-item {
      display: flex;
      margin: 15px 10px 0 15px;
      cursor: pointer;
       &:hover {
              transform: scale(1.02); // 放大1.01倍
		transition: all .3s; // 设置加载时间
          }
      .rank {
          width: 20px;
          min-width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          color: #fff;
          background-color: #69c37b;
      }
      .title {
          margin-left: 8px;
      }
  }

}
</style>