let n;

while(true){
    n = Number(prompt("Enter a number: "));
    console.log("You entered:",n);

    if(n < 0){
        console.log("Breaking");
        
        break;
    }
}
console.log("Final",n)