function doSomeThing() {
  console.log(bar);
  var bar = 111;
  console.log(bar);
}

doSomeThing();

// Redeclarations
var a = 1;
var a = 2;
console.log(a);
var a;
console.log(a); 


