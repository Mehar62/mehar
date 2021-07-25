function updateScore(){
    score = parseInt(score) + 1;
    document.getElementById("score").innerHTML = "score: " + score;
}
function saveScore(){
    localStorage.setItem("score", score);
}
//function nextPage(){
  //  window.location = "guess_the_word_game/index.html";
//}