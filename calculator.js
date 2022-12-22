var firstNumber = " ";
var secondNumber = " ";
var temp = " ";
var op = " ";
var firstOp = " ";
var secondOp = " ";
var answer = " ";
var count = 0;
var text = " ";



function display(number) {
    temp+= number
    document.getElementById('result').innerHTML = temp;
}

function pressNumberBtn() {
  let nodeList = document.querySelectorAll('#btn-number');

  for(let i = 0; i < nodeList.length; i++){
        nodeList[i].addEventListener('click' , function(){
                var number = nodeList[i].innerHTML;
                display(number);
            }) 
  }
}

function pressOpBtn() {
    let nodeList = document.querySelectorAll('#btn-op');

    for(let i=0; i < nodeList.length; i++){
        nodeList[i].addEventListener('click', function(){
            op = nodeList[i].innerHTML;

            if(firstNumber == " " && count == 0){
                firstNumber =  document.getElementById('result').innerHTML;
               
            }

            temp = " ";
            count++;

            if(count == 1){
                firstOp = op;     
            }else if(count == 2 ){
                secondOp = op;
                secondNumber = document.getElementById('result').innerHTML;

                if(secondOp == "="){
                    calculate(firstOp);
                    firstNumber = document.getElementById('result').innerHTML;
                    secondNumber = " ";    
                }else{
                    calculate(firstOp);
                }
               
            
            }else if(count > 2){
                secondNumber = " ";
                firstOp = secondOp;
                secondOp = op;

                if(firstOp != "=" && secondOp != "="){
                    firstNumber = answer;
                    secondNumber = document.getElementById('result').innerHTML;
                    document.getElementById('result').innerHTML = "tae";
                    calculate(firstOp);
                }
                else if(firstOp != "=" && secondOp == "="){
                    firstNumber = " ";
                    firstNumber = answer;
                    secondNumber = " ";
                    secondNumber = document.getElementById('result').innerHTML;
                    display(secondNumber);      
                    calculate(firstOp);
                  
                }
            }
        })
    }
}

function calculate(op){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch(op){
        case '+': answer = firstNumber + secondNumber; break;
        case '-': answer = firstNumber - secondNumber; break;
        case 'x': answer = firstNumber * secondNumber; break;
        case '/': answer = firstNumber / secondNumber; break;
        case '%': answer = firstNumber % secondNumber; break;
        case '=': firstNumber = answer; break; 
    }

    document.getElementById('result').innerHTML = answer;
}

function clr(){
    let node = document.querySelector('#btn-clear');
    node.onclick = function(){
         firstNumber = firstNumber + '';
         firstNumber = " ";
         secondNumber = secondNumber + '';
         secondNumber = " ";
         temp = " ";
         op = " ";
         answer = " ";
         count = 0;

         document.getElementById('result').innerHTML = 0;
    }
}

function backspace(){
    let node = document.querySelector('#btn-backspace');
    node.onclick = function(){
          
        if(temp.length > 0){
            text = temp.slice(0,-1);
            temp = " ";
            display(text);
        }
        
        if(document.getElementById('result').innerHTML == 0){
            document.getElementById('result').innerHTML = 0;
        }
    }
}

function theme_color(){
    var color = true;

    node =  document.querySelector('.calculator');
    document.querySelector('.color-mode').addEventListener('click', function(){

        if(color === true){
            //change color-mode button
            document.querySelector('#color-mode').innerHTML = "light_mode"; 
            document.querySelector('.color-mode').style.backgroundColor = "black";
            document.querySelector('.color-mode').style.color = "white";
            document.querySelector('.color-mode').style.borderColor = "white";

            //change calculator and lcd color
            document.querySelector('.calculator').style.backgroundColor = "black";
            document.querySelector('.calculator').style.borderColor = "white";
            document.querySelector('.lcd').style.backgroundColor = "black";
            document.querySelector('.lcd').style.borderColor = "white";
            document.querySelector('.lcd').style.color = "white";

            //change button color and font
            let nodeList = document.querySelectorAll('.btn');

            for(let i = 0 ; i<nodeList.length ; i++){
                nodeList[i].style.color = "white";
                nodeList[i].style.backgroundColor = "black";
                nodeList[i].style.border = "1px solid white";
            }   
            color = false;
        }else{

               //change color-mode button
               document.querySelector('#color-mode').innerHTML = "dark_mode"; 
               document.querySelector('.color-mode').style.backgroundColor = "white";
               document.querySelector('.color-mode').style.color = "black";
               document.querySelector('.color-mode').style.borderColor = "black";
   
               //change calculator and lcd color
               document.querySelector('.calculator').style.backgroundColor = "white";
               document.querySelector('.calculator').style.borderColor = "black";
               document.querySelector('.lcd').style.backgroundColor = "white";
               document.querySelector('.lcd').style.border = "1px solid black";
               document.querySelector('.lcd').style.color = "black";
   
               //change button color and font
               let nodeList = document.querySelectorAll('.btn');
   
               for(let i = 0 ; i<nodeList.length ; i++){
                   nodeList[i].style.color = "black";
                   nodeList[i].style.backgroundColor = "white";
                   nodeList[i].style.border = "1px solid black";
               }   
            color = true;
        }
        color != color;
    })
  
}

document.addEventListener('DOMContentLoaded', function(){
    pressNumberBtn();
    clr();
    pressOpBtn();
    backspace();
    theme_color();
});
