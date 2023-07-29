
function ispalindrome(str){
    let len = str.length;
    for(let i=0; i<len/2;i++)
    if(str[i]!==str[len-1])
    {
        return false;
    }else{
        return true;
    }

    }
    const str = dad;
if( ispalindrome(str))
console.log("its a palindrome");
else
console.log("its not a palindrome");
