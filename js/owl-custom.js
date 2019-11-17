$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  autoplay: true,
  lazyload: true, // check this
  responsiveClass: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1024: {
      items: 4
    },
    1440: {
      items: 5
    }
  },
  autoplayTimeout: 2000,
  autoplayHoverPause: true
});
$(window).on("load", function() {
  owl.trigger("play.owl.autoplay", [2000]);
});
