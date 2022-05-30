var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
const top_panel= document.querySelector(".top_panel");
const bottom_panel = document.querySelector(".bottom_panel");
const delete_one = document.querySelector(".delete_one");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
let current = "";
let previous = "";
let operation = undefined;

function update(){
    bottom_panel.innerHTML = current;
    if(operation!=null) top_panel.innerHTML = previous+operation;
    else top_panel.innerHTML="";
}
function add(number){
    if(number=="•"){
        if(current.includes(".")) return;
    }
    current= current.toString() + number.toString();
}
function del(){
    current = current.toString().slice(0,-1);
    update();
}
function operations(operator){
    if(current=="") return;
    if(previous!="") calculations();
    operation = operator;
    previous = current;
    current = "";
}
function calculations(){
    var current_number = parseInt(current);
    var previous_number = parseInt(previous);
    if(operation=="+"){
        result = current_number + previous_number;
        current = result;
    }
    else if(operation=="-"){
        result = previous_number - current_number;
        current = result;
    }
    else if(operation=="÷"){
        result = previous_number / current_number;
        current = result;
    }
    else if(operation=="×"){
        result = previous_number * current_number;
        current = result;
    }
    else if(operation=="%"){
        result = (previous_number / 100) * current_number;
        current = result;
    }
    else if(operation=="^"){
        result = Math.pow(previous_number, current_number);
        current = result;
    }
    else if(operation=="√"){
        result = Math.pow(previous_number, (1/current_number));
        current = result;
    }
    else if(operation=="log"){
        result = Math.log(previous_number) / Math.log(current_number);
        current = result;
    }
}
function clear_all(){
    previous="";
    current="";
    operation=undefined;
}
delete_one.addEventListener("click", del);
equal.addEventListener("click", ()=>{
    calculations();
    update();
})
ac.addEventListener("click", ()=>{
    clear_all();
    update();
})
numbers.forEach((number) => {
    number.addEventListener("click",()=>{
        add(number.innerHTML);
        update();
    })
})
operators.forEach((operator) =>{
    operator.addEventListener("click",()=>{
        operations(operator.innerHTML);
        update();
    })
})
