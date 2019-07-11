$(function () {

    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });

    //Mobile nav
    $(".Mobile-nav-toggle").click(function () {

        $(".Mobile-nav").toggle();

        $("body").addClass("nav-open");
    });

    $(".Form--contact").submit(function(e) {
        e.preventDefault();
        
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            alert("Thank you!");
        });
    });
    
});