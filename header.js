function initShoppingCart(init) {
    function formatNumber(str) {
        if (str.length <= 3) {
            return str;
        } else {
            return formatNumber(str.substr(0, str.length - 3)) + ',' + str.substr(str.length - 3);
        }
    }
    $.getJSON("../Common/CartList.ashx", function(data) {
        var count = 0;
        var price = 0;
        var html = "";
        for (var i = 0, max = data.length; i < max; i++) {
            count += data[i].Num;
            price += data[i].Num * data[i].Price;
            html += "<tr><td align=\"left\" class=\"cartleft\">";
            html += "<img class=\"itemImg\" src=\"" + data[i].PhotoSmPath + "\"></td>";
            html += "<td align=\"left\" class=\"cartright\">";
            html += "<div class=\"itemMerName\">" + data[i].MerName + "</div>";
            html += "<div class=\"itemColor\">" + data[i].Color + "</div>";
            html += "<div class=\"itemPrice\">NT$" + formatNumber(data[i].Price.toString()) + "</div>";
            html += "</td></tr>";
        }
        $(".mybagcount").text(count);
        $(".mybagcountprice").text(price);
        $(".cartcontent").html(html);
        if (html === "") {
            $(".captionleft").html("YOUR BASKET IS<br>EMPTY.");
        } else {
            $(".captionleft").html("YOUR BASKET");
        }
        if (init !== true) {
            var $link = $("a[href='../Shop/cartList.aspx']");
            $link.mouseenter();
            setTimeout(function () {
                $link.mouseleave();
            }, 2000);
        }
    });
}

function initWishList() {
    $.getJSON("../Common/m/Main/Ajax/CartCmd.ashx?method=GetTraceList&returntype=json", function(data) {
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
			    $(".loginIframe").css({ "margin-top": -20, "opacity": 0 }).animate({ "margin-top": 0, "opacity": 1 });
				$(window).resize();
				e.preventDefault();
			}
		});			
	}
	function initMenuWidth() {
	    $("span[text]").each(function (i) {
	        var $this = $(this),
	            $a = $this.parent(),
	            width = $a.width();
	        $this.mouseover();
	        if ($a.width() > width) {
	            width = $a.width();
	        }
	        $this.mouseleave();
	        $a.width(width);
	    });
	}
	function initCartList() {
	    var $cartlist = $(".headerDiv>.toolbar>.cartlist");
	    if ($cartlist.length < 1) {
	        var html = "";
	        html += "<div class=\"cartlist\">";
	        html += "<div class=\"cartheader\">";
	        html += "<span class=\"captionleft\">YOUR BASKET</span>";
	        html += "<span class=\"captionfight\">ITEMS ( <span class=\"mybagcount\">0</span> )</span>";
	        html += "</div>";
	        html += "<div class=\"shoppingCartItem\">";
	        html += "<table class=\"cartcontent\"></table>";
	        html += "</div>";
	        html += "<div class=\"cartfooter\">TOTAL: $<span class=\"mybagcountprice\">0</span>";
	        html += "<a href=\"../Shop/cartList.aspx\" class=\"btncheckout\">CHECKOUT ( <span class=\"mybagcount\">0</span> )</a>";
	        html += "</div>";
	        html += "</div>";
	        $(".headerDiv>.toolbar").append(html);
	    }
	    var sid = null;
	    var eventHander = {
	        mouseenter: function() {
	            if (sid) {
	                clearTimeout(sid);
	            } else {
	                if ($(this).parent().find(".cartlist").is(":hidden")) {
	                    $(this).parent().find(".cartlist").show().css({ "margin-top": -20, "opacity": 0 }).stop().animate({ "margin-top": 0, "opacity": 1 });
	                }
	            }
	            sid = null;
	        },
	        mouseleave: function () {
	            var $this = $(this);
	            sid = setTimeout(function () {
	                if ($this.parent().find(".cartlist").is(":visible")) {
	                    $this.parent().find(".cartlist").show().css({ "margin-top": 0, "opacity": 1 }).stop().animate({ "margin-top": -20, "opacity": 0 }, function() {
	                        $(this).hide();
	                        sid = null;
	                    });
	                } else {
	                    sid = null;
	                }
	            }, 500);
	        }
	    };
	    $("a[href='../Shop/cartList.aspx']").on(eventHander);
	    $(".headerDiv>.toolbar").on("mouseenter", ".cartlist", eventHander.mouseenter);
	    $(".headerDiv>.toolbar").on("mouseleave", ".cartlist", eventHander.mouseleave);
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
	$("#logoBar").append("<div class=\"headerDiv dark\">" + $(".headerDiv").html() + "</div>");
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
	$("#clItems").on("click",".clTdDelete",function () {
	    setTimeout(function () {
	        initShoppingCart(true);
	    },1000);
    });
	(function() {
		initLoginStatus();
	    initShoppingCart(true);
		initWishList();
		initMenu();
		initLoginIframe();
		initMenuWidth();
	    initCartList();
	})();//init
});