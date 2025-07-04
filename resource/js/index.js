// $(document).ready(function(){
//     $('h1').click(function(){
//         $(this).css('background-color','#ff0')
//     })
// })
$('.js--section-features').waypoint(function(direction){
    if(direction=='down'){
       $('nav').addClass('sticky')
    }
    else{
       $('nav').removeClass('sticky')
    }
},{
     offset: '80px'
})
$('.js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1500)
})
$('.js--scroll-to-features').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1500)
})
// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated animate__rubberBand')
  },{
    offset:'50%'
  })
  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated animate__bounceInLeft')
  },{
    offset:'50%'
  })
  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated animate__rubberBand')
  },{
    offset:'50%'
  })
  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated animate__pulse')
  },{
    offset:'50%'
  })
