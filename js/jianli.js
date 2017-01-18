/**
 * Created by li on 2017/1/18.
 */

var lis = $(".uls li");
var divs = $(".tab-content");

$(function () {
    $(".uls li").on("click", function () {
        for (var i = 0; i < lis.length; i++) {

            lis[i].id = i;
            str = "div." + lis[i].id;
            $(str).hide();
            str = "";
            ids = "#" + i;//取得 id
            $(ids).removeClass("blue");//移除所以li列表的背景
        }
        $(this).addClass("blue");
        var str2 = "div." + this.id;
        $(str2).slideDown(1300);
    })
});
