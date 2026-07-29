


function step1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
        console.log("Step 1 Completed");
        resolve();
    },1000)
    })
}

function step2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
        console.log("Step 2 Completed");
        resolve();
    },1000)
    })
}

function step3(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
        console.log("Step 3 Completed");
        resolve();
    },1000)
    })
}

step1()
.then(() => step2())
.then(() => step3())
.then(() => console.log("All steps completed"))