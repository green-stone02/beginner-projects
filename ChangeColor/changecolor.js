var index = 0;

function changeColor(){
    var colors = [`redBG`, `orangeBG`, `yellowBG`, `greenBG`, `blueBG`, `violetBG`];

    document.getElementById(`BG`).className = `redBG`;

    document.getElementById(`BG`).classList.add(colors[index ++]);

    if( index > colors.length){
        index = 1;
    }
}

function clearColor(){
    document.getElementById(`BG`).className = ``;
}