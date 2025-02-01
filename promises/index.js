function delayFn(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

console.log("promise delay");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 5)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log("Error:", error));
