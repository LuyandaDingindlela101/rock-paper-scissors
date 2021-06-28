const moves_list = ["rock", "paper", "scissor"];

let user_score = 0;
let user_move = "";
let computer_score = 0;
let rock_btn = document.querySelector(".rock-btn");
let paper_btn = document.querySelector(".paper-btn");
let countdown_text = document.querySelector(".countdown");
let modal_close_btn = document.querySelector(".close-btn");
let scissors_btn = document.querySelector(".scissors-btn");

modal_close_btn.addEventListener("click", toggleModal)

rock_btn.addEventListener("click", () => {
     let user_move = "rock";
     let computer_move = getComputerMove();

     let winner = checkWinner(user_move, computer_move);
     updateImage(user_move, computer_move)
     console.log(winner);
     updateScores(winner);
     displayWinner(winner);
})

paper_btn.addEventListener("click", () => {
     let user_move = "paper";
     let computer_move = getComputerMove();

     let winner = checkWinner(user_move, computer_move);
     updateImage(user_move, computer_move)
     console.log(winner);
     updateScores(winner);
     displayWinner(winner);
})

scissors_btn.addEventListener("click", () => {
     let user_move = "scissor";
     let computer_move = getComputerMove();

     let winner = checkWinner(user_move, computer_move);
     updateImage(user_move, computer_move)
     console.log(winner);
     updateScores(winner);
     displayWinner(winner);
})


//  FUNCTION WILL RETURN THE COMPUTERS MOVE
function getComputerMove () {
     //   GET A RANDOM NUMBER BETWEEN 0 - 10
     random_number = Math.floor((Math.random() * 10) + 1);
     console.log(random_number);
     //   CHECK IF THE NUMBER IS MORE THAN 2 OR NOT
     while (random_number > 3) {
          //   IF IT IS, CALL THE getComputerMove() FUNCTION
          getComputerMove();
     }
     //   GET THE MOVE FROM THE moves_list AT THE INDEX OF THE random_number
     return moves_list[random_number - 1];          
}

//   FUNCTION WILL CHECK FOR A TIE AND A WINNER
function checkWinner(user_move, computer_move) {
     console.log(user_move, computer_move);
     //   THIS TAKES CARE OF ALL THE TIES
     if (user_move == computer_move) {
          return "tie";
     } 

     //   IF THE USER PLAYS ROCK
     if (user_move == "rock" && computer_move == "paper") {
          return "computer";
     } else if (user_move == "rock" && computer_move == "scissor") {
          return "user";
     }
     
     //   IF THE USER PLAYS PAPER
     if (user_move == "paper" && computer_move == "rock") {
          return "user";
     } else if (user_move == "paper" && computer_move == "scissor") {
          return "computer";
     }
     
     //   IF THE USER PLAYS SCISSOR
     if (user_move == "scissor" && computer_move == "rock") {
          return "computer";
     } else if (user_move == "scissor" && computer_move == "paper") {
          return "user";
     }
}

function displayWinner(winner) {
     let winner_text = document.querySelector(".winner-text");
     if (winner == "tie") {
          winner_text.textContent = "ITS A DRAW, TRY AGAIN";
     }

     if (winner == "user") {
          winner_text.textContent = "CONGRATULATIONS, YOU WINNNNN!!!!!!";
     } 
     if (winner == "computer") {
          winner_text.textContent = "ROOKIE MISTAKE, THE COMPUTER WINS!!!!!";
     }

     toggleModal();
}

function toggleModal() {
     document.querySelector(".winner-modal").classList.toggle("active");
}

function updateScores(winner) {
     let user_wins = document.querySelector(".user-wins");
     let computer_wins = document.querySelector(".computer-wins");

     if (winner == "user") {
          user_score++;
          user_wins.textContent = user_score;
     } 
     if (winner == "computer") {
          computer_score++;
          computer_wins.textContent = computer_score;
     }
}

function updateImage(user_move, computer_move) {
     let user_image = document.querySelector(".user-image");
     let computer_image = document.querySelector(".computer-image");

     if (user_move == "rock") {
          user_image.src = "./images/rock.png";
     } else if (user_move == "paper"){
          user_image.src = "./images/paper.png";
     } else {
          user_image.src = "./images/scissors.png";
     }

     if (computer_move == "rock") {
          computer_image.src = "./images/rock.png";
     } else if (computer_move == "paper"){
          computer_image.src = "./images/paper.png";
     } else {
          computer_image.src = "./images/scissors.png";
     }
}