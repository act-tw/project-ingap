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


	var dataUrl="../shop/customuc/c51ingap201412/data/";
	$.ajax({
		url: dataUrl,
		dataType: "json",
		success: function(data) {
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
	});
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
			$(".brandDiv").html(html);
			$(".brandDiv>div").css("width",120);
			$(".brandDiv").css({"left":"50%","margin-left":$(".brandDiv").width()/-2});
			$(".brandDiv>div>a>img").load(function() {
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
		setTimeout(run,3000);
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