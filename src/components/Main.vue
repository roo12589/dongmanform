<template>
  <el-container>
    <el-aside width="130px">
<el-row class="tac">
  <el-col>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">
      <!-- 在menu中开启router='true'则默认menu-item会以index跳转 通过设置route='/path'修改跳转路径-->
      <el-menu-item index="1" disabled>
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">分类管理</span>
      </el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>动漫管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->

        <el-menu-item index="3" route="/comment">
        <!-- <i class="el-icon-document"></i> -->
        <span slot="title">评论管理</span>
      </el-menu-item>

      <el-menu-item index="4" route="/pv">
        
        <span slot="title">预告管理</span>
      </el-menu-item>
      <el-menu-item index="5" route="/announce">
        
        <span slot="title">公告管理</span>
      </el-menu-item>
      <el-menu-item index="6" route="/poster">
        
        <span slot="title">海报管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
// import router from '../router';
export default {
  name:"Main",
  data(){
    return{

    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
        // router.push({path:"/dongman"})
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>

<style>
  /* .el-menu-item{
    text-align: center;
  }
  li{
    text-align: center;
  } */
</style>