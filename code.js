var totalChips = 12
var playerChips = 0
var playerNum = 1;
var cpu = false;

function chipCount(id) {
    if (playerChips > 2) {
        alert("You Cannot select more than 3")
        document.getElementById('inc').value = 3;
    }else {
        document.getElementById('inc').value = ++playerChips;
        document.getElementById(id).style.visibility="hidden";
    }
}

function endTurn() {
    if (cpu == false && playerNum == 1) {
        playerNum++
        alert("It is now player 2's turn")
        document.getElementById('player').innerHTML = "Player 2's Turn"

    }else if (cpu == true && playerNum == 1){
        document.getElementById('player').innerHTML = "Cpu's Turn"
        playerNum++
        alert("It is now the Cpu's turn")
    }else if (playerNum == 2){
        document.getElementById('player').innerHTML = "Player 1's Turn"
        playerNum--
        alert("It is now player 1's turn")
    }
}