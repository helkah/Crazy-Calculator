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
    '/':function(a,b){return (Math.floor((a/b)*100))/100},
}    
    
    
var result = (operators[randomOperator](randomNumber1,randomNumber2));
var givenResult = "";    

var chartButtons = document.getElementsByClassName('charts');
var enterButton = document.querySelector("[value='ENTER']");   

for (var i=0; i<chartButtons.length; i++){
        
    chartButtons[i].addEventListener('click',function(){
     
        resultInputElement.value += this.value;
        givenResult = resultInputElement.value;
        console.log(givenResult);
    })
}

enterButton.addEventListener('click',function(){
    console.log(result, givenResult);
    if (result == givenResult){
        
        console.log("wow");
    }else{
        console.log("wrong");
    }
})
















});