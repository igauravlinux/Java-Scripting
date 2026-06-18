

let str = "Madam";


let left = 0;
let right = str.length - 1;


let isPalindrome = true;

while(left < right){
   if(str[left].toLowerCase() !== str[right].toLowerCase()){
    isPalindrome = false;
    break;
   }


    left++;
    right--;

}

console.log(isPalindrome ? "Palindrome" : "Not a Palindrome");


