let start = 'A'.charCodeAt(0);
let end = 'Z'.charCodeAt(0);

let i = end;
while(i >= start){
    console.log(String.fromCharCode(i));
    i--;
}