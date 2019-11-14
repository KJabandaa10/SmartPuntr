$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 10,
  autoplay: true,
  lazyload: true, // check this
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});
$(window).on("load", function() {
  owl.trigger("play.owl.autoplay", [2000]);
});
