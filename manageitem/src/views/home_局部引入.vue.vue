<template>
  <div>
    <!-- 设定一个容器并指定其大小 -->
    <div id="container"></div>
  </div>
</template>

<script>
//echarts5.x版本不支持import方法 
// 选择最原始的方式 通过 require 引入
let echart = require('echarts')
export default {
  data() {
    return {};
  },
  mounted() {
    //组件一加载就调用echarts数据图表
    //初始化
    let myChart = echart.init(document.getElementById("container"));

    //初始化配置项
    let options = {
      xAxis: {
        //横轴
        //"Error: Component xAxis.分类 not exists. Load it first."
        //category
        type: "category",
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "放假"]
      },
      yAxis: {
        //纵轴
        type: "value"
      },
      series: [
        {
          //数据列
          data: [12, 44, 66, 199, 255, 16, 1],
          type: "line"
        }
      ]
    };
    //给图表设置配置项
    myChart.setOption(options);
  }
};
</script>

<style lang="" scoped>
#container {
  width: 700px;
  height: 500px;
}
</style>
