<template>
  <div class="introduction">
      <div class="nav-title">导航栏</div>
      <div class="nav-list">
        <ul class="nav-ul">
          <li class="nav-li" v-for="(item,index) in navItem" :key="index">
            <div class="icon iconfont" :class="item.icon"></div>
            <div class="text">{{item.text}}</div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navItem:[
        {
          icon:'icon-shouye',
          text:'首页'
        },
         {
          icon:'icon-fenlei',
          text:'分类'
        },
         {
          icon:'icon-dingwei',
          text:'定位'
        },
         {
          icon:'icon-erweima',
          text:'联系'
        },
         {
          icon:'icon-wode',
          text:'我的'
        },
         {
          icon:'icon-biaoqian',
          text:'标签'
        },
      ]
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .introduction {
    width: 100%;  
    height: 100%;
    // margin-top: 10px;
    background-color: #fff;
    border: 1px #f0f0f0 solid;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    .nav-title {
      width: calc(100% - 48px);
      margin: 10px auto 0;
      padding-bottom: 15px;
      text-align: center;
      font-size: 20px;
      font-family: "微软雅黑";
      font-weight: 600;
      border-bottom: 1px dashed #69c37b;
    }
    .nav-list {
      .nav-ul {
          padding: 0;
          margin: 0 20px;
          .nav-li {
           display: flex;
           padding: 7px 8px 7px;
           text-decoration: none;
           margin-top: 14px;
           cursor: pointer;
           .icon {
             font-size: 28px;
             flex: 1;
             color: #69c37b;
           }
           .text {
             flex: 1;
             display: flex;
             flex-direction: row-reverse;
             align-items: center;
           }
          }
          .nav-li:hover {
            border-radius: 3px;
            background-color: #efefef;
          }
      }
      
    }
  }
</style>