function sayHello() {
  return "Hello";
}

function greeting(hellomsg, name) {
  console.log(hellomsg() + name);
}

greeting(sayHello, " sai");

const cart = () => {
  addTocart(function () {
    proceedToPayment(function () {
      paymentSuccess(function () {
        provideBill(function () {
          console.log("Bill Provided");
        });
      });
    });
  });
};

const promise = cart();

cart
  .then(function addTocart() {
    return data;
  })
  .then(function proceedToPayment() {
    return data;
  })
  .then(function paymentSuccess() {});
