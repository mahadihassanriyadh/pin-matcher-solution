// One way of generating only 4 digit pin numbers
/* function generatePin(){
    const pin = Math.round(Math.random()*10000);
    if(pin > 999){
        console.log(pin);
    }
    else{
        // console.log('got 3 digit')
        generatePin();
    }
} */


// Another way of generating only 4 digit pin numbers
function getPin(){
    const pin = Math.round(Math.random()*10000);
    // converting pin in string
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}



document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
        else if(number == '<'){
            console.log(previousNum);
        }
    }
    else {
        const previousNum = calcInput.value;
        const newCalc = previousNum + number;
        calcInput.value = newCalc;
    }
})




// verifying Pin
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNums = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const errorMsg = document.getElementById('notify-error');
    if (pin == typedNums){
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    }
    else {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
    }
}