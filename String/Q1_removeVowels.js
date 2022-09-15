function removeVowel(){
    let string = "my name Is Ankur Pandey";
    let result = "";
    let vowels = ['a', 'e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < string.length; i++) {
        if(!vowels.includes(string[i])){
            result = result + string[i];
        }  
    }
    console.log('result =>',result); 
}

removeVowel();