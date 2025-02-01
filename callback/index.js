function person(name, callbackfn) {
  console.log(`hello ${name}`);
  callbackfn();
}

function address() {
  console.log("I am from India");
}

person("John", address);
