function out() {
  console.log(1);
  setTimeout(function () {
    console.log("Hello");
  }, 1000);
  setTimeout(function () {
    console.log("Hi");
  }, 0);
  console.log(4);
}
// out();

function x() {
  var i;
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
x();
