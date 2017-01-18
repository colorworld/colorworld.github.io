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

        }
        var  str2= "div." + this.id;
        $(str2).slideDown(500);


    })
});
