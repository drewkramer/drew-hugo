$(function () {

    //Mobile nav
    $(".mobile-nav-toggle").click(function () {
        $(".mobile-nav").show(400, function () {
        });
        $("body").addClass("nav-open");
        $(".mobile-nav").addClass("open");
    });

    $(".mobile-nav__close").click(function () {
        $(".mobile-nav").hide(400, function () {
        });
        $("body").removeClass("nav-open");
        $(".mobile-nav").removeClass("open");
    });

});