/**
 * Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

Example 1:

Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i
 */


/**
 * @param {string} s
 * @returns {string}
*/
 
//Function to reverse words in a given string.
function reverseSentence(s)
{
        let result = s.trim().split(".").reverse().join('.');
        console.log('result=>', result);
        return result
}

s = 'my.name.is.ankur';
reverseSentence(s);