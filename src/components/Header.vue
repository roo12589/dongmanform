<template>
  <el-header>
    <el-row>
      <el-col :span="6"><div class="grid-content h100">&nbsp;</div></el-col>
      <el-col :span="12"><div class="grid-content h100" ><h2>动漫论坛后台管理系统{{this.$store.getters.test}}</h2></div></el-col>
      <!-- <el-col :span="6"><div class="grid-content" @click="func"><el-avatar :size="50" :src="circleUrl"></el-avatar><span>{{userName}}<i class="el-icon-caret-bottom"></i></span></div></el-col> -->
      <el-col :span="6"><div class="grid-content h100">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <el-avatar :size="45" :src="circleUrl"></el-avatar
              ><span
                >{{ userName }}<i class="el-icon-arrow-down el-icon--right"></i
              ></span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item ><a @click="logout">退出系统</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
    </el-row>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      userName: "admin",
      circleUrl: "../assets/ark.png", //本地相对路径图片无效 需要在线图片？
    };
  },
  methods:{
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
      this.$message({
        message: '退出成功',
        type: 'success',
        duration: 3 * 1000
      })
    }

  }
};
</script>

<style lang='scss' scoped>
body {
  margin: 0;
  padding: 0;
}
h2 {
  margin: 10px 0;
  line-height: 36px;
}
span {
  float: left;
  font-size: 18px;
  line-height: 55px;
  margin: 0 5px;
  /* line-height: 72px; */
  /* display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center; */
}
.el-header {
  background-color: rgb(233, 240, 240);
  // color: rgb(101, 222, 228);
  color: #555;
  margin: 5px 0;
}
.el-avatar{
  margin-top: 7.5px;
}
.el-dropdown-link {
  cursor: pointer;
}

h100{
  height: 100%;
}
</style>