setTimeout(() => {
  console.log("settimeout 1");
}, 200);

setTimeout(() => {
  console.log("settimeout 2");
}, 100);

setTimeout(() => { console.log("settimeout 3");
}, 0);

setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});