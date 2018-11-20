$(function () {

    //Mobile nav
    $(".Mobile-nav-toggle").click(function () {
        $(".Mobile-nav").show(400, function () {
        });
        $("body").addClass("nav-open");
        $(".Mobile-nav").addClass("open");
    });

    $(".Mobile-nav__close").click(function () {
        $(".Mobile-nav").hide(400, function () {
        });
        $("body").removeClass("nav-open");
        $(".Mobile-nav").removeClass("open");
    });

});