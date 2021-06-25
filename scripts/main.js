const moves_list = ["ROCK", "PAPER", "SCISSORS"];

let user_move = "";
let rock_btn = document.querySelector(".rock-btn");
let paper_btn = document.querySelector(".paper-btn");
let countdown_text = document.querySelector(".countdown");
let scissors_btn = document.querySelector(".scissors-btn");

rock_btn.addEventListener("click", () => {
     user_move = "rock";
     computer_move = getComputerMove();

     console.log(computer_move);
});

function countdown () {
     let timer;
     //   CREATE A LIST OF THE MOVES THAT WILL ACT AS THE TIMER
     //   GET THE countdown_text ELEMENT
     let countdown_text = document.querySelector(".countdown");

     //   CHANGE THE countdown_text STYLE FROM DISPLAY: NONE TO DISLAY BLOCK
     countdown_text.style.display = "block";

     //   NOW, WE LOOP THROUGH THE move_list 
     moves_list.forEach(move => {
          //   WE SET AN INTERVAL OF ONE SECOND 
          timer = setInterval(function() { 
               console.log("rund");
               console.log(move);
               //   UPDATE THE VALUE OF THE countdown TO EQUAL THE move
               countdown.textContent = move;
          }, 1000);
     });

     clearInterval(timer); 
}

function getComputerMove () {
     random_number = Math.floor((Math.random() * 10) + 1);
     console.log(random_number);
     if (0 <= random_number <= 3) {
          console.log(moves_list[random_number]);
          return moves_list[random_number];          
     } else {
          getComputerMove();
     }
}