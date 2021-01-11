// Add custom JavaScript here
import jQuery from "jquery";

jQuery(function($) {
  $("#SubHeaderComponent").slick({
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    variableWidth: true,
  });
});
