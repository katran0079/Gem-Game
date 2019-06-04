var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var wins = 0;
var losses = 0;
var gemCounter = 0;
var units;

//audio fun
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sound/cave.mp3");
$(".playMusic").on("click", function() {
  audioElement.play();
});
$(".pauseMusic").on("click", function() {
  audioElement.pause();
});

var deathSound = document.createElement("audio");
deathSound.setAttribute("src", "assets/sound/death.mp3");

var museum = document.createElement("audio");
museum.setAttribute("src", "assets/sound/museum.mp3");

//actual functions

function startgame() {
  gemCounter = 0;

  units = Math.floor(Math.random() * (300 - 120) + 120);
  gem1 = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
  gem2 = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  gem3 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
  gem4 = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
  $("#gemsCollected").text(0 + " /" + units + " units");
  console.log(gem1);
}

function playGame() {
  $("#gem1").on("click", function() {
    gemCounter = gemCounter + gem1;
    console.log(gem1);
    $("#gemsCollected").text(gemCounter + " /" + units + " units");
    winCondition();
  });
  $("#gem2").on("click", function() {
    gemCounter = gemCounter + gem2;
    $("#gemsCollected").text(gemCounter + " /" + units + " units");
    winCondition();
  });
  $("#gem3").on("click", function() {
    gemCounter = gemCounter + gem3;
    $("#gemsCollected").text(gemCounter + " /" + units + " units");
    winCondition();
  });
  $("#gem4").on("click", function() {
    gemCounter = gemCounter + gem4;
    $("#gemsCollected").text(gemCounter + " /" + units + " units");
    winCondition();
  });
  $("#Reset").on("click", function() {
    startGame();
  });
}

function winCondition() {
  if (gemCounter > units) {
    alert(
      "As you strike the walls with your pickaxe, the earth around you begins to shake violently. Rocks begin to fall from the ceiling."
    );
    alert(
      "Luckily you manage to make it unscathed back to the entrance. However you find that the entrance has caved in."
    );
    alert(
      "You scream for help, only to hear your cries echo off the walls. Cut off from the rest of the world, you would continue to remain here for the rest of your days. Your greed has cost you everything."
    );
    deathSound.play();
    alert("Game over, man.");
    deathSound.play();
    losses++;
    $("#losses").text(losses);
    startgame();
  }

  if (gemCounter === units) {
    alert("You've successfully escaped the cave with no troubles at all.");
    alert(
      "The legends were true, these gems truly are precious and priceless. Quite literally as they were virtually worthless. The only place that would accept them was the local museum as a donation. "
    );
    alert(
      "Your adventure into the cave was not fruitless however. The story of your discovery made its way across the globe."
    );
    alert(
      "Publishers want to write biographies about you. Hollywood producers are even looking into making a movie based on your story."
    );

    alert("Working Title 'Indiana Jones'");
    museum.play();

    wins++;
    $("#wins").text(wins);
    startgame();
  }
}

startgame();
playGame();
winCondition();
