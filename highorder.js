function myFunc(arr, callback){
    for(let item of arr){
        callback(item);
    }
}


//myFunc(['a','b','c'], (item)=>console.log(item))

//myFunc(['a','b','c'], function(item){console.log(item)})


function getX(){
    let x =5;
    return function(){
        x='a string'
        console.log(x);
    };
}

let newFunc = getX();
newFunc()
newFunc()
newFunc()
newFunc()