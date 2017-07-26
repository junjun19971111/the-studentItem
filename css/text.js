'use strict';
function rangeBetwee(arry1,arry2) {
    for(let i in arry2){
        if(arry1.indexOf(arry2[i])===-1){
            arry1.push(arry2[i]);
        }
    }
    arry1=sortAry(arry1);
    return arry1;
}
function sortAry(arry) {
    let mix=0;
    for(let i=0;i<arry.length;i++){
        mix=arry[i];
        for (let j=i+1;j<arry.length;j++){
            if(arry[i]>arry[j]){
                mix=arry[j];
                arry[j]=arry[i];
                arry[i]=mix;
            }
        }
    }
    return arry;
}
console.log(rangeBetwee([1,2,3],[100,2,1,10]));