console.log("Start"); // 1

setTimeout(()=>{
    console.log("Inside setTimeOut");
}, 0); // 4

for(let i=1; i<1000; i++){
    console.log("inside For Loop");
}; // 999 -2 

console.log("End"); // 3


// browser - (web APIs)
// ->
// callback Queue
// ->
// Event loop -= Hold
// ->
// call stack -> (GEC)