<template>
  <div class="login">
    <el-form
      :model="loginList"
      label-width="100px"
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginList.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password clearable v-model="loginList.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//引入封装好的接口模块
import {userLogin} from '../util/axios'
export default {
  data() {
    return {
      loginList: {
        username: "", //用户名
        password: ""
      },
      rules: {
        //规则验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 15, message: "长度在 2 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //封装一个登录事件
    login(formName) {
         console.log(formName,'formName');
      this.$refs[formName].validate(valid => {
        console.log(valid,'validvalidvalidvalid');
        if (valid) {
            //正常调取登录接口
            userLogin(this.loginList)
            .then(res=>{
              if(res.data.code===200){
                this.$message.success(res.data.msg)
                //把登录结果存储到会话存储中
                sessionStorage.setItem('loginInfo',JSON.stringify(res.data.list))
                //跳转到首页
                this.$router.push('/home')
              }else{
                this.$message.error(res.data.msg)
              }
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style  lang="less" scoped>
.login{
    width:100vw;
    height: 100vh;
    background-color: #ccc;
    .el-form{
        padding-top:100px;
        padding-right:100px;
        box-shadow: 0px 0px 5px 5px hsla(0, 31%, 45%, 0.438);
        background-color: #fff;
        background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3580997367,3887684316&fm=26&gp=0.jpg');
        width:400px;
        height:300px;
        position:absolute;
        left: 50%;
        top: 50%;
        margin-top:-150px;
        margin-left:-200px;
        .el-button{
            margin-left:100px;
        }
    }
}
</style>
