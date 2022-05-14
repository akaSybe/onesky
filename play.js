// Закрытие по нажатию на оверлей
$('.t450__overlay_bg').click(function(){
    $('.t450__close').click();
});

// Закрытие по нажатию на ECS
$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        if($('.t450__overlay').hasClass('t450__menu_show')){
            $('.t450__close').click();
        }
    }
});

// Оверлей
$(document).ready(function(){
    $('.t450__overlay').attr("style", "opacity: 0 !important;transition: 300ms !important;");
    $('.t450__overlay_bg').attr("style", "display: none;");
    // $('.t450__overlay_bg').attr("style", "opacity: 0 !important;transition: 300ms !important;background-color: rgba(255,0,0,0) !important;");
});

$('.t450__burger_container').click(function(){
    $('.t450__overlay').attr("style", "opacity: 1 !important;display: block !important;z-index: 99999 !important;transition: 300ms !important;");
    $('.t450__overlay_bg').fadeIn(300);
    // $('.t450__overlay_bg').attr("style", "opacity: 1 !important;transition: 300ms !important;background-color: rgba(255,0,0,0.6) !important;");
});

$('.t450__close, .t450__overlay').click(function(){
    $('.t450__overlay').attr("style", "opacity: 0 !important;display: block !important;z-index: 99999 !important;transition: 300ms !important;");
    $('.t450__overlay_bg').fadeOut(300);
    // $('.t450__overlay_bg').attr("style", "opacity: 0 !important;transition: 300ms !important;background-color: rgba(255,0,0,0) !important;");
    setTimeout(function(){
        $('.t450__overlay').attr("style", "opacity: 0 !important;display: none !important;transition: 300ms !important;");
        // $('.t450__overlay_bg').attr("style", "opacity: 0 !important;transition: 300ms !important;background-color: rgba(255,0,0,0) !important;");
    }, 310);
});