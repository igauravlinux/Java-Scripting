


function palindrome(str){

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

    if(isPalindrome){
        console.log("its a Palindrome");
    }else{
        console.log("Its not a Palindrome");
    }

}

palindrome("Madam");