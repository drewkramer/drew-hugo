const cl = cloudinary.Cloudinary.new({ cloud_name: 'drewkramer' })
cl.responsive()

$(function () {

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