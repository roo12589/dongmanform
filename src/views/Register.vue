<template>
  <div>
    <h3>注册</h3>
    <el-divider></el-divider>
    <div class="register">
      <el-form
        :model="registerInfo"
        :rules="rules"
        ref="registerInfo"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名：" prop="name"
          ><el-input
            placeholder="请输入用户名"
            v-model="registerInfo.name"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="registerInfo.password"
            show-password
          ></el-input
        ></el-form-item>
        <el-form-item prop="passwordCheck"
          ><el-input
            placeholder="请再次输入密码"
            v-model="registerInfo.passwordCheck"
            show-password
          ></el-input
        ></el-form-item>

        <el-form-item prop="phonenumber">
          <el-input
            placeholder="请输入手机号码"
            v-model="registerInfo.phonenumber"
            class="input-with-select"
          >
            <el-select
              v-model="registerInfo.country"
              slot="prepend"
              placeholder="请选择国家"
            >
              <el-option label="中国 +86" value="cn"></el-option>
              <el-option label="美国 +1" value="us"></el-option>
              <el-option label="法国 +33" value="fr"></el-option>
              <el-option label="俄罗斯 +7" value="rs"></el-option>
              <el-option label="日本 +81" value="jp"></el-option>
            </el-select>
            <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
          </el-input></el-form-item
        >
        <el-form-item label="自我介绍：" prop="introduce">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6 }"
            placeholder="介绍一下自己吧？"
            v-model="registerInfo.introduce"
            maxlength="80"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item prop="birthday" label="生日：">
          <el-date-picker
            v-model="registerInfo.birthday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="身份：" prop="role">
          <el-radio v-model="registerInfo.role" label="1" border size="medium"
            >普通用户</el-radio
          >
          <el-radio v-model="registerInfo.role" label="2" border size="medium"
            >管理员</el-radio
          ></el-form-item
        >

        <el-form-item>
          <el-button
            type="primary"
            round
            @click="handleRegister('registerInfo')"
            >&nbsp;&nbsp;注册&nbsp;&nbsp;</el-button
          >
          <el-button @click="resetForm('registerInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    /* 
    验证两次密码是否一致
    */
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerInfo.passwordCheck !== "") {
          this.$refs.registerInfo.validateField("passwordCheck");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerInfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    /* 
    验证手机号码
    */
    var validatePhonenumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请填写手机号码"));
      } else {
        const reg = /^1[3|5|7|8|9][0-9]{9}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号码"));
        }
      }
    };
    return {
      registerInfo: {
        name: "",
        password: "",
        passwordCheck: "",
        role: "1",
        phonenumber: "",
        country: "cn",
        introduce: "",
        birthday: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
          //添加正则验证
        ],
        password: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        passwordCheck: [{ validator: validatePass2, trigger: "blur" }],
        phonenumber: [
          {
            required: true,
            // message: "请输入正确的手机号码",
            validator: validatePhonenumber,
            trigger: "blur",
          },
        ],
        // role: [
        //   {
        //     type: "number",
        //     required: true,
        //     message: "请选择身份",
        //     trigger: "change",
        //   },
        // ],
        introduce: [
          {
            // type: "date",
            required: false,
            // message: "请选择时间",
            trigger: "change",
          },
        ],
        birthday: [
          {
            required: true,
            message: "请填写出生日期",
          },
        ],
      },
    };
  },
  methods: {
    handleRegister(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          // 通过表单验证，执行下一步操作
          // console.log(valid);
          alert("submit!");
        } else {
          console.error("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='scss' scoped>
.register {
  width: 500px;
  margin: 0 auto;
  .el-input,
  .el-radio,
  .el-textarea {
    margin: 5px 0;
  }
}
.el-select {
  width: 120px;
}
</style>