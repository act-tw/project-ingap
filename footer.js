$(function() {
	function checkcopyright() {
		if ($(window).width()<=1240) {
			$(".footerright").hide();
		} else {
			$(".footerright").show();
		}
	}
	$("#footer").on({
		mouseenter: function() {
			setTimeout(function() {
				if ($(window).width()<=1240) {
					$("#footer").animate({"height":$("#footer_menu").height()+65});
				}
			},925);
		},
		mouseleave: function() {
			setTimeout(function() {
				if ($(window).width()<=1240) {
					checkcopyright();
				}
			},400);
		}
	});
	$(window).resize(function() {
		checkcopyright();
	});
	checkcopyright();
    function showFooter() {
        $('#footer div.footerright').hide();
        $('.block1').animate({
            'width': '210px'
        }, 250);
        $('.block2').animate({
            'width': '195px'
        }, 250);
        $('.block3').animate({
            'width': '250px'
        }, 250);
        $('.block4').animate({
            'width': '160px'
        }, 250);
        $('#footer_menu h1').animate({
            'font-size': '16px'
        }, 250, function () {
            $('#footer').stop(false, false).animate({
                height: '290px',
                'padding-top': '15px'
            }, 250);
            $('#footer div.footerright').show().css({
                "bottom": "15px", "width": "100%", "right": "0"
            }).css("top", "auto");
        });
        $('.subblock').show();
        $('#footer_menu .block5').animate({
            'margin-top': '0px'
        }, 200);
        $("#footer_openclose").text("-");
        $("#footer").css({ "cursor": "default" });

    }
    function hideFooter() {
        $('#footer div.footerright').hide();
        $('.block1,.block2,.block3,.block4').animate({
            'width': '90px'
        }, 250);
        $('#footer_menu h1').animate({
            'font-size': '10px'
        }, 250, function () {
            $('#footer').stop(false, false).animate({
                height: '30px',
                'padding-top': '0px'
            }, 250);
            $('#footer div.footerright').css({ "right": "30px", "top": "0px", "width": "", "bottom": "" }).show();
        });
        $('.subblock').hide();
        $("#footer_openclose").text("+");
        $("#footer").css({ "cursor": "pointer" });
    }
    $("#footer").hoverIntent({
        interval: 200,
        over: showFooter,
        timeout: 0,
        out: hideFooter
    });
});