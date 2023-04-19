import $ from "jquery";

$(document).on('mousemove', function(e){
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    $('.mouse').css('top', e.pageY-scrollTop);
    $('.mouse').css('left', e.pageX+5);
    $('#portfolio').mouseenter(function(){
        $('.mouse').css("background-color", "#38bd95");
        $('.mouse').html("some of my projects");
    }).mouseleave(function() {
        $('.mouse').html("enjoy!")
    });
    $('iframe').mouseenter(function(){
        $('.mouse').css("background-color", "#dfb0bf");
        $('.mouse').html("some of my inspirations");
    }).mouseleave(function() {
        $('.mouse').html("☻")
    });
    $('#header').mouseenter(function(){
        $('.mouse').css("background-color", "#38bd95");
    }).mouseleave(function() {
        $('.mouse').css("background-color", "#dfb0bf");
    });
    $('#footer').mouseenter(function(){
        $('.mouse').css("background-color", "#dfb0bf");
    }).mouseleave(function() {
        $('.mouse').css("background-color", "#38bd95");
    });
});


