$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});
$(window).on("load", function() {
  owl.trigger("play.owl.autoplay", [2000]);
});
