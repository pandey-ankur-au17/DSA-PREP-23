
function romanToDecimal(str){ 
    let romanNumberObj = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let sum = 0
    let i = 0
    while (i < str.length) {
        if (i != str.length-1 && romanNumberObj[str[i]] < romanNumberObj[str[i+1]]) {
            sum += romanNumberObj[str[i+1]] - romanNumberObj[str[i]]
            i +=2
        }
        else {
            sum += romanNumberObj[str[i]]
            i++
        }
    }
    return sum
}
str = 'XVIVIX'
console.log(romanToDecimal(str));