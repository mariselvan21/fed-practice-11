const numbers=[22,89,45,87,100,2];
document.getElementById("demo").innerHTML=numbers;
function myFunction(){
    numbers.sort(function(a,b){return 0.5-Math.random()})
    document.getElementById("demo").innerHTML=numbers;
}