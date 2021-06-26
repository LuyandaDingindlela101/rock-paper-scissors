const moves_list = ["rock", "paper", "scissor"];

let user_move = "";
let rock_btn = document.querySelector(".rock-btn");
let paper_btn = document.querySelector(".paper-btn");
let countdown_text = document.querySelector(".countdown");
let scissors_btn = document.querySelector(".scissors-btn");

rock_btn.addEventListener("click", () => {
     let user_move = "rock";
     let computer_move = getComputerMove();

     let winner = checkWinner(user_move, computer_move);
     console.log(winner);
     // displayWinner(winner);
     //   UPDATE SCORE CARD
});


//  FUNCTION WILL RETURN THE COMPUTERS MOVE
function getComputerMove () {
     //   GET A RANDOM NUMBER BETWEEN 0 - 10
     random_number = Math.floor((Math.random() * 10) + 1);
     console.log(random_number);
     //   CHECK IF THE NUMBER IS MORE THAN 2 OR NOT
     while (random_number > 2) {
          //   IF IT IS, CALL THE getComputerMove() FUNCTION
          getComputerMove();
     }
     //   GET THE MOVE FROM THE moves_list AT THE INDEX OF THE random_number
     return moves_list[random_number];          
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

function displayWinner() {

}