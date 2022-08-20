const match = document.getElementById('match');
const matchnot = document.getElementById('!match');
match.style.display = 'none';
matchnot.style.display = 'none';
const typePin = document.getElementById('type-pin');
const displayPin = document.getElementById('pin-display');
function generatePin(){
   let pin = Math.round(Math.random()*10000);
   return pin;
}
function getPin(){
    const pin = generatePin();
    const pinStr = pin + '';
    if(pinStr.length ===4){
        return pin;
    }else{
        return  getPin()
    }
}
document.querySelector('.generate-btn').addEventListener('click', function(){
    document.getElementById('pin-display').value = getPin()
});

document.getElementById('calculator').addEventListener('click', function(e){
    const buttonClicked = e.target.innerText;
   
    if(isNaN(buttonClicked)){
        if(buttonClicked ===  'C'){
            typePin.value = '';
        }else if(buttonClicked === '<'){
            const newValue = typePin.value.split('');
            newValue.pop();
            const remainDigits = newValue.join('');

            typePin.value = remainDigits;
            
        }
    }else{
        const initValue = typePin.value;
        const newValue = initValue+buttonClicked;
        typePin.value = newValue;
    }
});
document.querySelector('.submit-btn').addEventListener('click', function(e){
    let tryLeft = 3;
    if(tryLeft > 0 ){
        if( displayPin.value !== '' &&  typePin.value !== '' && displayPin.value === typePin.value ){
            match.style.display = 'block';
            matchnot.style.display = 'none';
        }else{
            matchnot.style.display = 'block';
            match.style.display = 'none';
            tryLeft--;
            document.getElementById('action').innerText =  tryLeft;
        }
    }else{
        alert('You have  no chance to play')
    }
})