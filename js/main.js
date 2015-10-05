$(document).ready(function() {
  $('#far-clouds').pan({fps: 30, speed: 0.7, dir: 'left'});
  $('#near-clouds').pan({fps: 30, speed: 1, dir: 'left'});

  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
});