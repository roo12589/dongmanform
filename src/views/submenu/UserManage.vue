<template>
  <div class="container">
    <div class="handle-box">
      <el-button type="primary" icon="el-icon-plus" @click="handleAdd"
        >添加</el-button
      >
      <el-select v-model="query.select" placeholder="请选择">
        <el-option label="id" value="userId"></el-option>
        <el-option label="用户名" value="username"></el-option>
        <el-option label="手机号" value="phonenumber"></el-option>
      </el-select>
      <el-input
        class="search-input"
        v-model="query.str"
        @change="handleSearchRestore"
        placeholder="搜索"
      >
      </el-input>
      <el-button
        class="search-button"
        type="primary"
        icon="el-icon-search"
        @click="handleSearch"
      ></el-button>
      <el-button type="primary" icon="el-icon-delete" @click="delSelectedItem"
        >批量删除</el-button
      >
    </div>
    <el-table
      :data="tableData"
      stripe
      v-loading="loading"
      ref="UserTable"
      @selection-change="handleSelectionChange"
      height="500"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <!-- <el-table-column prop="id" label="id" width="180"> </el-table-column> -->
      <el-table-column
        prop="userId"
        label="用户id"
        width="90"
      ></el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="90"
      ></el-table-column>
      <el-table-column label="头像" align="center">
        <template slot-scope="scope">
          <el-image
            class="table-td-thumb"
            :src="scope.row.avator"
            :preview-src-list="[scope.row.avator]"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="phonenumber" label="手机号码"> </el-table-column>
      <el-table-column prop="introduce" label="介绍"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期"> </el-table-column>
      <el-table-column prop="registerDay" label="注册日期"> </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="query.pageIndex"
        :page-size="query.pageSize"
        :total="pageTotal"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
    <el-dialog title="编辑" :visible.sync="editVisible" width="50%">
      <el-form ref="form" :model="editForm" label-width="70px">
        <el-form-item label="id">
          <el-input v-model="editForm.id"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="editForm.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加" :visible.sync="addVisible">
      <el-form :model="addForm">
        <el-form-item label="id" label-width="70px">
          <el-input id="cantModel" :value="addDefaultId"></el-input>
        </el-form-item>
        <el-form-item label="内容" label-width="70px">
          <el-input v-model="addForm.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAdd">确 定</el-button>
      </span></el-dialog
    >
  </div>
</template>

<script>
export default {
  name: "UserManage",
  data() {
    return {
      tableData: [],
      loading: true,
      query: {
        select: "",
        str: "",
        resultTableData: [],
        previousTableData: [],
      },
      multipleSelection: [],
      delList: [],
      editVisible: false,
      addVisible: false,
      editForm: {
        id: 0,
        content: "",
      },
      addForm: { id: 0, content: "" },
      pageTotal: 0,
      // form: {},
      // idx: -1,
      // id: -1,
    };
  },
  computed: {
    addDefaultId() {
      return this.tableData.length + 1;
    },
  },
  beforeCreate() {},
  mounted() {
    setTimeout(() => {
      this.tableData = [
        {
          userId: "100001",
          username: "1号用户",
          introduce: "123213123214324123123213213",
          avator: "https://lin-xin.gitee.io/images/post/wms.png",
          phonenumber: "15022352525",
          birthday: "2000-7-20 11:02:00",
          registerDay: "2021-7-20 11:02:00",
        },
        {
          userId: "100201",
          username: "2号用户",
          introduce: "12213213",
          avator: "",
          phonenumber: "15022352525",
          birthday: "2000-7-20 11:02:00",
          registerDay: "2021-7-20 11:02:00",
        },
        {
          userId: "100003",
          username: "3号用户",
          introduce: "123213123214324123123213213",
          avator: "",
          phonenumber: "15022352525",
          birthday: "2000-7-20 11:02:00",
          registerDay: "2021-7-20 11:02:00",
        },
      ];
      // console.log(this.tableData)
      this.loading = false;
    }, 500);
    setTimeout(() => {
      this.query.previousTableData = this.tableData;
      console.log("备份tabledata");
    }, 600);
  },

  methods: {
    handleSearch() {
      // this.$set(this.query, 'pageIndex', 1);
      //       this.getData();
      // 先备份原来的tabledata 在改变tabledata 并在查询字符串为空时恢复tabledata
      // this.query.previousTableData = this.tableData;
      // vuex备份？

      if (this.query.select === "") {
        this.$message.error("请选择查询条件");
      } else {
        if (this.query.str === "") {
          this.tableData = this.query.previousTableData;
        } else {
          // let tempTableData = [];
          this.query.previousTableData.forEach((item) => {
            // let str = item.select
            const result = item.userId.indexOf(this.query.str);
            if (result != -1) {
              this.query.resultTableData.push(item);
            }
          });
          console.log(this.query.resultTableData);
          this.tableData = this.query.resultTableData;
          this.query.resultTableData = [];
        }
      }
    },
    async handleSearchRestore() {
      if (this.query.str === "") {
        console.log("handleSearchRestore");
        this.loading = true;
        this.tableData = this.query.previousTableData;
        // await this.$options.methods.sleep(500);
        await new Promise((resolve) => setTimeout(resolve, 300));
        this.loading = false;
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    delSelectedItem() {
      const length = this.multipleSelection.length;
      if (length === 0) {
        // console.log("error")
        this.$message.error(`请选择至少一项数据！`);
      } else {
        let arr = [];
        // this.delList = this.delList.concat(this.multipleSelection);
        let id;
        let index = id - 1;
        for (let i = 0; i < length; i++) {
          id = this.multipleSelection[i].id;
          arr.push(id);
          this.tableData.splice(index, 1);
        }
        arr.sort((a, b) => a - b);
        // this.$message.error(`删除了id为${str}的数据`);
        this.$message.error(`删除了id为以下值的数据:\n${arr}`);
        this.multipleSelection = [];
        //删除下标为id-1的数据下标
      }
    },
    // 操作 编辑
    handleEdit(index, row) {
      // this.idx = index;
      // this.form = row;
      this.editVisible = true;
      this.editForm.id = row.id;
      this.editForm.content = row.content;
    },
    // 保存编辑
    saveEdit() {
      let index = this.editForm.id - 1;
      // this.$set(this.tableData, this.idx, this.form);
      console.log(`修改id为${this.tableData[index].id}的数据`);
      // this.tableData[index].id = this.editForm.id;
      this.tableData[index].content = this.editForm.content;
      this.$message.success(`修改第 ${this.editForm.id} 行成功`);
      this.editVisible = false;
    },
    // 添加
    handleAdd() {
      this.addVisible = true;
    },
    saveAdd() {
      let id = document.querySelector("#cantModel").value;
      // console.log(id);
      let newRow = {
        id: id,
        content: this.addForm.content,
      };
      this.tableData.push(newRow);
      this.$message.success(`添加成功`);
      this.addVisible = false;
      this.addForm.id = 0;
      this.addForm.content = "";
    },
    // 操作 删除
    handleDelete(index) {
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          this.$message.success("删除成功");
          // 删除对应表条目，需请求接口
          this.tableData.splice(index, 1);
          console.log("删除条目", index);
        })
        .catch(() => {});
    },

    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, "pageIndex", val);
      this.getData();
    },
  },
};
</script>

<style lang='scss' >
.handle-box {
  margin-bottom: 10px;
  height: 40px;
  > * {
    margin: 0 10%;
    // display: flex;
    // align-items: center;
  }
  .search-input {
    width: 30%;
    // height: 50%;
    margin: 0 auto;
    .el-input__inner {
      border-radius: 0;
    }
  }
  .el-select {
    margin: 0 0 0 0;
    width: 110px;
  }
  .el-select .el-input .el-icon-arrow-up {
    position: absolute;
    left: 5px;
    // right: 5px;
  }
}
.search-button {
  width: 80px;
}
</style>