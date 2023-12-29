import $ from "jquery";

$(document).on('mousemove', function(e){
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    $('.mouse').css('top', e.pageY-scrollTop);
    $('.mouse').css('left', e.pageX+5);
    $('#portfolio').mouseenter(function(){
        $('.mouse').html("some of my projects");
    }).mouseleave(function() {
        $('.mouse').html("💥")
    });
    $('iframe').mouseenter(function(){
        $('.mouse').html("some of my inspirations");
    }).mouseleave(function() {
        $('.mouse').html("☻")
    });
    $('#footer').mouseenter(function(){
        $('.mouse').html("contact me");
    }).mouseleave(function() {
        $('.mouse').html("☺");
    });
    $('#nav-1').mouseenter(function(){
        $('.mouse').html("home");
    }).mouseleave(function() {
        $('.mouse').html("💥");
    });
    $('#nav-2').mouseenter(function(){
        $('.mouse').html("book");
    }).mouseleave(function() {
        $('.mouse').html("☺");
    });
    
});


