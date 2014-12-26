function initShoppingCart() {
    $.getJSON("../Common/CartList.ashx",function(data) {
        var count = 0;
        for (var i = 0, max = data.length; i < max; i++) {
            count += data[i].Num;
        }
        $(".mybagcount").text(count);
    });
}
function initWishList() {
	$.getJSON("../Common/m/Main/Ajax/CartCmd.ashx?method=GetTraceList&returntype=json",function(data) {
        $(".mywishlistcount").text(data.length);
    });
}
$(function() {
	function initLoginStatus() {
		$.getJSON("../Common/LoginStatus.ashx",function(data){
			if (data !== null && data.IsLogin) {
				$(".loginlogout").attr("href","../common/loginout.aspx");
				$(".loginlogout>span").attr("text","會員登出").text("LOGOUT");
			}
		}); 				
	}
	function initMenu() {
		$.getJSON("../common/ajax/menucmd.ashx",function(data){
			if (data !== null) {
				var html="";
				for(var i=0,max=data.length;i<max;i++) {
					html += "<a href=\"../Shop/itemlist.aspx?m=" + data[i].Idno + "\">" + data[i].Name + "</a>";
					if (i < max-1) {
						html += "<span>|</span>";
					}
				}
				$(".headerDiv>.menu").html(html);
			}
		});
	}
	function initLoginIframe() {
		$(".loginlogout").click(function(e){
			if ($(this).find(">span").attr("text")==="LOGIN" && $(".loginIframe").length<1) {
				var html="";
				html += "<div class=\"loginIframe\">";
				html += "<iframe ";
				html += "frameborder=\"0\" ";
				html += "scrolling=\"no\" ";
				html += "width=\"972\" ";
				html += "height=\"489\" ";
				html += "src=\"../common/login.aspx\" ";
				html += "></div>";
				$("body").append(html);
				$(window).resize();
				e.preventDefault();
			}
		});			
	}
	$(window).resize(function() {
		if ($(window).height()>489) {
			$(".loginIframe>iframe").css("margin-top",($(window).height()-489)/2);
		} else {
			$(".loginIframe>iframe").css("margin-top",0);
		}
	});
	$("#logoBar").on("mouseenter mouseleave","span[text]",function(e) {
		var text = $(this).text();
		$(this).text($(this).attr("text"));
		$(this).attr("text",text);
	});
	$("#logoBar").append("<div class=\"headerDiv dark\">" + $(".headerDiv").html() +"</div>");
	$(window).scroll(function() {
		if ($(window).scrollTop()>142 ) {
			if (parseInt($(".headerDiv.dark").css("top"))===-82) {
				$(".headerDiv.dark").stop(true,false).animate({"top":0},200);
			}
		} 
		if ($(window).scrollTop()<=142 ) {
			if (parseInt($(".headerDiv.dark").css("top"))===0) {
				$(".headerDiv.dark").stop(true,false).animate({"top":-82},200);
			}
		} 				
	});
	(function() {
		initLoginStatus();
		initShoppingCart();
		initWishList();
		initMenu();
		initLoginIframe();
	})();//init
});