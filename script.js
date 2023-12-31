let myScore = 0;
let computerScore = 0;

// getRandom Integer function
function playerTwo() {
  return Math.floor(Math.random() * 3 + 1);
}

//  create function that takes your input then compares it to player2 input

function player_input(num) {
  const image = document.querySelector(".hadouken");
  console.log(image);
  x = playerTwo();
  console.log(num, x);
  // display all the result conditions of tie , win and loss
  if (num === x) {
    document.querySelector(".result-screen").innerHTML = "tie game!";
  } else if (num === 1 && x === 2) {
    document.querySelector(".result-screen").innerHTML =
      "CPU chose Parry, CPU wins!";
    computerScore++;
    image.src = "./images/chun-li-parry.gif";
  } else if (num === 2 && x === 3) {
    document.querySelector(".result-screen").innerHTML =
      "CPU chose Rapid kick, CPU wins";
    computerScore++;
    image.src = "./images/chunli-sfv-kicks.gif";
  } else if (num === 3 && x === 1) {
    document.querySelector(".result-screen").innerHTML =
      "CPU chose blossom kick, CPU wins";
    computerScore++;
    image.src = "./images/chunli-street-fighter flurry attack.gif";
  } else if (num === 1 && x === 3) {
    document.querySelector(".result-screen").innerHTML =
      "You chose Hadouken,You win!";
    myScore++;
    image.src = "./images/ryu hadouken.gif";
  } else if (num === 2 && x === 1) {
    document.querySelector(".result-screen").innerHTML =
      "You chose Parry,You win!";
    myScore++;
    image.src = "./images/ryu parry.gif";
  } else if (num === 3 && x === 2) {
    document.querySelector(".result-screen").innerHTML =
      "You chose Shoryuken,You win!";
    myScore++;
    image.src = "./images/ryu shoryuken.gif";
  }
  // put the SetTime out here
  setTimeout(() => {
    image.src = "./images/chu-li-street-fighter6-vs-ryu.gif"; // Set the default image that it will return to after your time duration
  }, 6000); // Display each image for 6 seconds

  roundCounter();
  rounds();
}

// create a function that counts the rounds that were won by player or computer

function roundCounter() {
  // if result screen = tie game then nothing added to either player round
  // else if result screen = P2 wins , add 1 round to P2 and if rounds = 1, print P2 won 1 round
  //else if result screen = P1 wins , add 1 round to P1 and if rounds = 1 , print you won 1 round
  // else if P1 rounds = 2 , then print You win the whole set!
  // else if P2 rounds = 2 , then print P2 wins the whole set!

  if (myScore === 2) {
    document.querySelector(".result-screen-two").innerHTML =
      "You won the whole set!";
  }
  if (computerScore === 2) {
    document.querySelector(".result-screen-two").innerHTML =
      "CPU won the whole set!";
  }
}

function rounds() {
  document.querySelector(
    ".p1-roundCounter"
  ).innerHTML = `Rounds won : ${myScore}`;
  document.querySelector(
    ".p2-roundCounter"
  ).innerHTML = `Rounds won : ${computerScore}`;

  //   if (myScore === 1) {
  //     document.querySelector(".p1-roundCounter").innerHTML = "Rounds won : 1";
  //   } else if (myScore === 2) {
  //     document.querySelector(".p1-roundCounter").innerHTML = "Rounds won : 2";
  //   }

  //   if (computerScore === 1) {
  //     document.querySelector(".p2-roundCounter").innerHTML = "Rounds won : 1";
  //   } else if (computerScore === 2) {
  //     document.querySelector(".p2-roundCounter").innerHTML = "Rounds won : 2";
  //   }

  if (
    document.querySelector(".result-screen").innerHTML ===
      (("tie game!" && myScore === 2) || computerScore === 2) ||
    myScore > 2 ||
    computerScore > 2
  ) {
    reset();
  }
}

function reset() {
  myScore = 0;
  computerScore = 0;
  if (myScore === 0) {
    document.querySelector(".p1-roundCounter").innerHTML = "Rounds won : 0";
    document.querySelector(".result-screen-two").innerHTML = " ";
    document.querySelector(".result-screen").innerHTML = " ";
  }

  if (computerScore === 0) {
    document.querySelector(".p2-roundCounter").innerHTML = "Rounds won : 0";
    document.querySelector(".result-screen-two").innerHTML = " ";
    document.querySelector(".result-screen").innerHTML = " ";
  }
}
// when I click an RPS option, the winner option's gif
// will be displayed.
//

// after winner gif is displayed, it will disappear in 3 seconds
// and then the default bg will be displayed again.

// notes :
//step 1 , fix p2 gif image for p2 win screen
// step 2, add the other gif images for the other win, and tie conditions
// step 3 , do the "set time out" inside the if else statement for your time duration
// step 4, change font Style
// step 5, change the rest of the asthetics



// modify music 

const audio = document.getElementById('myAudio');

audio.muted = false; // unmute the audio
audio.play(); // start playing the audio 