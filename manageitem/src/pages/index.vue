<template>
  <div class='index'>
    <el-container>
      <el-header>小U商城大型后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <vnav></vnav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vnav from '../components/vnav'
export default {
  data() {
    return {};
  },
  components:{
    vnav
  }
};
</script>

<style  lang="less" scoped>
    .index{
        width:100vw;
        height:100vh;
        background-color: #ccc;
        .el-container:first-child{
            height: 60px;
            background-color:#518ecb ;
            width:100%;
            line-height:60px;
            font-size:30px;
            color:white;

        }
        .el-container:nth-child(2){
            width:100vw;
            height:calc(100vh - 60px );
            .el-aside{
                height:100%;
                background-color: #3d5f81;
            }
        }
    }
</style>
