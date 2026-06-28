
// 14. Find the HCF (Highest Common Factor) of the given numbers. 

let a = 12;
let b = 20;

let hcf = 1;

for(let i = 1; i <= Math.min(a,b); i++){
    if(a % i === 0 && b % i === 0){ 
        hcf = i;
    }
}


console.log(hcf);





































// let a = 12;
// let b = 18;

// let hcf = 1;

// for(let i = 1; i <= Math.min(a,b); i++){
//     if(a % i === 0 && b % i === 0){
//         hcf = i;
//     }
// }

// console.log(hcf);
