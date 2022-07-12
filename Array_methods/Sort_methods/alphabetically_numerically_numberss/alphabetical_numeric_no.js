const numbers=[40,60,29,100,200];
document.getElementById("demo").innerHTML=numbers;
function myFunction1()
{
    numbers.sort();
    document.getElementById("demo").innerHTML=numbers;
};
function myFunction2()
{
    numbers.sort(function(a,b){return a-b});
    document.getElementById("demo").innerHTML=numbers;
};