document.addEventListener('DOMContentLoaded',function(){

////////////VARIABLES
    
let operatorsArray = ["+","-","*","/"];
let operators = {
    '+':function(a,b){return a+b},
    '-':function(a,b){return a-b},
    '*':function(a,b){return a*b},
    '/':function(a,b){return (Math.round((a/b)*100))/100},
}

let result = 0;   
let givenResult = "";
    
let operationInputElement = document.getElementById('operation');
let resultInputElement = document.getElementById('solution');
let chartButtons = document.getElementsByClassName('charts');
let enterButton = document.querySelector("[value='ENTER']");
let radioBtns = document.querySelectorAll("[type='radio']");      
    
let level = 0;
    
  
//////////FUNCTIONS    
    
const createRandomMathOperation = interval => {    
    
    let randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    let randomNumber1 = Math.floor((Math.random()*interval)+1);
    let randomNumber2 = Math.floor((Math.random()*interval)+1);
    let rest = randomNumber1%randomNumber2;
    let helpNumber = randomNumber1 +(randomNumber2-rest);   // to make division without remainders 
 
         
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
    
const createRandomMathOperationLevelHard = interval => {
    
    let randomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    let randomNumber1 = Math.floor((Math.random()*interval)+1);
    let randomNumber2 = Math.floor((Math.random()*interval)+1);
    
    operationInputElement.value = randomNumber1 + randomOperator + randomNumber2;
    result = (operators[randomOperator](randomNumber1,randomNumber2));
    
}
    
const createRandomNumber = interval => Math.floor((Math.random()*interval)+1);

const createRandomOperator = () => operatorsArray[Math.floor(Math.random() * operatorsArray.length)];   
    
const createRandomMathOperationLevelSuperHard = () => {
    
    let randomNumber1 = createRandomNumber(100);
    let randomNumber2 = createRandomNumber(100);
    let randomNumber3 = createRandomNumber(100);
    let randomOperator1 = createRandomOperator();
    let randomOperator2 = createRandomOperator();
    
    operationInputElement.value = "("+randomNumber1 + randomOperator1 + randomNumber2 +")"+ randomOperator2+randomNumber3;
    let resultLeftSide = (operators[randomOperator1](randomNumber1,randomNumber2));
    result = (operators[randomOperator2](resultLeftSide,randomNumber3));
}
    
const createRandomMathOperationLevelUltraHard = () => {
    
    let randomNumber1 = createRandomNumber(100);
    let randomNumber2 = createRandomNumber(100);
    let randomNumber3 = createRandomNumber(100);
    let randomNumber4 = createRandomNumber(100);
    let randomOperator1 = createRandomOperator();
    let randomOperator2 = createRandomOperator();
    let randomOperator3 = createRandomOperator();
    
    operationInputElement.value = "("+randomNumber1 + randomOperator1 + randomNumber2 +")"+ randomOperator2 + "(" + randomNumber3 + randomOperator3 + randomNumber4 +")";
    let resultLeftSide = (operators[randomOperator1](randomNumber1,randomNumber2));
    let resultRightSide = (operators[randomOperator3](randomNumber3,randomNumber4));
    result = (operators[randomOperator2](resultLeftSide,resultRightSide));    
}
    
 const checkGivenResult = () => {
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

for (let i=0; i<chartButtons.length; i++){
        
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


for(let i=0; i<radioBtns.length; i++){
    radioBtns[i].addEventListener('change', function(){
        let sectionLevel = document.getElementById('level');
        let sectionCalculator = document.getElementById('calculator');
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