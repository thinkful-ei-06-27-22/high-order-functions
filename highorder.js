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



function createCounter() {
    let runningCount = 0;

    return function(increment = 1){
        runningCount += increment;
        return runningCount;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());    // 1
console.log(counter1());    // 2
console.log(counter1());    // 3

console.log(counter2(5));   // 5
console.log(counter2(3));   // 8
console.log(counter2(2));   // 10