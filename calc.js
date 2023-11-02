var screen = document.getElementById("screen");

function btnClick(val){
    screen.value += val;
}

function clrScreen(){
    screen.value="";
}

function backSpace(){
    var output = (screen.value).toString();
    screen.value = output.substr(0,output.length-1);
}

function fndResult(){
    var result=eval(screen.value)
    screen.value=result;
}