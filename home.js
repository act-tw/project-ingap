var isLocal = /^file\:\/\/\//i.test(location.href);
$(function() {
	function getCookie(name) {
	    var i, x, y, aRRcookies = document.cookie.split(";");
	    for (i = 0; i < aRRcookies.length; i++) {
	        x = aRRcookies[i].substr(0, aRRcookies[i].indexOf("="));
	        y = aRRcookies[i].substr(aRRcookies[i].indexOf("=") + 1);
	        x = x.replace(/^\s+|\s+$/g, "");
	        if (x == name) {
	            return unescape(y);
	        }
	    }
	    return undefined;
	}

	function setCookie(name, value, exdays) {
	    var exdate = new Date();
	    exdate.setDate(exdate.getDate() + exdays);
	    var cvalue = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
	    document.cookie = name + "=" + cvalue;
	}	

	var data={"brandList":[{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/A.D.M.J.png","url":"#1"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/kitson.png","url":"#2"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/e.m.png","url":"#3"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/+Hotel.png","url":"#4"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/AMES BROS.png","url":"#5"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/TRUCK JEANS.png","url":"#6"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/JET.png","url":"#7"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/Kidrobot.png","url":"#8"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/Local Celebrity.png","url":"#9"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/Nitz Schneider.png","url":"#10"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/MiiA.png","url":"#11"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/Millie Loves Min.png","url":"#12"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/Lucca Couture.png","url":"#13"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/THEME.png","url":"#14"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open page/Brand/Tolani .png","url":"#15"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open%20page/Brand/Knit-SHOCK.png","url":"#16"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open%20page/Brand/Joel-Green.png","url":"#17"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open%20page/Brand/Stella-%26-Jamie.png","url":"#18"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open%20page/Brand/TBAG.png","url":"#19"},{"img":"http://www.ingapphoto.com.tw/INGAP/Open%20page/Brand/Weston-Wear.png","url":"#20"}],"blockList1":[{"img":"http://www.ingapphoto.com.tw/INGAP/Home/Top/20150703BN.jpg","url":"http://www.ingap.com.tw/Shop/itemlist.aspx?m=27"},{"img":"http://www.ingapphoto.com.tw/INGAP/Home/Top/0716_INGAP_BN.jpg","url":"http://www.ingap.com.tw/Shop/itemlist.aspx?m=1"},{"img":"http://www.ingapphoto.com.tw/INGAP/top2/20150527.jpg","url":"http://www.ingap.com.tw/Common/syNsShow.aspx?id=23&g=qaGroup2"},{"img":"http://www.ingapphoto.com.tw/INGAP/Home/Top/1.jpg","url":"http://www.ingap.com.tw/Shop/itemlist.aspx?m=3"},{"img":"http://www.ingapphoto.com.tw/INGAP/Home/Top/2_fixed.jpg","url":"http://www.ingap.com.tw/Shop/itemList.aspx?m=3&p=8"},{"img":"http://www.ingapphoto.com.tw/INGAP/Home/Top/3.jpg","url":"http://www.ingap.com.tw/shop/itemlist.aspx?ctl00%24edtSearch=12A11-0023"},{"img":"http://www.ingapphoto.com.tw/INGAP/Home/Top/4_fixed.jpg","url":"http://www.ingap.com.tw/Shop/itemList.aspx?m=1&p=14"}],"blockList2":{"item01":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-3.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-3.jpg","url":"http://www.ingap.com.tw/Shop/itemList.aspx?m=1&p=24"},"item02":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-5.gif","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-5.gif","url":"http://www.ingap.com.tw/Shop/itemList.aspx?m=1&p=23"},"item03":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-6.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-6.jpg","url":"http://www.ingap.com.tw/Shop/itemlist.aspx?m=12"},"item04":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-1-200.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-1-200.jpg","url":"http://www.ingap.com.tw/Shop/itemDetail.aspx?mNo1=TWKT1010&cno=915&m=3&p=13"},"item05":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-3-200.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-3-200.jpg","url":"http://www.ingap.com.tw/Shop/itemDetail.aspx?mNo1=12A11-0066&cno=301&m=1&p=14"},"item06":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-2-200.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-2-200.jpg","url":"http://www.ingap.com.tw/Shop/itemDetail.aspx?mNo1=TWKT6001&cno=1307&m=3&p=13"},"item07":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-4-200.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-4-200.jpg","url":"http://www.ingap.com.tw/Shop/itemDetail.aspx?mNo1=11A11-0010&cno=553&m=1&p=14"},"item08":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-4.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-4.jpg","url":"http://www.ingap.com.tw/Shop/itemlist.aspx?m=2"},"item09":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-2.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-2.jpg","url":"http://www.ingap.com.tw/Shop/itemList.aspx?m=3&p=8"},"item10":{"img1":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-1.jpg","img2":"http://www.ingapphoto.com.tw/INGAP/top2/20150511-1.jpg","url":"http://www.ingap.com.tw/Shop/itemList.aspx?m=3&p=15"}},"blockList3":[{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/BB01009-1500.jpg","url":"http://ppt.cc/GB94"},{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/TWKT1017-1100.jpg","url":"http://ppt.cc/a7C3"},{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/BC01001-0900.jpg","url":"http://www.ingap.com.tw/Shop/itemDetail.aspx?mNo1=BC01001&cno=416&m=3&p=8"},{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/BC01004-1200.jpg","url":"http://ingap.hishop.com.tw/Shop/itemDetail.aspx?mNo1=BC01004&cno=418&m=3&p=8"},{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/BC01007-1700.jpg","url":"http://ingap.hishop.com.tw/Shop/itemDetail.aspx?mNo1=BC01007&cno=1141&m=3&p=8"},{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/ACS01052-0100.jpg","url":"http://ppt.cc/xuop"},{"img":"http://www.ingapphoto.com.tw/INGAP/NEW%20ARRIVAL/BC06004-2100.jpg","url":"http://ingap.hishop.com.tw/Shop/"}],"blockList4":[{"img":"http://www.ingapphoto.com.tw/INGAP/Kitson/Product/11A11-0009/11A11-0009-9900-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=11A11-0009&cno=551&m=1&p=14","brand":"Kitson","text":"kitson x Ribbon Hello Kitty Tote (L)","price":3680,"originPrice":3680},{"img":"http://www.ingapphoto.com.tw/INGAP/Kitson/Product/14S11-0019/14S11-0019-4621-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=14S11-0019&cno=852&m=1&p=21","brand":"Kitson","text":"台灣限定 經典鋪棉托特包","price":3980,"originPrice":3980},{"img":"http://www.ingapphoto.com.tw/INGAP/Kitson/Product/SHAMPOO/11A15-0002-1700-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=11A15-0002&cno=128&m=1&p=24","brand":"Kitson","text":"Premium 頂級氨基酸護髮精華","price":699,"originPrice":699},{"img":"http://www.ingapphoto.com.tw/INGAP/ADMJ/Product/BC06002/BC06002-2300-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=BC06002&cno=428&m=3&p=8","brand":"ADMJ","text":"珠光小牛革 OPEN WALLET","price":16500,"originPrice":16500},{"img":"http://www.ingapphoto.com.tw/INGAP/ADMJ/Product/BA01017/BA01017-1750-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=BA01017&cno=118&m=3&p=8","brand":"ADMJ","text":"小牛革施華洛士奇水晶SEAN TOTE BAG","price":39900,"originPrice":39900},{"img":"http://www.ingapphoto.com.tw/INGAP/Kitson/Product/KS/KS00C-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=KS00C&cno=1429&m=12&p=56","brand":"Knit-SHOCK","text":"Knit- SHOCK! 糖果色編織手錶","price":2580,"originPrice":2580},{"img":"http://www.ingapphoto.com.tw/INGAP/Kitson/Product/003607/003607-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=003607&cno=1013&m=1&p=20","brand":"Kitson","text":"愛心花LOGO亮片托特包","price":3980,"originPrice":3980},{"img":"http://www.ingapphoto.com.tw/INGAP/Kitson/Product/14S11-0013/14S11-0013-1100-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=14S11-0013&cno=1431&m=1&p=23","brand":"Kitson","text":"螢光滾邊帆布化妝包(大)","price":1280,"originPrice":1980},{"img":"http://www.ingapphoto.com.tw/INGAP/ADMJ/Product/AM01045/AM1045-2100-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=AM01045&cno=256&m=3&p=15","brand":"ADMJ","text":"華麗水晶牛革 BOSTON BAG","price":16500,"originPrice":27500},{"img":"http://www.ingapphoto.com.tw/INGAP/ADMJ/Product/AV01003/AV01003-1400-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=AV01003&cno=347&m=3&p=17","brand":"ADMJ","text":"柔軟小牛革CLUTCH BAG手拿包","price":8280,"originPrice":13800},{"img":"http://www.ingapphoto.com.tw/INGAP/Local%20Celebrity/LWCP109645/LWCP109645-9600-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=LWCP109645&cno=760&m=4&p=44","brand":"Local Celebrity","text":"RAINBOW彩虹豹短T","price":2180,"originPrice":2180},{"img":"http://www.ingapphoto.com.tw/INGAP/Othere%20Clothes/3123-100-8/3123-100-8-01-360.jpg","url":"../Shop/itemDetail.aspx?mNo1=3123-100-8&cno=1365&m=22&p=67","brand":"MIIA","text":"MIIA  前短後長拼色雪紡襯衫","price":3680,"originPrice":3680}],"naviList":["TOP","ONLINE EXCLUSIVES","NEW ARRIVAL","RANKINGS"]};
	var dataUrl="../shop/customuc/c51ingap201412/data/";

	function getData(data) {
		if (getCookie("welcomepage") === undefined || getCookie("welcomepage") === null) {
		    $(".welcomeDiv").show();
		    initWelcome(data.brandList);
		    setCookie("welcomepage", "true");
		}
		initBlock1(data.blockList1);
		initBlock2(data.blockList2);
		initBlock3(data.blockList3);
		initBlock4(data.blockList4);
		initNavigator(data.naviList);		
	}

	if (isLocal) {
		getData(data);
	} else {
		$.ajax({
			url: dataUrl,
			dataType: "json",
			success: function(data) {
				getData(data);
			}
		});		
	}







	function initWelcome(brandList) {
		function url(url) {
			return "url(" + encodeURI(url) + ")";
		}
		(function() {
			var html="";
			var count=0;
			for(var i=0,max=brandList.length;i<max;i++) {
				html+="<div><a href=\"" + brandList[i].url + "\"><img src=\"" + brandList[i].img + "\"></a></div>";
				count++;
			}
			$(".brandDiv").html("<span>"+html+"</span>");
			$(".brandDiv>span>div").css("width",120);
			//$(".brandDiv").css({"left":"50%","margin-left":$(".brandDiv").width()/-2});
			$(".brandDiv>span>div>a>img").load(function() {
				$(this).parent().parent().css("min-width",$(this).width());
				if ($(".brandDiv").attr("style")===undefined) {
					$(".brandDiv").css("margin-top",-$(".brandDiv").height()/2);
				}
			});
			$("body").css("overflow","hidden");
			function hideWelcomeDiv() {
				
				$("body").css("overflow","auto");
				$(".welcomeDiv").animate({"margin-top":-$(window).height()},function() {
					$(".welcomeDiv").hide();
				});
				
			}
			$(".scrollDownDiv").click(hideWelcomeDiv);
			setTimeout(hideWelcomeDiv,5000);
			if ($(window).scrollTop()!==0) {
				hideWelcomeDiv();
			}
		})(); //init
	}
	function initBlock1(data) {
		var $blockDiv1=$(".homeDiv>.blockDiv1");
		(function() {
			var	$box=$blockDiv1.find(">.box"),
				html="";
			for(var i=data.length;i--;) {
				html+="<a href=\"" + data[i].url +"\"><img src=\"" + data[i].img + "\"></a>";
			}
			$box.html(html);
			var $imgs=$box.find(">a>img");
			$(window).resize(function() {
				$imgs.width($(window).width()<1200? 1200 : $(window).width());
				$box.removeAttr("style");
				$box.height($imgs.height());
			}).resize();
			$imgs.load(function() {
				$box.height($(this).height());
			});
		})();
		(function() {
			function prev() {
				var $a = $blockDiv1.find(">.box>a");
				if (!$a.is(":animated")) {
					if ($a.filter(":visible").length === $a.length) {
						$a.not(":first").not(":last").hide();
						$a.filter(":last").fadeOut(delay,function() {
							getCurrentIndex();
						});
					} else {
						$a.filter(":hidden:first").fadeIn(delay,function() {
							getCurrentIndex();
						});
					}
				}
			}
			function next() {
				var $a = $blockDiv1.find(">.box>a");
				if (!$a.is(":animated")) {
					if ($a.filter(":visible").length>1) {
						$a.filter(":visible:last").fadeOut(delay,function() {
							getCurrentIndex()
						});
					} else {
						$a.filter(":first").fadeOut(delay);
						$a.filter(":last").fadeIn(delay,function() {
							$a.show();
							getCurrentIndex();
						});
					}
				}
			}
			function move(index) {
				var $a = $blockDiv1.find(">.box>a");
				if (!$a.is(":animated")) {
					index = ($a.length-1)-index;
					var formIndex=$a.filter(":visible:last").index();
					if (formIndex > index) {
						$a.hide();
						$a.eq(formIndex).show();
						$a.eq(index).show();
						$a.eq(formIndex).fadeOut(delay,function() {
							$a.filter(":lt(" + index +")").show();
							getCurrentIndex();
						});
					}
					if (formIndex < index) {
						$a.eq(index).fadeIn(delay,function() {
							$a.filter(":lt(" + index +")").show();
							getCurrentIndex();
						});
					}
				}
			}	
			function getCurrentIndex() {
				var $a = $blockDiv1.find(">.box>a");
				var index = $a.length-$a.filter(":visible:last").index();
				$control.find(".current").text((index<10? "0":"")+index);
				$control.find(".navidot>div.active").removeClass();
				$control.find(".navidot>div").eq(index-1).addClass("active");
			}	
			function run() {
				next();
				setTimeout(run,5000);
			}		
			var $control=$blockDiv1.find(".control"),
				delay=1000;
			$control.find(".total").text((data.length<10? "0" : "") + data.length);
			$control.find(".flag.right").click(function() {
				next();
			});
			$control.find(".flag.left").click(function() {
				prev();
			});
			var html="";
			for(var i=data.length;i--;) {
				html+="<div";
				if (i+1===data.length) {
					html += " class=\"active\"";
				}
				html += ">" + (data.length-i) + "</div>";
			}
			$control.find(".navidot").html(html);
		    $control.find(".navidot").css("margin-left", -parseInt($control.find(".navidot").width() / 2));
			$control.find(".navidot>div").click(function() {
				var index = $(this).index();
				move(index);
			});
			setTimeout(run,5000);
		})();
	}
	function initBlock2(data) {
		function swap($imgs) {
			$imgs.stop(true,false);
			if ($imgs.filter(":visible").length<2) {
				$imgs.filter(":last").fadeIn(1000);
			} else {
				$imgs.filter(":visible:last").fadeOut(1000);	
			}
		}
		function run() {
			var $items = $(".w200h200>a,.w400h400>a,.w800h400>a");
			var index = parseInt(Math.random()*$items.length,10);
			swap($items.eq(index).find(">img"));
			setTimeout(run,3000);
		}
		function generate($item,item) {
			var html="";
			html += "<a href=\"" + item.url + "\">";
			html += "<img src=\"" + item.img2 + "\">";
			html += "<img src=\"" + item.img1 + "\">";
			html += "</a>";
			$item.html(html);
		}
		generate($(".w400h400:eq(0)"),data.item01);
		generate($(".w400h400:eq(1)"),data.item02);
		generate($(".w400h400:eq(2)"),data.item03);
		generate($(".w200h200:eq(0)"),data.item04);
		generate($(".w200h200:eq(1)"),data.item05);
		generate($(".w200h200:eq(2)"),data.item06);
		generate($(".w200h200:eq(3)"),data.item07);
		generate($(".w800h400:eq(0)"),data.item08);
		generate($(".w800h400:eq(1)"),data.item09);
		generate($(".w400h400:eq(4)"),data.item10);
		$(".w200h200>a,.w400h400>a,.w800h400>a").on("mouseenter mouseleave",function() {
			swap($(this).find(">img"));
		});
		//setTimeout(run,3000);
	}
	function initBlock3(data) {
		function run() {
			var scrollTimes = times;
			var nowAt = parseInt($(".inbox").css("margin-left"),10);
			if (nowAt!==0) {
				scrollTimes =(1+nowAt/(data.length*300))*times;
			}
			$(".inbox").animate({"margin-left":-data.length*300},scrollTimes,"linear",function() {
				$(".inbox").css("margin-left",0);
				run();
			});
		}
		function move(direction) {
			if (direction<0) {
				$(".inbox").stop(true,true).animate({"margin-left":"-=20"},50,function() {
					if (parseInt($(".inbox").css("margin-left"),10)<-data.length*300) {
						$(".inbox").css("margin-left",0);
					}
				});
			} else {
				$(".inbox").stop(true,true).animate({"margin-left":"+=20"},50,function() {
					if (parseInt($(".inbox").css("margin-left"),10)>=0) {
						$(".inbox").css("margin-left",-data.length*300);
					}
				});
			}
		}
		var times=5000*data.length,
			html="";
		for(var i=0,max=data.length;i<max;i++) {
			html+="<a href=\"" + data[i].url + "\"><img src=\"" + data[i].img + "\"></a>";
		}
		html+=html;
		$(".inbox").html(html).width(data.length*2*300);
		$(".inbox").mouseenter(function() {
			$(this).stop();
		}).mouseleave(function() {
			run();
		});
		$(".inbox").mousewheel(function(e){
			move(e.deltaY);
			e.preventDefault();
		});
		run();
	}
	function initBlock4(data) {
		function formatNumber(str) {
			if(str.length <= 3){
				return str;
			} else {
				return formatNumber(str.substr(0,str.length-3))+','+str.substr(str.length-3);
			}
		}
		var html="";
		for (var i=0,max=data.length;i<max;i++) {
			html += "<div";
			if ((i+1)%4===0) {
				html += " class=\"end\"";
			}
			html += ">";
			html += "<img class=\"itemnum\" src=\"http://www.ingapphoto.com.tw/INGAP/Home/RANKINGS/Label/R" + (i+1) + ".png\">";
			html += "<a href=\"" + data[i].url + "\"><img src=\"" + data[i].img + "\"></a>";
			html += "<div class=\"brand\">" + data[i].brand + "</div>";
			html += "<div class=\"text\">" + data[i].text + "</div>";
			html += "<div class=\"price\">";
			//if (data[i].originPrice && data[i].originPrice>0) {
			//    html += "<span class=\"origin\">NT:$" + formatNumber(data[i].originPrice.toString()) + "</span>";	
			//}
			//html += "<span>NT:$" + formatNumber(data[i].price.toString()) + "</span>";
			html += "<span>NT:$" + formatNumber(data[i].originPrice.toString()) + "</span>";
			html += "</div>";
			html += "</div>";
		}
		$(".blockDiv4>.row").html(html);
	}
	function initNavigator(data) {
		for (var i=0,max=data.length;i<max;i++) {
			$(".naviDiv>div>.text").eq(i).text(data[i]);
		}
		$(window).scroll(function() {
			function show(index) {
				$(".naviDiv>div>.navi" + index).addClass("selected");
				$(".naviDiv>div>.navi" + index).next().css("visibility","visible");
			}
			var scrollTop = $(window).scrollTop();
			$(".naviDiv>div>.navi").removeClass("selected");
			$(".naviDiv>div>.text").css("visibility","hidden");				
			if (scrollTop>=$(".blockDiv4").offset().top-78) {
				show(4);
			} else if (scrollTop>=$(".blockDiv3").offset().top-78) {
				show(3);
			} else if (scrollTop>=$(".blockDiv2").offset().top-78) {
				show(2);
			} else {
				show(1);
			}
		});
		for (var i=0;i<5;i++) {
			setTimeout(function() {
				$(window).scroll();
			},250*i);	
		}
		$(".naviDiv>div>.navi").mouseenter(function() {
			$(this).addClass("selected");
			$(this).next().css("visibility","visible");
		}).mouseleave(function() {
			$(window).scroll();
		}).click(function() {
			var index = $(".naviDiv>div>.navi").index(this)+1;
			var scrollTop = $(".blockDiv" + index).offset().top;
			$("html, body").animate({ scrollTop: scrollTop}, 1000);
		});
	}
});