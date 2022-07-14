var totalChips = 1
var playerChips = 0
//1 = Easy, 2 = Medium, 3 = Hard
var Difficulty = 1
var playerNum = 1;
var cpu = false;

var username = sessionStorage.getItem("username");
var winner = sessionStorage.getItem("winner");
var winnerName = sessionStorage.getItem("winnername")
document.getElementById('player').innerHTML = username + "'s Turn"


function playerName() {
    username = document.getElementById("username").value;
    document.getElementById("welcome").innerHTML = "Welcome " + username;
    sessionStorage.setItem("username", username);

}

function chipCount(id) {
    if (playerChips > 2) {
        alert("You Cannot select more than 3")
        document.getElementById('inc').value = 3;
    } else {
        document.getElementById('inc').value = ++playerChips;
        document.getElementById(id).style.visibility="hidden";
        totalChips++
    }

    if (totalChips == 13){
        endGame()
    }
}

// function setCpu(){
//     cpu = true;
// }

// function cpuMove(){
//     if (Difficulty == 1) {
//         //Removes one of the visible chips

//     }else if (Difficulty == 2){
//         //Removes random 1 or 2 chips from visible chips

//     }else if (Difficulty == 3){
//         //Removes random 1 to 3 from visible chips
//     }
// }

function endGame(){
    if (winner == 1) {
        sessionStorage.setItem("winnername", username + " has won the game!!");
        location.href = '../NimGame/results.html';
    }else{
        sessionStorage.setItem("winnername",  "Player 2 has won the game!!");
        location.href = '../NimGame/results.html';
    }

    document.getElementById("1").innerHTML = winnerName;

}

function endTurn() {
        if (cpu == false && playerNum == 1) {
            playerChips = 0;
            playerNum++
            sessionStorage.setItem("winner", playerNum);
            alert("It is now player 2's turn")
            document.getElementById('player').innerHTML = "Player 2's Turn"
        } else if (cpu == true && playerNum == 1){
            playerChips = 0;
            document.getElementById('player').innerHTML = "Cpu's Turn"
            sessionStorage.setItem("winner", playerNum);
            playerNum++
            alert("It is now the Cpu's turn")
        } else if (playerNum == 2){
            playerChips = 0;
            sessionStorage.setItem("winner", playerNum);
            document.getElementById('player').innerHTML = username + "'s Turn"
            playerNum--
            alert("It is now " + username + "'s turn")
        }
}