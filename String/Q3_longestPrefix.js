// Input:
// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
// Output: gee
// Explanation: "gee" is the longest common
// prefix in all the given strings.

/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */

function longestCommonPrefix(arr,n){ 
    let longestPrefix = arr[0];
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < longestPrefix.length; j++) {
            if(longestPrefix[j] !== arr[i][j]) {
                longestPrefix = longestPrefix.slice(0, j);
                break;
            }
        }
    }
    return longestPrefix.length ? longestPrefix : -1;
}

console.log(longestCommonPrefix(['geekester','geeksofgeeks','geeketer','gee','geemen'], 4));