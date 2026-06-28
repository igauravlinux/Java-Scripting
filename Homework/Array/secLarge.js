




let arr = [12,23,21,4,67];

let lg = arr[0];
let secLg = arr[0];

for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > lg) {
        secLg = lg;
        lg = arr[i];
    } else if (arr[i] > secLg && arr[i] < lg) {
        secLg = arr[i];
    }
}
console.log(secLg);
