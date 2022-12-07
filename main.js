var n=1;
	var m=0;
function rollDice(){
    var die1 = document.getElementById("die1");
    var status1 = document.getElementById("status1");
    var f = Math.floor(Math.random() * 6) + 1;
    var pos1 =f + m;
    die1.innerHTML = f;
}
   

var v=1;
	var s=0;
function rollDice2(){
    var die2 = document.getElementById("die2");
    var status2 = document.getElementById("status2");
    var d2 = Math.floor(Math.random() * 6) + 1;
    var pos2 =d2 + s;
    die2.innerHTML = d2;  
}
var d=1;
	var e=0;
function rollDice3(){
    var die3 = document.getElementById("die3");
    var status3 = document.getElementById("status3");
    var d3 = Math.floor(Math.random() * 6) + 1;
    var pos3 =d3 + e;
    die3.innerHTML = d3;  
}

var j=1;
	var p =0;
function rollDice4(){
    var die4 = document.getElementById("die4");
    var statu4 = document.getElementById("statu4");
    var d4 = Math.floor(Math.random() * 6) + 1;
    var po4 =d4 + p;
    die4.innerHTML = d4;  
}

var h=1;
	var g =0;
function rollDice5(){
    var die5 = document.getElementById("die5");
    var statu5 = document.getElementById("statu5");
    var d5 = Math.floor(Math.random() * 6) + 1;
    var po5 =d5 + g;
    die5.innerHTML = d5;  
}





function funciones()
{
    rollDice();
    rollDice2();
    rollDice3();
    rollDice4();
    rollDice5();
}



