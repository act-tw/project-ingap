var isLocal = /^file\:\/\/\//i.test(location.href);
function initShoppingCart(init) {
	var data=[];
    function formatNumber(str) {
        if (str.length <= 3) {
            return str;
        } else {
            return formatNumber(str.substr(0, str.length - 3)) + ',' + str.substr(str.length - 3);
        }
    }
    function getData(data) {
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
    }
    if(isLocal) {
    	getData(data);
    } else {
	    $.getJSON("../Common/CartList.ashx", function(data) {
	    	getData(data);
	    });	
    }
}

function initWishList() {
	var data=[];
	function getData(data) {
		$(".mywishlistcount").text(data.length);
	}
	if (isLocal) {
		getData(data);
	} else {
	    $.getJSON("../Common/m/Main/Ajax/CartCmd.ashx?method=GetTraceList&returntype=json", function(data) {
	        getData(data);
	    });
	}
}

$(function() {
	function initLoginStatus() {
		var data={UserId: "",IsLogin: false};
		function getData(data) {
			if (data !== null && data.IsLogin) {
			    $(".loginlogout").attr("href", "../common/loginout.aspx");
			    $(".loginlogout>span").attr("text", "會員登出").text("SIGN OUT");
			}
		}
		if (isLocal) {
			getData(data);
		} else {
			$.getJSON("../Common/LoginStatus.ashx",function(data){
				getData(data);
			}); 
		}
	}
	function initMenu() {
		var data=[{"Idno":27,"Name":"<font color=\"#FF0088\">2015 經典潮包大出清！</font>","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/ADMJ/1.png","MainPhoto":"","ShowType":0,"OrderNum":0,"V1":"","SubClass":[{"Idno":88,"Name":"2015 經典潮包大出清！","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":3,"Name":"ADMJ","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/ADMJ/1.png","MainPhoto":"","ShowType":0,"OrderNum":1,"V1":"","SubClass":[{"Idno":87,"Name":"<font color=\"#FF0088\">2015 經典潮包大出清！</font>","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":0,"Level":0,"List":[]},{"Idno":8,"Name":"2015 新品","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":9,"Name":"Hello Kitty X A.D.M.J.","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[{"Idno":12,"Name":"包包","MouseoverName":"","TopIdno":9,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":13,"Name":"皮夾","MouseoverName":"","TopIdno":9,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":15,"Name":"托特包、手提包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":16,"Name":"肩、斜背兩用包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]},{"Idno":17,"Name":"手拿包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[]},{"Idno":18,"Name":"零錢包、皮夾、配件","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[]},{"Idno":19,"Name":"所有包款","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[]}]},{"Idno":1,"Name":"Kitson","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Kitson/2.png","MainPhoto":"","ShowType":0,"OrderNum":2,"V1":"","SubClass":[{"Idno":14,"Name":"Kitson X Kitty 聯名款","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":58,"Name":"T-Shirt","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":24,"Name":"日本空運洗髮精","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]},{"Idno":1,"Name":"Outdoor系列","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[]},{"Idno":21,"Name":"鋪棉托特包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[]},{"Idno":28,"Name":"皮革質感托特包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[]},{"Idno":22,"Name":"帆布 / 尼龍托特包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":8,"Level":0,"List":[]},{"Idno":20,"Name":"亮片 / 金屬質感托特包","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":9,"Level":0,"List":[]},{"Idno":23,"Name":"皮夾 / 化妝包 / 配件","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":10,"Level":0,"List":[]},{"Idno":27,"Name":"所有包款","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]}]},{"Idno":12,"Name":"Knit-SHOCK","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/brand/KnitShock.jpg","MainPhoto":"","ShowType":0,"OrderNum":3,"V1":"","SubClass":[{"Idno":56,"Name":"手錶","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":2,"Name":"e.m.","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/e.m/3.png","MainPhoto":"","ShowType":0,"OrderNum":4,"V1":"","SubClass":[{"Idno":25,"Name":"戒指、耳環","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":26,"Name":"項鍊、墜飾","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":26,"Name":"+ HOTEL","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/+HOTEL.png","MainPhoto":"","ShowType":0,"OrderNum":5,"V1":"","SubClass":[{"Idno":60,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":61,"Name":"褲類","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":62,"Name":"外套","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":5,"Name":"Ames Bros","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Ames%20Bros/5.png","MainPhoto":"","ShowType":0,"OrderNum":6,"V1":"","SubClass":[{"Idno":48,"Name":"WOMEN","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":0,"Level":0,"List":[]},{"Idno":33,"Name":"MEN","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]}]},{"Idno":18,"Name":"JET","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/JET.png","MainPhoto":"","ShowType":0,"OrderNum":7,"V1":"","SubClass":[{"Idno":59,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":20,"Name":"Joel Green","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Joel-Green.png","MainPhoto":"","ShowType":0,"OrderNum":7,"V1":"","SubClass":[{"Idno":63,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":64,"Name":"褲類","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":6,"Name":"kidrobot","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Kidrobot/8.png","MainPhoto":"","ShowType":0,"OrderNum":8,"V1":"","SubClass":[{"Idno":46,"Name":"WOMEN","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":0,"Level":0,"List":[]},{"Idno":40,"Name":"MEN","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":47,"Name":"KID","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]}]},{"Idno":4,"Name":"Local Celebrity","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Local%20Celebrity/9.png","MainPhoto":"","ShowType":0,"OrderNum":9,"V1":"","SubClass":[{"Idno":44,"Name":"TOPS","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":17,"Name":"Lucca Couture","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Lucca%20Couture.png","MainPhoto":"","ShowType":0,"OrderNum":9,"V1":"","SubClass":[{"Idno":81,"Name":"洋裝","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":82,"Name":"褲類","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":22,"Name":"MIIA","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/MIIA.png","MainPhoto":"","ShowType":0,"OrderNum":10,"V1":"","SubClass":[{"Idno":67,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":68,"Name":"洋裝","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":69,"Name":"外套","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":70,"Name":"褲類","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":23,"Name":"Millie loves Min","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Millie%20loves%20Min.png","MainPhoto":"","ShowType":0,"OrderNum":10,"V1":"","SubClass":[{"Idno":65,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":66,"Name":"洋裝","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":19,"Name":"Nitz Schneider","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Nitz%20Schneider.png","MainPhoto":"","ShowType":0,"OrderNum":11,"V1":"","SubClass":[{"Idno":71,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":72,"Name":"外套","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":16,"Name":"Stella & Jamie","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Stella-&-Jamie.png","MainPhoto":"","ShowType":0,"OrderNum":12,"V1":"","SubClass":[{"Idno":73,"Name":"外套","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":14,"Name":"t~bags","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Tbags-Los-Angeles.png","MainPhoto":"","ShowType":0,"OrderNum":13,"V1":"","SubClass":[{"Idno":74,"Name":"洋裝","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":21,"Name":"THEME","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/THEME.png","MainPhoto":"","ShowType":0,"OrderNum":13,"V1":"","SubClass":[{"Idno":75,"Name":"外套","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":24,"Name":"Tolani","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":13,"V1":"","SubClass":[{"Idno":76,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":77,"Name":"配件","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":83,"Name":"洋裝","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":101,"Level":0,"List":[]}]},{"Idno":25,"Name":"Truck Jeans","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/TRUCK-JEANS.jpg","MainPhoto":"","ShowType":0,"OrderNum":13,"V1":"","SubClass":[{"Idno":84,"Name":"褲類","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":15,"Name":"Weston Wear","MouseoverName":"","PhotoPath":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/LOGO/Weston.jpg","MainPhoto":"","ShowType":0,"OrderNum":14,"V1":"","SubClass":[{"Idno":78,"Name":"上衣","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":79,"Name":"洋裝","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":80,"Name":"裙類","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]}];
		function getData(data) {
			if (data !== null) {
				var html="";
				for(var i=0,max=data.length;i<max;i++) {
					html += "<a href=\"../Shop/itemlist.aspx?m=" + data[i].Idno + "\">" + data[i].Name + "</a>";
					if (i < max-1) {
						html += "<span>|</span>";
					}
				}
				$(".headerDiv>.menu").html(html);
				$(".headerDiv.dark").css("top", -$(".headerDiv.dark").height());
			}
		}
		if (isLocal) {
			getData(data);
		} else {
			$.getJSON("../common/ajax/menucmd.ashx",function(data){
				getData(data);
			});			
		}
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
            if (parseInt($(".headerDiv.dark").css("top")) === -$(".headerDiv.dark").height()) {
				$(".headerDiv.dark").stop(true,false).animate({"top":0},200);
			}
		} 
		if ($(window).scrollTop()<=142 ) {
			if (parseInt($(".headerDiv.dark").css("top"))===0) {
                $(".headerDiv.dark").stop(true, false).animate({ "top": -$(".headerDiv.dark").height() }, 200);
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