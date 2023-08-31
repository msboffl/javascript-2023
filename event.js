import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let m = 0;
myEmitter.on("start", () => {
  console.log(m++);
  console.log("Listioning the Event....");
});

myEmitter.emit("start");
myEmitter.emit("start"); // 1
myEmitter.emit("start"); // 2
