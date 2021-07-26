<template>
  <div class="login">
    <h2>登录</h2>
    <el-form
      ref="loginInfo"
      :model="loginInfo"
      :rules="rules"
      class="login-form"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginInfo.username"
          placeholder="请输入用户名"
          name="username"
          ref="username"
          tabindex="1"
        ></el-input
      ></el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password"
          ><el-input
            placeholder="请输入密码"
            v-model="loginInfo.password"
            name="password"
            ref="password"
            tabindex="2"
            show-password
          ></el-input></el-form-item
      ></el-tooltip>
      <el-button type="primary" @click="handleLogin()" round
        >&nbsp;&nbsp;登录&nbsp;&nbsp;</el-button
      ><br />
      <el-link type="info" @click="toRegister">未登录？去注册</el-link>
    </el-form>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Login",
  data() {
    const loginInfo = {
      username: "admin123",
      password: "123123",
    };
    return {
      loginInfo,
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "请输入用户名",
          },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
          },
        ],
      },
      //？
      capsTooltip: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  methods: {
    toRegister() {
      router.push({ path: "/register" });
    },
    //?
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    handleLogin() {
      /* this.$refs.loginInfo.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginInfo)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/dashboard",
                query: this.otherQuery,
              });
              this.loading = false;
              // ElMessage.success("登录成功");
              this.$message({ message: "登录成功", type: "success" });
              // 此处admin应替换为userInfo.role
              localStorage.setItem("ms_username", "admin");
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!! ==login");
          return false;
        }
      }); */
      localStorage.setItem("token", "admin");
      this.$router.push("/home");
      this.$message({ message: "登录成功", type: "success" });
      // 此处admin应替换为userInfo.role
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style lang='scss'>
.login {
  width: 350px;
  margin: 200px auto 0;
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