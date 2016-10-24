var ReportParam = function(){
	// province=江苏省&city='+ReportParam+'&begindate=2016-05-01&enddate=2016-09-30
	var params = {province : '江苏省',city:'',begindate:'2016-05-01',enddate:'2016-09-30'};
	var city;

	return {
		getCity:function(){
			return city;
		},
		setCity:function(pcity){
			city = pcity;
		},
		getReportParam:function(){
			params.city=this.getCity();
			return params;
		}

	}
}
export default ReportParam();