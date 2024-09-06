var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;
var path1="./img"+player1+".png";
var path2="./img"+player2+".png";

document.querySelectorAll("img")[0].setAttribute("src",path1);
document.querySelectorAll("img")[1].setAttribute("src",path2);

if(player1>player2){
    document.querySelector("h1").innerHTML="🏆 palyer 1 WINS";

}
else if(player2>player1){
    document.querySelector("h1").innerHTML="🏆 palyer 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="MATCH DRWNS";
}
