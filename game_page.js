var p1_name=localStorage.getItem("p1")
var p2_name=localStorage.getItem("p2")
var p1_score=0;
var p2_score=0;

document.getElementById("player-1_name").innerHTML=p1_name;
document.getElementById("player-2_name").innerHTML=p2_name;

document.getElementById("Score_1").innerHTML=p1_score;
document.getElementById("Score_2").innerHTML=p2_score;

document.getElementById("Question_turn").innerHTML="Question turn- "+p1_name;
document.getElementById("Answer_turn").innerHTML="Answer turn- "+p2_name;

function buttonsend(){
    get_number_1=document.getElementById("number_1").value
    console.log(get_number_1)
    
    get_number_2=document.getElementById("number_2").value
    console.log(get_number_2)

    actualanswer=parseInt(get_number_1) * parseInt(get_number_2)
    
   
    
    var Question_word = "<h2> "+get_number_1 +" X "+get_number_2+"</h2>"
    inputbox ="<br>Answer: <input id='answerjs'>"
    checkbutton ="<br> <button id='check' class='btn btn-danger' onclick='check()'>Check</button>"
    Full_Question=Question_word+inputbox+checkbutton
    document.getElementById("output").innerHTML=Full_Question;
    document.getElementById("number_1").value=" "
    document.getElementById("number_2").value=" "
}

question_turn="player-1"
answer_turn="player-2"

function check(){
    answer=document.getElementById("answerjs").value
    if(answer==actualanswer){
     if(answer_turn=="player-1"){
    p1_score+=1;
    document.getElementById("Score_1").innerHTML=p1_score;
     }
     else{
         p2_score+=1;
         document.getElementById("Score_2").innerHTML=p2_score;
     }
    }
    if(question_turn=="player-1"){
        question_turn="player-2"
        document.getElementById("Question_turn").innerHTML="Question turn- "+p2_name;
    }
    else{
        question_turn="player-1"
        document.getElementById("Question_turn").innerHTML="Question turn- "+p1_name;
    }
    if(answer_turn=="player-1"){
        answer_turn="player-2"
        document.getElementById("Answer_turn").innerHTML="Answer turn- "+p2_name;
    }
    else{
        answer_turn="player-1"
        document.getElementById("Answer_turn").innerHTML="Answer turn- "+p1_name;
    }
}
