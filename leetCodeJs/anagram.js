function anagram(str1,str2){
   let a=str1.toLowerCase();
   let b=str2.toLowerCase();
   console.log(b.sort());

   let n1=a.split('').sort().join();
   let n2=a.split('').sort().join()
   if(n1==n2) return true
}

console.log(anagram('ARMY','mary'))

