const numbers=[56,34,95,100];
document.getElementById("demo1").innerHTML=numbers;
numbers.sort(function(a,b){return a-b});
document.getElementById("demo2").innerHTML=numbers;
document.getElementById("demo3").innerHTML="lowest value:"+numbers[0];
numbers.sort(function(a,b){return b-a});
document.getElementById("demo4").innerHTML=numbers;
document.getElementById("demo5").innerHTML="Highest value:"+numbers[0];