<template>
  <div class="login">
    <el-input v-model="user.userName" placeholder="请输入内容" maxlength="16"></el-input>
    <el-input placeholder="请输入密码" v-model="user.userPassword" maxlength="16" show-password></el-input>
    <el-button type="primary" @click="login" round>&nbsp;&nbsp;登录&nbsp;&nbsp;</el-button><br>
    <el-link type="info" @click="toRegister">未登录？去注册</el-link>

  </div>
</template>

<script>
  import router from '../router'
export default {
  name: "Login",
  data(){
    const user = {
      userName:"admin",
      userPassword:"123123"
    }
    return {
      user
    }
  },
  methods:{
    login(){
      router.push({path:"/home"})
    },
    toRegister(){
      router.push({path:"/register"})
    }
  }
};
</script>

<style lang='scss'>
  .login {
  width: 500px;
  margin: 0 auto;
  padding: 15px 20px;
  border: 1px solid rgb(228, 216, 216);
  border-radius: 5px;
  position: relative;
  // top: 30%;
  input {
    margin: 5px 0;
  }
  i {
    margin-top: 2.5px;
  }
}
/* .login * {
  margin: 5px;
} */
</style>