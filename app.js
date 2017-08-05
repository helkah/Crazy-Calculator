document.addEventListener('DOMContentLoaded',function(){

////////////VARIABLES
    
var operatorsArray = ["+","-","*","/"];
var operators = {
    '+':function(a,b){return a+b},
    '-':function(a,b){return a-b},
    '*':function(a,b){return a*b},
    '/':function(a,b){return (Math.round((a/b)*100))/100},
}
var result = 0;   
var givenResult = "";
    
var operationInputElement = document.getElementById('operation');
var resultInputElement = document.getElementById('solution');
var chartButtons = document.getElementsByClassName('charts');
var enterButton = document.querySelector("[value='ENTER']");  
    
function createRandomMathOperation(){    
    
    var randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    var randomNumber1 = Math.floor((Math.random()*100)+1);
    var randomNumber2 = Math.floor((Math.random()*100)+1);
    var rest = randomNumber1%randomNumber2;
    var helpNumber = randomNumber1 +(randomNumber2-rest);   // to make division without remainders 
 
         
    if (randomOperator == "/"){
        if(randomNumber1%randomNumber2 == 0){
            operationInputElement.value = randomNumber1 + randomOperator + randomNumber2;
            result = (operators[randomOperator](randomNumber1,randomNumber2));    
        }else{
            operationInputElement.value = helpNumber + randomOperator + randomNumber2;
            result = (operators[randomOperator](helpNumber,randomNumber2));    
        }
    }else{
        operationInputElement.value = randomNumber1 + randomOperator + randomNumber2;
        result = (operators[randomOperator](randomNumber1,randomNumber2)); 
    }    
};
createRandomMathOperation();    
    
    
    
///////////EVENTS  

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
         createRandomMathOperation();
         resultInputElement.value="";
    }else{
        console.log("wrong");
        createRandomMathOperation();
        resultInputElement.value="";
    }
})
















});