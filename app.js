console.log("Hello from node");
const foo = "bar";

// setTimeout(() => console.log(foo), 2000);

const interval = setInterval(() => console.log("interval"), 1000);

setTimeout(() => clearInterval(interval), 5000);
