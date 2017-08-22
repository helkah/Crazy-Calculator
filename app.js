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
    
var level = 0;    
    
function createRandomMathOperation(interval){    
    
    var randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    var randomNumber1 = Math.floor((Math.random()*interval)+1);
    var randomNumber2 = Math.floor((Math.random()*interval)+1);
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
    
function createRandomMathOperationLevelHard(interval){
    
    var randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    var randomNumber1 = Math.floor((Math.random()*interval)+1);
    var randomNumber2 = Math.floor((Math.random()*interval)+1);
    
    operationInputElement.value = randomNumber1 + randomOperator + randomNumber2;
    result = (operators[randomOperator](randomNumber1,randomNumber2));
    
}
    
function createRandomNumber(interval){
    var randomNumber = Math.floor((Math.random()*interval)+1);
    return randomNumber;
} 

function  createRandomOperator(){
    var randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    return randomOperator;   
}  
    
function createRandomMathOperationLevelSuperHard(){
    
    var randomNumber1 = createRandomNumber(100);
    var randomNumber2 = createRandomNumber(100);
    var randomNumber3 = createRandomNumber(100);
    var randomOperator1 = createRandomOperator();
    var randomOperator2 = createRandomOperator();
    
    operationInputElement.value = "("+randomNumber1 + randomOperator1 + randomNumber2 +")"+ randomOperator2+randomNumber3;
    var resultLeftSide = (operators[randomOperator1](randomNumber1,randomNumber2));
    result = (operators[randomOperator2](resultLeftSide,randomNumber3));
}
    
function createRandomMathOperationLevelUltraHard(){
    
    var randomNumber1 = createRandomNumber(100);
    var randomNumber2 = createRandomNumber(100);
    var randomNumber3 = createRandomNumber(100);
    var randomNumber4 = createRandomNumber(100);
    var randomOperator1 = createRandomOperator();
    var randomOperator2 = createRandomOperator();
    var randomOperator3 = createRandomOperator();
    
    operationInputElement.value = "("+randomNumber1 + randomOperator1 + randomNumber2 +")"+ randomOperator2 + "(" + randomNumber3 + randomOperator3 + randomNumber4 +")";
    var resultLeftSide = (operators[randomOperator1](randomNumber1,randomNumber2));
    var resultRightSide = (operators[randomOperator3](randomNumber3,randomNumber4));
    result = (operators[randomOperator2](resultLeftSide,resultRightSide));    
}
    
 function checkGivenResult(){
        console.log(result, givenResult);
        if (result == givenResult){
            console.log("wow");
            if (level == 1){
                createRandomMathOperation(10); 
            }else if (level == 2){
                createRandomMathOperation(100);
            }else if (level == 3){
                createRandomMathOperationLevelHard(1000);
            }else if (level == 4){
                createRandomMathOperationLevelSuperHard();
            }else if (level == 5){
                createRandomMathOperationLevelUltraHard();
            }
            resultInputElement.value="";
        }else{
            console.log("wrong");
            resultInputElement.value="";
            givenResult="";
        }
    };    
///////////EVENTS  

for (var i=0; i<chartButtons.length; i++){
        
    chartButtons[i].addEventListener('click',function(){
     
        resultInputElement.value += this.value;
        givenResult = resultInputElement.value;
        console.log(givenResult);
    })
}
    
resultInputElement.addEventListener('keyup',function(event){
    
    givenResult = this.value;
    console.log(givenResult);
    if(event.which == 13){
        checkGivenResult();
    }
        
})    

enterButton.addEventListener('click',function(){
    checkGivenResult();
});


var radioBtns = document.querySelectorAll("[type='radio']");

for(var i=0; i<radioBtns.length; i++){
    radioBtns[i].addEventListener('change', function(){
        var sectionLevel = document.getElementById('level');
        var sectionCalculator = document.getElementById('calculator');
        sectionLevel.classList.add('hide');
        sectionCalculator.classList.add('show');
        
        if (this.value == "easy"){
            createRandomMathOperation(10);
            level = 1;
        }else if(this.value =="medium"){
            createRandomMathOperation(100);
            level = 2;
        }else if(this.value =="hard"){
            createRandomMathOperationLevelHard(1000);
            level = 3;
        }else if(this.value =="superHard"){
            createRandomMathOperationLevelSuperHard();
            level = 4;
        }else if(this.value="ultraHard"){
            createRandomMathOperationLevelUltraHard();
            level = 5;
        }
        
    })
}    













});