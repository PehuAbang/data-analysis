<template>
  <div >
    二、2016年三季度全市网络零售不同平台交易额分布
    <div id="page2" style="width: 1000px;height:400px;"></div>
  </div>
  
</template>

<script>
import echarts from 'echarts'
import ReportParam from './ReportParam.js'

export default {
  data : function(){return{
	
  }},
  mounted : function(){

	var myChart = echarts.init(document.getElementById('page2'));  	
	//app.title = '环形图';

	function getOption(data){
		var option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:[]
		    },
		    label:{
	        	normal : {
	        		show :true,
	        		position : 'top',
	        		formatter: '{b}: {c} ({d}%)'
	        	}
	        },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            data:[]
		        }
		    ]
		};
		for (var i = 0; i < data.length; i++) {
			var record = data[i];
			option.legend.data.push(record.label);
			option.series[0].data.push({value:record.value , name:record.label});
		}
		
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
