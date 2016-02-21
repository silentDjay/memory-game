$(document).ready( function () {
  "use strict";

// I got almost all of my clock information from here: http://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer

  var secondsUntilGame = 11;

  var countdownID = setInterval(function() {
    secondsUntilGame = secondsUntilGame - 1;//subtract one from the variable
    $('.gameClock').text("Your game starts in " + secondsUntilGame + "...");
    console.log(secondsUntilGame);
    if (secondsUntilGame < 1){// once secondsUntilGame reaches zero...
      clearInterval(countdownID);//stop the countdown
    }
  }, 1000);//this happens every second until it doesn't happen anymore

  function elapsedTime(total_seconds) {
    function clockNums(num) {
      return ( num < 10 ? "0" : "" ) + num; // if num is a single digit, add a zero in front of it
    }

    var seconds = Math.floor(total_seconds);// round the seconds down to integers

    var minutes = Math.floor(total_seconds / 60); // add a minute every 60 seconds
    total_seconds = total_seconds % 60;//make sure seconds count resets at 60

    seconds = clockNums(total_seconds);//pad single digit second counts with a zero (see above)

    var currentTime = minutes + "'" + seconds + "\""; // display time like this: [minutes]'[seconds]"

    return currentTime; // the end product of the elapsedTime function
  }

  var elapsed_seconds = 0;//start the clock at zero seconds

  setTimeout(function() { //delay the game timer starting
    setInterval(function() {
      elapsed_seconds = elapsed_seconds + 1;//add 1 to elapsed_seconds
      $('.gameClock').text("Game clock: " + elapsedTime(elapsed_seconds));
    }, 1000);//every second
  }, 11000);// by 11 seconds

  var flippedIcons = [];//this is the array which will contain flipped card's icon's classes ($(this).children().getClass() or something like that)
  var flippedCards = [];//this is the array which will contain no more than the last two flipped cards $(this)

  $(".card").on("click", function () { // when any card is clicked...
    if ($(this).attr("class").includes("cardFlip")) {// IF the card already has class CardFlip
      return false; //do nothing
    } else {
      $(this).addClass("cardFlip"); //1. flip the card
      flippedIcons.push($(this).children().attr("class"));//2. add THIS card's icon's class to flippedIcons[]
      flippedCards.push($(this));//3. add THIS to flippedCards[]
      if (flippedIcons.length === 2){// IF flippedIcons[].length === 2
        if (flippedIcons[0] === flippedIcons [1]) {//do the icons on the flipped cards match?
          console.log("match");// hooray! match!. uhh.
          flippedCards = [];// empty array flippedCards
          flippedIcons = [];// empty array flippedIcons
        } else {
          console.log("not a match");
          setTimeout(function() { //delay what's inside this thing
            $(flippedCards[0]).removeClass("cardFlip");//removes cardFlip class
            $(flippedCards[1]).removeClass("cardFlip");//from both .card (s)
            // 2. turn a full heart to an empty heart (or just remove a heart)
            flippedCards = [];// empty array flippedCards
            flippedIcons = [];// empty array flippedIcons
          }, 500); // by 1 second
        }
      } else {
        return false; // do nothing (you need another card to be clicked)
      }
    }
  });




});
