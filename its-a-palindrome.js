
/*    
Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.n
   */
function isPalindrome(x) {
    x=x.toLowerCase()
        return x===x.split('').reverse.join('')
}