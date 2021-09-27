const a = [1,2,5];
const b = [2,1,4];
function calc(){
    let sumArray1 = 0;
    let sumArray2 = 0;
     for(let i =0 ; i<a.length ; i++){
         if(a[i] > b[i]){
             sumArray1+=1;
         }
         if(b[i] > a[i]){
             sumArray2+=1;
         }
     }
     return `${sumArray1} ${sumArray2}`
}

console.log(calc())
