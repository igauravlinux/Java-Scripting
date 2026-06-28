const num_1 = document.getElementById("first-num");
const num_2 = document.getElementById("sec-num");
const result = document.getElementById("result");




function checkNumber(){
    let value_1 = Number(num_1.value);
    let value_2 = Number(num_2.value);


    if(value_1 > value_2){
        result.innerHTML = "A is Max";
    }else{
        result.innerHTML = "B is Max";
    }

}

