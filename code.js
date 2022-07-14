var totalChips = 1
var playerChips = 0
//1 = Easy, 2 = Medium, 3 = Hard
var difficulty = 1
var playerNum = 1;
var cpu = false;

var username = sessionStorage.getItem("username");
var winner = sessionStorage.getItem("winner");

document.getElementById("player").innerHTML = username + "'s Turn"

// Checks if player name is empty when name is submitted
function playerName() {
    const player1 = document.getElementById("player1").value;
    if (!player1) {
        alert("Please enter a name.")
    } else {
        document.getElementById("greeting").innerHTML = "Welcome " + player1;
        sessionStorage.setItem("username", player1);
    }
}

// Checks if player name is empty when "Start Game" button is clicked
// If empty, redirect back to home
function checkName() {
    const username = sessionStorage.getItem("username");
    if (!username) {
        alert("Please enter a name.")
        const start = document.getElementById("start");
        start.href = "home.html";
    }
}

function chipCount(id) {
    if (playerChips > 2) {
        alert("You cannot select more than three chips.")
        document.getElementById('counter').value = 3;
    } else {
        document.getElementById('counter').value = ++playerChips;
        document.getElementById(id).style.visibility = "hidden";
        totalChips++
    }

    if (totalChips == 13) {
        endGame()
    }
}

// function setCpu(){
//     cpu = true;
// }

// function cpuMove(){
//     if (difficulty == 1) {
//         //Removes one of the visible chips

//     } else if (difficulty == 2) {
//         //Removes random 1 or 2 chips from visible chips

//     } else if (difficulty == 3) {
//         //Removes random 1 to 3 from visible chips
//     }
// }

function endGame() {
    location.href = "results.html";
    console.log(winner);
    if (winner == 1)
    {
        document.getElementById("result").innerHTML = username + " Wins!";
    } else if (winner == 2) {
        document.getElementById("result").innerHTML = "Player 2 Wins!"
    }
}

function endTurn() {
    if (cpu == false && playerNum == 1) {
        playerChips = 0;
        playerNum++
        sessionStorage.setItem("winner", playerNum);
        alert("It is now player 2's turn")
        document.getElementById('player').innerHTML = "Player 2's Turn"
        document.getElementById('counter').value = 0;
    // } else if (cpu == true && playerNum == 1) {
    //     playerChips = 0;
    //     document.getElementById('player').innerHTML = "Cpu's Turn"
    //     sessionStorage.setItem("winner", playerNum);
    //     playerNum++
    //     alert("It is now the Cpu's turn")
    //     document.getElementById('counter').value = 0;
    } else if (playerNum == 2) {
        playerChips = 0;
        playerNum--
        sessionStorage.setItem("winner", playerNum);
        alert("It is now " + username + "'s turn")
        document.getElementById('player').innerHTML = username + "'s Turn"
        document.getElementById('counter').value = 0;
    }
}

// If player plays again, the saved username will be set to empty
function returnMenu() {
    sessionStorage.setItem("username", "");
}