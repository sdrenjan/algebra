let scope = "global scope";
function checkscope() {
let scope = "local scope"; 
function f() { 
    return scope; 
    }
    return f;
}
let s1 = console.log(checkscope()());
let s2 = console.log(checkscope());

// output:
// local scope
// [Function: f]

