<template>
  <div class="Login">
      <h1>Login</h1>
  <div class="account">
        <el-input placeholder="请输入账号" v-model="account">
           <template #prepend>账号:</template>
        </el-input>
  </div>
  <div class="password">
    <el-input placeholder="请输入密码" v-model="password" show-password>
    <template #prepend>密码:</template>
  </el-input>
  </div>

  <el-button type="primary" plain @click="login(account,password)">登录</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {  },
  data() {
    return {
      account:'huangyuxuan',
      password:'huangyuxuan'
    };
  },
  methods:{
    login(account,password){
      axios({
        method: "get",
        // url: "http://121.40.125.179/token",
        url:"http://www.hhsunset.top/token",
        params: {
          name: account,
          password: password,
        },
      }).then((res) => {
        // 账号密码正确或者失败都返回一个具体的code
        //&& res.data.msg.token
        console.log(res);
        if (res.data.code === 200 && res.data.result.token) {
          // 清除token
          this.$store.commit('cookie/clearToken')
          // 设一个token，过期时间为会话结束
          this.$store.commit('cookie/setToken',res.data.result.token)
          console.log(res.data.result.token);
          this.$router.push("/home");
        } else if(res.data.code === 400){
          this.$message('账号或密码错误！')
        } else {
          this.$message('异常错误')
        }
      });
     
    }
  }
};
</script>
<style  scoped>
  .Login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .account {
    width: 400px;
    margin: 10px 0;
  }
  .password {
    width: 400px;
    margin: 10px 0;
  }
</style>