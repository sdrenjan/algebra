let scope = "global scope";
function checkscope() {
let scope = "local scope"; 
function f() { 
    return scope; 
    }
    return f;
}
let s = console.log(checkscope()()); 