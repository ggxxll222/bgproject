<template>
    <div>
        <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="#">{{$route.name}}</a></el-breadcrumb-item>

</el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style  lang="" scoped>

</style>
