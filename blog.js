$(function() {
    Nav.whatsnew(25,"A.D.M.J");
    var params = QueryString("type") !== "" ? "&type=" + QueryString("type") : "";
    params += QueryString("key") !== "" ? "&key=" + QueryString("key") : "";
    params += QueryString("p") !== "" ? "&p=" + QueryString("p") : "";
    if (params==="") {
        params="?type=default";
    } else {
        params="?"+params.substr(1);
    }
    $.getJSON("../shop/customuc/c51ingap201412/data/" + params,function(data){
        function monthName(month) {
            var names=["January","February","March","April","May","June","July","August","September","October","November","December"];
            return names[parseInt(month,10)-1];
        }
        (function() {
            var html="";
            for (var i=0,max=data.category.length;i<max;i++) {
                html+="<li><a href=\"" + location.pathname + "?no=1&type=category&key=" + data.category[i] + "\">" + data.category[i] + "</a></li>";
            }
            $("#category").html(html);
        })(); //category
        (function() {
            var html="";
            for (var i=0,max=data.archive.length;i<max;i++) {
                html+="<li><a href=\"" + location.pathname + "?no=1&type=archive&key=" + data.archive[i] + "\">" + monthName(data.archive[i].substring(4)) + " " + data.archive[i].substring(0,4) + "</a></li>";
            }
            $("#archive").html(html);
        })(); //archive
        (function() {
            var html="";
            for (var i=0,max=data.article.length;i<max;i++) {
                html+="<div class=\"box\">";
                html+="<div class=\"title\"><span>" + data.article[i].title + "</span><span class=\"date\">";
                html+=data.article[i].date.substring(8)+" "+monthName(data.article[i].date.substring(5,7))+" ";
                html+=data.article[i].date.substring(0,4);
                html+="</span></div>";
                html+="<div class=\"content\">" + data.article[i].content + "</div>";
                html+="</div>";
            }
            $("#article").html(html);
        })(); //article
        (function() {
            var params = QueryString("type") !== "" ? "&type=" + QueryString("type") : "";
            params += QueryString("key") !== "" ? "&key=" + QueryString("key") : "";
            if (params==="") {
                params="&type=default";
            }
            var p = QueryString("p");
            if (p === "") {
                p=1;
            }
            p=parseInt(p,10);
            var html="";
            if (data.hasPrev) {
                html+="<a href=\"" + location.pathname + "?no=1" + params + "&p=" + (p-1) + "\"";
                if (data.hasNext) {
                    html+=" class=\"mr10\"";
                }
                html+="><img src=\"http://www.admj.co.jp/images/contents/whatsnew/page-nav_new.jpg\"></a>";
            }
            if (data.hasNext) {
                html+="<a href=\"" + location.pathname + "?no=1" + params + "&p=" + (p+1) + "\"><img src=\"http://www.admj.co.jp/images/contents/whatsnew/page-nav_older.jpg\"/></a>";
            }
            $(".blogNavi").html(html);
        })(); //navi
    });
});