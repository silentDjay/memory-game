$(document).ready( function () {
  "use strict";

// see this link for clock information: http://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer

  var flippedIcons = [];//this is the array which will contain flipped card's icon's classes ($(this).children().getClass() or something like that)

  var flippedCards = [];//this is the array which will contain no more than the last two flipped cards $(this)

  $(".card").on("click", function () { // when any card is clicked...
    if ($(this).attr("class").includes("cardFlip")) {// IF the card already has class CardFlip
      return false; //don't do shit
    } else {// ELSE {
      $(this).addClass("cardFlip"); //1. flip the card
      flippedIcons.push($(this).children().attr("class"));//2. add THIS card's icon's class to flippedIcons[]
      flippedCards.push($(this));//3. add THIS to flippedCards[]
      console.log("flippedIcons is " + flippedIcons);
      console.log("flippedCards is " + flippedCards);

      // IF flippedIcons[].length === 2
          //IF flippedCards[0] === flippedCards[1]
            // 1. hooray! match!. uhh.
            // 2. empty arrays flippedCards AND flippedIcons
          // ELSE
            // 1. removeClass class cardFlip from everything in flippedCards[]
            // 2. empty arrays flippedCards AND flippedIcons
      // ELSE - (if flippedCards[].length < 2) IT SHOULD ONLY BE SHORTER THAN 2!!!!!
        // return false (you need another card to be clicked)

    } // } END ELSE CASE FROM THE TOP!!!
  });




});
