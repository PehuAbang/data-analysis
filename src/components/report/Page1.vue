<template>
  <div >
    一、2016年三季度全市网络零售交易额变化趋势
    
    <div id="main" style="width: 1000px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import ReportParam from './ReportParam.js'

export default {
  data : function(){return{
	number : 1
  }},
  watch : {
  	number : function(){
  		console.log(this.number);
  	}
  },
  methods : {
  	reload : function(){
  		this.number = this.number+1;
  		console.log(this.number+1);
  	}
  },
	mounted:function(){

    // 139.129.201.60:8080/ec-analysis/graph1?province=江苏省&city=南通市&begindate=2016-05-01&enddate=2016-09-30
    var myChart = echarts.init(document.getElementById('main'));

    function getOption(data){
      // 指定图表的配置项和数据
      var option = {
          title: {
              text: '网络交易额合计：'
          },
          tooltip: {},
          legend: {
              data:['交易額']
          },
          xAxis: {
              data: []
          },
          yAxis: {},
          series: [{
              name: '交易額',
              type: 'bar',
              data: []
          }]
      };
      var total = 0;
      for (var i = 0; i < data.length; i++) {
        var record = data[i];
        option.xAxis.data.push(record.label);
        option.series[0].data.push(record.value);
        total+= record.value;
      }
      option.title.text += total;
      return option;
    }
  
    this.$http.get('http://139.129.201.60:8080/ec-analysis/graph2' , {params : ReportParam.getReportParam()}).
    then((response) => {
      var option = getOption(response.data);
      console.log('option>>',option);
      myChart.setOption(option);
      console.log(response);
    }, (response) => {
      console.log(response);
    });    

  }
}
</script>

<style>

</style>
