var playerNum = 1;

// Tracks the legal amount of chips able to be taken each round (1-3)
var playerChips = 0;

// If totalChips = 13, game ends
var totalChips = 1;

var cpu = false;
// var difficulty = 1
// 1 = Easy, 2 = Medium, 3 = Hard

// Checks if Player 1 name is empty when name is submitted
function player1Name() {
    var player1 = document.getElementById("player1").value;
    if (!player1) {
        alert("Please enter a name for Player 1.")
    } else {
        // Stores Player 1's name as "p1Store"
        sessionStorage.setItem("p1Store", player1);

        // Stores message as "welcomeMsg"
        var helloP1 = "";
        helloP1 = "Welcome " + player1;
        sessionStorage.setItem("welcomeMsg", helloP1);
        document.getElementById("welcome").innerHTML = sessionStorage.getItem("welcomeMsg");

        var test = sessionStorage.setItem("test", "hello there")

        // Console Log results
        console.log(sessionStorage.getItem("p1Store"));
        console.log(sessionStorage.getItem("welcomeMsg"));
    }
}

// Checks if Player 1 name is empty when name is submitted
function player2Name() {
    var player2 = document.getElementById("player2").value;
    if (!player2) {
        alert("Please enter a name for Player 2.")
    } else {
        // Stores Player 2's name as "p2Store"
        sessionStorage.setItem("p2Store", player2);

        // Adds onto old message
        // Stores new message as "welcomeMsg"
        var helloP2 = "";
        helloP2 = " & " + player2;
        var newMsg = sessionStorage.getItem("welcomeMsg") + helloP2;
        sessionStorage.setItem("welcomeMsg", newMsg);
        document.getElementById("welcome").innerHTML = sessionStorage.getItem("welcomeMsg");

        // Console Log results
        console.log(sessionStorage.getItem("p2Store"));
        console.log(sessionStorage.getItem("welcomeMsg"));
    }
}

// Checks if Player 1 or Player 2's name is empty when "Start Game" button is clicked
// If empty, redirect back to home
function checkName() {
    var start = document.getElementById("start");
    var checkP1Name = sessionStorage.getItem("p1Store");
    var checkP2Name = sessionStorage.getItem("p2Store");

    if (!checkP1Name) {
        alert("Please enter a name for Player 1.")
        start.href = "home.html";
    }else if(cpu = false)
        if (!checkP2Name) {
            alert("Please enter a name for Player 2.")
            start.href = "home.html";
    }
}

// Player 1 goes first
// Displays Player 1's name at the start of a game
document.getElementById("player").innerHTML = sessionStorage.getItem("p1Store") + "'s Turn";
console.log(sessionStorage.getItem("p1Store"));

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

function endTurn() {
    if (playerNum == 1) {
        playerChips = 0;
        playerNum++
        sessionStorage.setItem("winCheck", playerNum);

        // Switch to Player 2's turn
        alert("It is now " + sessionStorage.getItem("p2Store") + "'s turn")
        document.getElementById("player").innerHTML = sessionStorage.getItem("p2Store") + "'s Turn";

        // Reset chip counter
        document.getElementById("counter").value = 0;

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
        sessionStorage.setItem("winCheck", playerNum);

        // Switch to Player 1's turn
        alert("It is now " + sessionStorage.getItem("p1Store") + "'s turn")
        document.getElementById("player").innerHTML = sessionStorage.getItem("p1Store") + "'s Turn";

        // Reset chip counter
        document.getElementById("counter").value = 0;
    }
}

function endGame() {
    location.href = "results.html";
}

// Checks to see who won the game
console.log(playerNum);

if (playerNum == 1) {
    document.getElementById("result").innerHTML = sessionStorage.getItem("p1Store") + " Wins!";
} else if (playerNum == 2) {
    document.getElementById("result").innerHTML = sessionStorage.getItem("p2Store") + " Wins!";
}

// If player plays again, the stored names will be reset to empty.
function returnMenu() {
    sessionStorage.setItem("p1Store", "");
    sessionStorage.setItem("p2Store", "");
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