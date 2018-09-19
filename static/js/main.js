$(function () {

    //init Blazy
    var bLazy = new Blazy({
        success: function (ele) {
            // Image has loaded
            // Do your business here
        },
        error: function (ele, msg) {
            if (msg === 'missing') {
                // Data-src is missing
            } else if (msg === 'invalid') {
                // Data-src is invalid
            }
        }
    });

    //Mobile nav
    $(".mobile-nav-toggle").click(function () {
        $(".mobile-nav").show(400, function () {
            // Animation complete.
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

    //Dark Mode Toggle
    $(".dark-mode-toggle").click(function () {
        $("body").toggleClass("dark-mode");
    });

});