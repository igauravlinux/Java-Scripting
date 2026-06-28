let n = 2122;
let rem = 0;
let rev = 0;

let ogNum = n;

while (n != 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}

// console.log(rev);


// Checking is number palindrome or not
if (ogNum === rev) {
    console.log("Palindrom");
  } else {
    console.log("Not a Palindrome");
  }