let arr =[1,2,3,4,5,6,8,1,2,3,4,5];
let x = arr.reduce((prev,curr)=>{
    if(prev[curr]===undefined){
        prev[curr]=1;
    }else{
        prev[curr]=prev[curr]+1;
    }

return prev;

})
console.log(x);


//const mul =(a,b)=>{
    //return a*b
//}

//console.log(mul(5,5));


