{
  // x value TDZ starts here (at the beginning of this block’s local scope)
  // x value TDZ continues here
  // x value TDZ continues here
  // x value TDZ continues here
//   console.log(x); // returns ReferenceError because x TDZ continues here
  let x = 10; // x TDZ ends here
  // x TDZ does not exist here
  // x TDZ does not exist here
  // x TDZ does not exist here
}

{
  // TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}
