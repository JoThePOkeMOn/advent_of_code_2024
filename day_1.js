import fs from 'fs'
let leftarray=[]
let rightarray=[]
let totalDistance=0
fs.readFile("input.txt","utf8",(err,data)=>{
    const array = data.trim().split("\n").map((a)=> a.split("  "))
    for(let i =0 ; i<array.length; i++){
        leftarray.push(parseInt(array[i][0],10))
        rightarray.push(parseInt(array[i][1],10))
    }
   leftarray.sort()
   rightarray.sort()
//    console.log(leftarray)
//    console.log(rightarray)
// for(let i=0;i<leftarray.length;i++){
//     pairDifference.push(Math.abs(leftarray[i]-rightarray[i]))
// }
// for(let i= 0; i<pairDifference.length;i++){
//     totalDistance += pairDifference[i]
// }
for(let i=0; i<leftarray.length;i++){
    totalDistance += Math.abs(leftarray[i]-rightarray[i])
}
// console.log("Does pairDifference contain any NaNs?", pairDifference.some(isNaN));
console.log(totalDistance)
})

 
