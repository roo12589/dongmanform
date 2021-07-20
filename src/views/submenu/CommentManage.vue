<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      border
      v-loading="loading"
      height="500"
      style="width: 100%"
    >
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="userId" label="用户" width="180">
      </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
      <el-table-column prop="datetime" label="日期"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CommentManage",
  data() {
    return {
      tableData: [],
      loading:true
    };
  },
  beforeCreate() {

  },
  mounted(){
    setTimeout(() => {
      this.tableData = [
        {
          id: "1",
          userId: "100001",
          content: "123213123214324123123213213",
          datetime: "2021-7-20 11:02:00",
        },
        {
          id: "2",
          userId: "100002",
          content: "this is contentdsadcx  sd afdf asd sd ssadsd",
          datetime: "2021-7-21 11:02:00",
        },
        {
          id: "3",
          userId: "103001",
          content: "sa  dsadw xda sdfds ad fds sa dsa asd dsadsa",
          datetime: "2021-7-22 11:02:00",
        },
      ];
      // console.log(this.tableData)
      this.loading=false 
    }, 500);
    console.log(this)
  }
};
</script>

<style>
</style>