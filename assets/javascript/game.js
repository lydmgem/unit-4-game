//--Variables--
var oneVal = Math.floor(Math.random() * 3 + 10);
var twoVal = Math.floor(Math.random() * 3 + 7);
var threeVal = Math.floor(Math.random() * 3 + 4);
var fourVal = Math.floor((Math.random() * 3) + 1);
var wins = 0;
var losses = 0;
var targetNum = Math.floor((Math.random() * 102) + 19);
var totalScore = 0;


$(document).ready(function() {
    $("#target-num").text(targetNum);
});


function reset() {
    oneVal = Math.floor(Math.random() * 3 + 10);
    twoVal = Math.floor(Math.random() * 3 + 7);
    threeVal = Math.floor(Math.random() * 3 + 4);
    fourVal = Math.floor((Math.random() * 3) + 1);
    targetNum = Math.floor((Math.random() * 102) + 19);
    totalScore = 0;
}
//--Click functions--
$("#one").on("click", function(){
    totalScore += oneVal;
    $("#player-num").text(totalScore);
    results();
    console.log(totalScore)
});
$("#two").on("click", function(){
    totalScore += twoVal;
    $("#player-num").text(totalScore);
    results();
});
$("#three").on("click", function(){
    totalScore += threeVal;
    $("#player-num").text(totalScore);
    results();
});
$("#four").on("click", function(){
    totalScore += fourVal;
    $("#player-num").text(totalScore);
    results();
});

function results() {
    if (totalScore === targetNum) {
        reset();
        $("#target-num").text(targetNum);
        $("#player-num").text(totalScore);
        wins++;
        $("#userwins").text(wins);
    } else if (totalScore > targetNum) {
        reset();
        $("#target-number").text(targetNum);
        $("#player-num").text(totalScore);
        losses++;
        $("#userlosses").text(losses);
    }
    
};