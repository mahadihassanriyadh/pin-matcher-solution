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