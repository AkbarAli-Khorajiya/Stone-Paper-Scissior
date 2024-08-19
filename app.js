// let body = document.querySelectorAll('.body');
let select = document.querySelectorAll(".select");
let content = document.querySelector(".main");
let playerScore = document.querySelector("#player");
let computerScore = document.querySelector("#computer");
let boxPlayer = document.querySelector("#p");
let boxComputer = document.querySelector("#c");
let msg = document.querySelector(".msg");
let main = document.querySelector(".main");
let con = document.querySelector(".container");
let head = document.querySelector(".head");
let playAgain = document.querySelector('.playAgain')
let playerWon = 0;
let computerWon = 0;

let playBtn = document.querySelector(".play-game");
playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  main.style.display = "flex";
  con.style.display = "none";
  head.style.display = "block";
});

function random() {
  let computerOption = ["Stone", "Paper", "Scissor"];
  let val = Math.floor(Math.random() * 3);
  return computerOption[val];
}
select.forEach((option) => {
  option.addEventListener("click", () => {
    // check for computer

    let computerChoice = random();
    if (computerChoice == "Stone") {
      boxComputer.classList = "border-blue fa-solid fa-hand-fist";
    }
    if (computerChoice == "Paper") {
      boxComputer.classList = "border-blue fa-solid fa-hand";
    }
    if (computerChoice == "Scissor") {
      boxComputer.classList = "border-blue fa-solid fa-hand-peace";
    }
    // check for player
    let playerChoice = option.innerText;
    if (playerChoice == "Stone") {
      boxPlayer.classList = "border-blue fa-solid fa-hand-fist";
    } else if (playerChoice == "Paper") {
      boxPlayer.classList = "border-blue fa-solid fa-hand";
    } else if (playerChoice == "Scissor") {
      boxPlayer.classList = "border-blue fa-solid fa-hand-peace";
    }
    //disable after option select
    select.forEach((box) => {
      box.disabled = true;
    });

    let winMsg = checkWinner(computerChoice, playerChoice);
    if (winMsg == 1) {
      playerWon++;
      msg.innerHTML = "<p class='text-center'>YOU WON !!</p>";
      playerScore.innerText = playerWon;
      setTimeout(() => {
        select.forEach((box) => {
          box.removeAttribute("disabled");
        });
        msg.innerHTML = "";
        boxPlayer.classList.remove(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
        boxComputer.classList.remove(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
      }, 2000);
    }
    if (winMsg == 0) {
      computerWon++;
      msg.innerHTML = "<p class='text-center'>YOU LOSS !!</p>";
      computerScore.innerText = computerWon;
      setTimeout(() => {
        msg.innerHTML = "";
        boxPlayer.classList.remove(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
        boxComputer.classList.remove(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
        select.forEach((box) => {
          box.removeAttribute("disabled");
        });
      }, 2000);
    }
    if (winMsg == 2) {
      msg.innerHTML = "<p class='text-center'>TIE GAME !!</p>";
      setTimeout(() => {
        select.forEach((box) => {
          box.removeAttribute("disabled");
        });
        boxPlayer.classList.remove(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
        boxComputer.classList.remove(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );

        msg.innerHTML = "";
        boxPlayer.removeAttribute(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
        boxComputer.removeAttribute(
          "fa-solid",
          "fa-hand-peace",
          "fa-hand",
          "fa-hand-fist"
        );
      }, 2000);
    }
    if (playerWon == 10) {
      setTimeout(() => {
        // body.style.backgroundColor = 'darksalmon';
        document.querySelector('.body').style.background = 'darksalmon';
        content.innerHTML = "";
        content.innerHTML = "<h1 class='mt-300' style='font-size:50px'>Congartulation...!! You Won The Match..!!</h1><br><a href='index.html'><button class='playAgain'>Play Again</button></a>";
      }, 500);
    }
    if (computerWon == 10) {
      setTimeout(() => {
        document.querySelector('.body').style.background = 'darksalmon';
        content.innerHTML = "";
        content.innerHTML = "<h1 class='mt-300' style='font-size:50px'>Better Luck...!! You Loss The Match..!!</h1><br><a href='index.html'><button class='playAgain'>Play Again</button></a>";
      }, 500);
    }
  });
});

function checkWinner(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return 2;
  } else if (computerChoice == "Stone") {
    if (playerChoice == "Paper") {
      return 1;
    } else {
      return 0;
    }
  } else if (computerChoice == "Paper") {
    if (playerChoice == "Scissor") {
      return 1;
    } else {
      return 0;
    }
  } else if (computerChoice == "Scissor") {
    if (playerChoice == "Stone") {
      return 1;
    } else {
      return 0;
    }
  }
}

playAgain.addEventListener("click", () => {
  playBtn.style.display = "none";
  main.style.display = "flex";
  con.style.display = "none";
  head.style.display = "block";
  document.querySelector('.body').style.background = '#fff';

});
