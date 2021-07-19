<template>
    <el-header>
        <el-row>
        <el-col :span="6"><div class="grid-content">&nbsp;</div></el-col>
        <el-col :span="12"><div class="grid-content"><h2>动漫论坛后台管理系统</h2></div></el-col>
        <!-- <el-col :span="6"><div class="grid-content" @click="func"><el-avatar :size="50" :src="circleUrl"></el-avatar><span>{{userName}}<i class="el-icon-caret-bottom"></i></span></div></el-col> -->
        <el-col :span="6"><div class="grid-content">
          <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-avatar :size="50" :src="circleUrl"></el-avatar><span>{{userName}}<i class="el-icon-arrow-down el-icon--right"></i></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >修改信息</el-dropdown-item>
        <el-dropdown-item >退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
        </div></el-col>
        </el-row>
    </el-header>
</template>

<script>
export default {
  data() {
    return {
      userName: "admin",
      circleUrl:"../assets/ark.png",//本地相对路径图片无效 需要在线图片？
    };
  },
};
</script>

<style>
h2 {
  margin: 10px 0;
}
span {
  float: left;
  font-size: 20px;
  line-height: 50px;
  margin: 0 5px;
  /* line-height: 72px; */
  /* display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center; */
}
.el-dropdown-link {
    cursor: pointer;
  }
  
</style>