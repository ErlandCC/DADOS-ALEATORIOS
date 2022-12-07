var u=1;
	var v1=0;
function rollDice77(){
    var die77 = document.getElementById("die77");
    var status77 = document.getElementById("status77");
    var z = Math.floor(Math.random() * 6) + 1;
    var pos77 =z + v1;
    die77.innerHTML = z;
}
   

var r=1;
	var r1=0;
function rollDice88(){
    var die88 = document.getElementById("die88");
    var status88 = document.getElementById("status88");
    var d88 = Math.floor(Math.random() * 6) + 1;
    var pos88 =d88 + r1;
    die88.innerHTML = d88;  
}
var d=1;
	var e=0;
function rollDice99(){
    var die99 = document.getElementById("die99");
    var status99 = document.getElementById("status99");
    var d99 = Math.floor(Math.random() * 6) + 1;
    var pos99 =d99 + e;
    die99.innerHTML = d99;  
}
function llamada()
{
    rollDice77();
    rollDice88();
    rollDice99();

}