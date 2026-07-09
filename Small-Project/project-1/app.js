const num = document.getElementById("num");
const result = document.getElementById("result");


function checkNumber(){

    let value = Number(num.value)

    if(value > 0){
        result.innerHTML = "Positive";
    }else if(value < 0){
        result.innerHTML = "Negative";
    }else{
        result.innerHTML = "Zero";
    }
}