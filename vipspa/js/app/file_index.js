$(function(){
			    
//	日期
	var today = new Date().getTime();
	$('#startTime').datetimepicker({
		value:fomartTime(today),
		timepicker:false
	})
	
	
	 $("#checkall").click(function() {
        $('input[name="file"]').attr("checked",this.checked); 
      });
      var $subBox = $("input[name='file']");
      $subBox.click(function(){
        $("#checkall").attr("checked",$subBox.length == $("input[name='file']:checked").length ? true : false);
      });
})