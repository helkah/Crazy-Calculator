document.addEventListener('DOMContentLoaded',function(){
    
var operatorsArray = ["+","-","*","/"];
var randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
var randomNumber1 = Math.floor((Math.random()*100)+1);
var randomNumber2 = Math.floor((Math.random()*100)+1);   

var operationInputElement = document.getElementById('operation');
var resultInputElement = document.getElementById('solution');
    
operationInputElement.value = randomNumber1 + randomOperator + randomNumber2;

var operators = {
    '+':function(a,b){return a+b},
    '-':function(a,b){return a-b},
    '*':function(a,b){return a*b},
    '/':function(a,b){return a/b},
}    
    
    
var result = (operators[randomOperator](randomNumber1,randomNumber2));

var buttonsElements = document.getElementsByClassName('charts');
console.log(buttonsElements); 

    
buttonsElements.addEventListener('click',function(){
    
})


















});