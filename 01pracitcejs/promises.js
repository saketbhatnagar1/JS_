let p = new Promise(function (resolve, reject) {
  a = 1;
  b = 2;
  if (a == b) {
    resolve([a, b]); //resolve passes the value within the resolve() function to the then block,then is a method which is executed when the condition is matched
  } else {
    reject([a, b]); //reject passes the value within the reject() function to the catch block,catch is a method which is executed when the condition isrejected or promise is rejected
  }
});

p.then((x) => {
  console.log(
    "promise is resolved and th eoutput is :",
    x[0],
    "is equal to ",
    x[1]
  );
}).catch((x) => {
  console.log("PROMISE HAS FAILED AND THE VALUE IS ", x[0], " !=", x[1]);
});
