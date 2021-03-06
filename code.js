// Tracks the legal amount of chips able to be taken each round (1-3)
var playerChips = 0;

// If totalChips = 13, game ends
var totalChips = 1;

// Checks who wins at the end of a game
var playerNum = 1;

// "home.html" elements
var welcome = document.getElementById("welcome");
var start = document.getElementById("start");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var cpu = false;

var difficulty = 1
function easy(){
    difficulty = 1;
}

function medium(){
    difficulty = 2;
}

function hard(){
    difficulty = 3;
}

// Input validation for Player 1 & Player 2 names
function checkName() {
    if (!player1.value && !player2.value) {
        alert("Please enter a name for both Player 1 and Player 2.");
        location.href = "home.html"
    } else if (!player1.value) {
        alert("Please enter a name for Player 1.");
        location.href = "home.html"
    } else if (!player2.value) {
        alert("Please enter a name for Player 2.");
        location.href = "home.html"
    }

    // Store both Player 1 & Player 2's names
    sessionStorage.setItem("p1Store", player1.value);
    sessionStorage.setItem("p2Store", player2.value);

    // Displays welcome message to both players
    welcome.innerHTML = "Welcome " + sessionStorage.getItem("p1Store") + " and " + sessionStorage.getItem("p2Store");

    // If Player 1 & Player are given a name
    // Allow player to begin game, show collapsible div
    // Remove the div's ability to collapse after button is pressed
    start.classList.remove("collapse");
    start.classList.add("show");
    start.removeAttribute("id");
}

function pvpSelected() {
    sessionStorage.setItem("p2Store", "");

    // Displays welcome message to both players
    welcome.innerHTML = "Welcome To Nim!";
}

function cpuSelected() {
    cpu = true;
    if (player1.value) {
        sessionStorage.setItem("p1Store", player1.value)
        sessionStorage.setItem("p2Store", "CPU");
    
        // Displays welcome message to Player 1 & CPU
        welcome.innerHTML = "Welcome " + sessionStorage.getItem("p1Store") + " and " + sessionStorage.getItem("p2Store");
    }
}

// Displays start game after difficulty is selected
function chooseDifficulty() {
    // If difficulty is selected
    // Allow player to begin game, show collapsible div
    // Remove the div's ability to collapse after button is pressed
    start.classList.remove("collapse");
    start.classList.add("show");
    start.removeAttribute("id");
}

// Player 1 goes first
// Displays Player 1's name at the start of a game
document.getElementById("player").innerHTML = sessionStorage.getItem("p1Store") + "'s Turn";
console.log(sessionStorage.getItem("p1Store"));

function chipCount(id) {
    if (playerChips > 2) {
        alert("You cannot select more than three chips.");
        document.getElementById("counter").value = 3;
    } else {
        document.getElementById("counter").value = ++playerChips;
        document.getElementById(id).style.visibility = "hidden";
        totalChips++
    }

    // Checks to see if the game is over
    if (totalChips == 13) {
        endGame()
    }
}

function cpuMove() {
    console.log("FUCK ME")
    if(difficulty == 1){
        var selectable = Math.floor(Math.random() * 1) + 1;
        for(var i = 1; i < 13; i++){
            if(document.getElementById(i).style.visibility == "hidden"){

            }else{
                if(selectable != 0){
                    chipCount(i)
                    selectable--
                }else{
                    endTurn()
                }
            }
        }
        
    }
    else if(difficulty == 2){
        var selectable = Math.floor(Math.random() * 2) + 1;
        for(var i = 1; i < 13; i++){
            var stringthing = i.toString()
            if(document.getElementById(stringthing).style.visibility != "hidden"){
                if(selectable != 0){
                    chipCount(stringthing)
                    selectable--
                }else{
                    endTurn()
                }
            }else{
                
            }
        }
    }
    else if(difficulty == 3){
        var selectable = Math.floor(Math.random() * 3) + 1;
        for(var i = 1; i < 13; i++){
            if(document.getElementById(i).style.visibility == "hidden"){

            }else{
                if(selectable != 0){
                    chipCount(i)
                    selectable--
                }else{
                    endTurn()
                }
            }
        }
    }
}

function endTurn() {
    // Checks if no chips were clicked this turn
    if (playerChips == 0) {
        alert("You must select at least one chip.");
    } else {
        if (cpu != true && playerNum == 1) {
            playerChips = 0;
            playerNum++
            sessionStorage.setItem("winCheck", playerNum);
    
            // Switch to Player 2's turn
            alert("It is now " + sessionStorage.getItem("p2Store") + "'s turn");
            document.getElementById("player").innerHTML = sessionStorage.getItem("p2Store") + "'s Turn";
    
            // Reset chip counter
            document.getElementById("counter").value = 0;
    
        } else if (cpu != true &&  playerNum == 2) {
            playerChips = 0;
            playerNum--
            sessionStorage.setItem("winCheck", playerNum);
    
            // Switch to Player 1's turn
            alert("It is now " + sessionStorage.getItem("p1Store") + "'s turn");
            document.getElementById("player").innerHTML = sessionStorage.getItem("p1Store") + "'s Turn";
    
            // Reset chip counter
            document.getElementById("counter").value = 0;
        } else if (cpu == true && playerNum == 1) {
            playerChips = 0;
            playerNum++
            document.getElementById('player').innerHTML = "Cpu's Turn"
            sessionStorage.setItem("winner", playerNum);
            alert("It is now the Cpu's turn")
            document.getElementById('counter').value = 0;
            cpuMove()
        } else if (cpu == true && playerNum == 2) {
            playerChips = 0;
            playerNum--
            sessionStorage.setItem("winCheck", playerNum);
    
            // Switch to Player 1's turn
            alert("It is now " + sessionStorage.getItem("p1Store") + "'s turn");
            document.getElementById("player").innerHTML = sessionStorage.getItem("p1Store") + "'s Turn";
    
            // Reset chip counter
            document.getElementById("counter").value = 0;
        }
    }
}

// Checks to see who won the game
function endGame() {
    location.href = "results.html";
    
    // TODO
    // Does not display the name of the winner
    console.log(playerNum);

    if (playerNum == 1) {
        result.innerHTML = sessionStorage.getItem("p1Store") + " Wins!";
    } else if (playerNum == 2) {
        result.innerHTML = sessionStorage.getItem("p2Store") + " Wins!";
    }
}

// If player plays again, the stored names will be reset to empty.
function returnMenu() {
    sessionStorage.setItem("p1Store", "");
    sessionStorage.setItem("p2Store", "");
}
