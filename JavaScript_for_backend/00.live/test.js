const timeoutId = setTimeout(() => {
  console.log("This will not execute");
}, 2000);

clearTimeout(timeoutId);

const timeoutId1 = setTimeout(() => {
  console.log("This will not execute");
}, 1000);


function runTask() {
  console.log("Task executed safely");

  setTimeout(runTask, 1000);
}

runTask();