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

      if (flippedIcons.length === 2){// IF flippedIcons[].length === 2
        if (flippedIcons[0] === flippedIcons [1]) {//do the icons on the flipped cards match?
          console.log("match");// hooray! match!. uhh.
          flippedCards = [];// empty array flippedCards
          flippedIcons = [];// empty array flippedIcons
        } else {// ELSE
          console.log("not a match");
          setTimeout(function() { //delay what's inside this thing
            $(flippedCards[0]).removeClass("cardFlip");//removes cardFlip class
            $(flippedCards[1]).removeClass("cardFlip");//from both .card (s)
            // 2. turn a full heart to an empty heart (or just remove a heart)
            flippedCards = [];// empty array flippedCards
            flippedIcons = [];// empty array flippedIcons
          }, 500); // by 1 second
        }
      } else {// ELSE - (if flippedCards[].length < 2) IT SHOULD ONLY BE SHORTER THAN 2!!!!!
        return false; // return false (you need another card to be clicked)
      }
    } // } END ELSE CASE FROM THE TOP!!!
  });




});
