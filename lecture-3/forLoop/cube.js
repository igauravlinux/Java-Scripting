// 17. Print the cube of each number from 1 to n.

let n = 5;


for(let i = 2; i <= n; i++){
    let cube = i;

    for(let j = 1; j <= 3; j++){
        cube *= i;
    }

    console.log(cube);
}