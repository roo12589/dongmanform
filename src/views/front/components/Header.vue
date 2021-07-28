<template>
  <el-header>
    <el-row>
      <el-col :span="4"
        ><div class="grid-content h100"><h2>动漫论坛</h2></div></el-col
      >
      <el-col :span="10"
        ><div class="grid-content h100">
          <ul>
            <li v-for="item in menuList" :key="item.name">
              <a href="javascript:void(0);">{{ item.name }}</a>
            </li>
          </ul>
        </div></el-col
      >
      <el-col :span="4">
        <div style="margin-top: 10px">
          <el-input
            placeholder="请输入内容"
            v-model="query.str"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <!-- <el-col :span="6"><div class="grid-content" @click="func"><el-avatar :size="50" :src="circleUrl"></el-avatar><span>{{username}}<i class="el-icon-caret-bottom"></i></span></div></el-col> -->
      <el-col :span="6"
        ><div class="grid-content h100">
          &nbsp;
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <el-avatar :size="45" :src="circleUrl"></el-avatar
              ><span
                >{{ username }}<i class="el-icon-arrow-down el-icon--right"></i
              ></span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item
                ><a @click="handleLogout">退出系统</a></el-dropdown-item
              >
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
      username: "user01",
      circleUrl: "../assets/ark.png", //本地相对路径图片无效 需要在线图片？
      query: {
        str: "",
      },
      menuList: [{ name: "首页" }, { name: "分类" }, { name: "评论?" }],
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("user/logout");
      localStorage.removeItem("token");
      this.$router.push("/login");
      this.$message({
        message: "退出成功",
        type: "success",
        duration: 3 * 1000,
      });
    },
  },
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
  font-size: 16px;
  line-height: 58px;
  margin: 0 5px;
  /* line-height: 72px; */
  /* display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center; */
}
.el-header {
  background-color: #def7f7;
  // color: rgb(101, 222, 228);
  color: #555;
  margin: 5px 0;
}
.el-avatar {
  margin-top: 7.5px;
}
// .el-col {
//   height: 60px;
// }
.el-dropdown {
  position: absolute;
  right: 10px;
}
.el-dropdown-link {
  cursor: pointer;
}

h100 {
  height: 100%;
}
ul {
  height: 60px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li {
    float: left;
    margin: 10px;
    a {
      text-decoration: none;
      color: rgb(22, 97, 72);
    }
  }
}
</style>