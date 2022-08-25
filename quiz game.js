function login(){
    player_1=document.getElementById("input_1").value;
    player_2=document.getElementById("input_2").value;

    localStorage.setItem("p1",player_1);
    localStorage.setItem("p2",player_2);
    window.location="game_page.html"
}
