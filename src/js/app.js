$(function () {

    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });

    //Mobile nav
    $(".Mobile-nav-toggle").click(function () {
        $(".Mobile-nav").toggle(400, function () {
        });
        $("body").addClass("nav-open");
        $(".Mobile-nav").addClass("open");
    });

});