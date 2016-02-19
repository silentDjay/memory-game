$(document).ready( function () {
  "use strict";

  //when .card is clicked, do the thing

  $(".card").on("click", function () {
    $(this).toggleClass("cardFlip");
  });




});
