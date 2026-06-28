// 15. Find the LCM (Least Common Multiple) of the given numbers. 

let a = 12;
let b = 18;


let hcf = 1;

for(let i = 1; i <= Math.min(a,b); ++i){
    if(a % i === 0 && b % i === 0){
        hcf = i;
    }
}


let lcm = (a * b) / hcf;
console.log("Lcm: "+lcm);

