$(function() {
	function isPageInIframe() {
	    var par = typeof(window.parent) != 'undefined' ? window.parent : null;
	    if (par && par != window) {
	        return true;
	    }
	    return false;
	}
	if (isPageInIframe()) {
		$("#logoBar,.DefFont:last").hide();
		$(".loginDiv").css("margin",0);
	} else {
		$(".loginDiv>.close").hide();
	}
	$(".edtCrId").attr("placeholder","可使用英文、數字，請勿輸入中文！");
	$(".edtCrCellphone").attr("placeholder","請勿輸入任何符號！");
	$(".close").click(function() {
		if (isPageInIframe()) {
			window.parent.$(".loginIframe").remove();
		}
	});
});