$(document).ready(function () {
    $(".footer-links-wrapper h3").on("click", function () {
      if ($(window).width() <= 768) {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
      }
    });
    $(window).on("resize", function () {
      location.reload();
    });
  });