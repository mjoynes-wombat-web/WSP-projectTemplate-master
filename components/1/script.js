/**
 * Created by Simeon on 12/6/2015.
 */
$(document).ready( function() {

    $('.next').click(function () {
        var $visibleSlide = $('ul li:visible');
        $visibleSlide.fadeOut();
        $visibleSlide.next().fadeIn();
    });

    $('.prev').click(function () {
        var $visibleSlide = $('ul li:visible');
        $visibleSlide.fadeOut();
        $visibleSlide.prev().fadeIn();

    })

});