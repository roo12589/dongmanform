<template>
  <div class="error-page" v-loading="loading">
    <div class="error-code">4<span>0</span>4</div>
    <div class="error-desc">你所访问的页面不存在!</div>
    <div class="error-handle">
      <el-button type="primary" size="large" @click="goLogin"
        >返回首页</el-button
      >
      <el-button class="error-btn" type="primary" size="large" @click="goBack"
        >返回上一页</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "v404",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    sleep(ms){
      return new Promise(resolve=>setTimeout(resolve,ms));
    },
    async goBack() {
      this.loading = true;
      await this.$options.methods.sleep(500)
      this.$router.go(-1);
      // this.loading = false;
    },
    async goLogin() {
      this.loading = true;
      await this.$options.methods.sleep(500)
      this.$router.push({path:"/login"})
    },
  },
};
</script>


<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 96.6vh;
  background: #f3f3f3;
  box-sizing: border-box;
}
.error-code {
  line-height: 1;
  font-size: 250px;
  font-weight: bolder;
  color: rgb(62, 214, 214);
}
.error-code span {
  color: rgb(62, 214, 214);
}
.error-desc {
  font-size: 26px;
  color: rgb(62, 214, 214);
  font-family: "Courier New", "微软雅黑", Courier, monospace;
}
.error-handle {
  margin-top: 30px;
  padding-bottom: 200px;
}
.error-btn {
  margin-left: 100px;
}
</style>