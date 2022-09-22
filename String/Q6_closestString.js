function shortestDistance(s, word1, word2){
    let l=[]
    let r=[]
    let n = s.length
    for (let i = 0; i < n ; i++) {
        if(s[i]==word1){
            l.push(i)
        }
    }
    for (let i = 0; i < n ; i++) {
        if(s[i]==word2){
            r.push(i)
        }
    }
    let z=[]
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < n; j++) {
            z.push((l[i]-r[j]))   
        }
        
    }
    return z;
}

console.log(shortestDistance(['geeks','for','the'], 'geeks', 'the'))