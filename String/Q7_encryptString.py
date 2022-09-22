
class Solution:
    def encryptString(self, S):
        res=[]
        n=len(S)
        i=0
        while i<n:
            c=1
            while i<n-1 and S[i]==S[i+1]:
                c+=1
                i=i+1
            s=""
            
            hexa=str(hex(c))
            hexa=hexa.split("x")[1]
            
            s+=hexa
            s+=S[i]
            res.append(s)
            i=i+1
        res=res[::-1]
        res="".join(res)
        return res