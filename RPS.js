// Does the user the user want to play the game?
confirm("Do You want to play Rock, Paper Scissors?")
//Options available to the computer to choose from
var computerOptions = ["R", "P", "S"];
//Win Loose Draw to keep track of the score
var wins = 0
var losses = 0
var ties = 0
//Initialiser starts at 0 with 10 goes, going up by 1 each time
//Rules for the for loop
for (var i = 0; i < 10; i++) {
    //User chooses Rock, Paper or Scissors, using R, P, S. Giving the user their available options
    var userChoice = prompt("Choose R, P, S")
    //Random computer generator for the computer choices
    var randomIndex = Math.floor(Math.random() * 3);
    var randomlyChosenOption = computerOptions[randomIndex];
    console.log("The computer has randomly chosen " + randomlyChosenOption);
    //Comparison of the user choice to the computer choice. If the User chooses R OR if the user chooses P OR if the user chooses S then  
    if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
        //and alert will show the computers choice
        alert("The computer chose " + randomlyChosenOption);
        //If the user choice is the same as the computer choice then   
        if (userChoice === randomlyChosenOption) {
            //increasing ties counter
            ties++
            //alert shows that they tied
            alert("You tied")
        }
        //If none of the first code happens then this
        else if (
            //user chooses winning option
            (userChoice === "P" && randomlyChosenOption === "R") ||
            (userChoice === "S" && randomlyChosenOption === "P") ||
            (userChoice === "R" && randomlyChosenOption === "S")
        ) {
            //increasing wins counter
            wins++
            //alert shows the user has won and how many times
            alert("You won " + wins + " times")
        }
        //otherwise
        else {
            //increasing losses counter
            losses++
            //alert to show user lost and how many times
            alert("You lost " + losses + " times")
        }
    }
}
//final alert to show the end score of wins, losses and ties
alert("Wins " + wins + "Losses " + losses + "Ties " + ties)







