function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x);
    console.log(y);
  }
  bar();
  console.log(x);
//   console.log(y); // Reference Error: y is not defined
}

foo();

for (var a of [1, 2, 3]);
console.log(a);
