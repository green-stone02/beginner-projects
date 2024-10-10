const display = document.getElementById(`display`);

function clickBtn(input){
    display.value += input;
}

function deleteBtn(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    display.value = ``;
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = `ERROR`;
    }
}

