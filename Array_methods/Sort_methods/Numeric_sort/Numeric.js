const numbers=[56,34,95,100];
document.getElementById("demo1").innerHTML=numbers;
numbers.sort(function(a,b){return a-b});
document.getElementById("demo2").innerHTML=numbers;
numbers.sort(function(a,b){return b-a});
document.getElementById("demo3").innerHTML=numbers;