/*
Call two integers a and b similar if divisor divides 
both a and b or if it doesn't divide either.

Given integers a, b and divisor, 
check if a and b are similar.

Example:
For a = 10, b = 12, and divisor = 2, the output should be areSimilarNumbers(a, b, divisor) = true;
For a = 10, b = 12, and divisor = 3, the output should be areSimilarNumbers(a, b, divisor) = false.

Input/Output:
[execution time limit] 4 seconds (js)
[input] integer a

Guaranteed constraints:
2 ≤ a ≤ 130.

[input] integer b
Guaranteed constraints:
2 ≤ b ≤ 130.

[input] integer divisor: A positive integer.

Guaranteed constraints: 2 ≤ divisor ≤ 15.

[output] boolean: true if a and b are similar in respect of divisor, false otherwise.
 */

function areSimilarNumbers(a, b, divisor) {

    console.log(divisor);
    if(a / b){
        return true;
    }
    else{
        return false;
    }
}
