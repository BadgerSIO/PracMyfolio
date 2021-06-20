$(function() {

    var menuoffset = $('.mainmenu').offset().top;
    $(window).on('scroll', function() {
    
        var scroll = $(window).scrollTop();
        if (scroll > menuoffset) {
        
            $(".mainmenu").addClass('menufix');
        }else{
            $(".mainmenu").removeClass('menufix');
        }
    });

    $('.filter-container').filterizr();

});

