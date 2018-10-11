const cl = cloudinary.Cloudinary.new({ cloud_name: 'drewkramer' })
cl.responsive()

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

    // //Toggle Class on Navbar
    // //caches a jQuery object containing the header element
    // var header = $("#navbar");
    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();

    //     if (scroll > 0) {
    //         header.removeClass('not-detached').addClass("is-detached");
    //     } else {
    //         header.removeClass("is-detached").addClass('not-detached');
    //     }
    // });

});