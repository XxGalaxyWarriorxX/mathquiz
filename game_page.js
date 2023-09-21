player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")

var player1_score=0
var player2_score=0

document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score

document.getElementById("player1_name").innerHTML=player1_name
document.getElementById("player2_name").innerHTML=player2_name

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name 
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send(){
get_number= document.getElementById("num").value;
get_numbers = document.getElementById("mum").value;
result=Number(get_number)*Number(get_numbers)
question_word = "<h4 id='Number_display'> Q. "+ get_number +" X "+ get_numbers +  "</h4>"

input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";}
questionTurn="player1"
answerTurn="player2"
function check(){
var check=document.getElementById("input_check_box").value
if(check == result){
if(answerTurn == "player1")
{
player1_score = player1_score+1
document.getElementById("player1_score").innerHTML=player1_score
}
else
{
player2_score = player2_score+1
document.getElementById("player2_score").innerHTML=player2_score
}
}
if(questionTurn == "player2")

{
questionTurn="player1"
document.getElementById("player_question").innerHTML="Question Turn - " + player1_name 
}
else{
questionTurn="player2"
document.getElementById("player_question").innerHTML="Question Turn - " + player2_name 
}


if(answerTurn == "player2")

{
answerTurn="player1"
document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name 
}
else{
answerTurn="player2"
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name 
}
document.getElementById("output").innerHTML=""
}




