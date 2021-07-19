// Events Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.

const EventEmitter = require("events");
const event = new EventEmitter();
// 1: Ex:- Rregistering for the event to be fired only one time using once.
// event.on("sayIt",()=>{
//     console.log("Whoes you're DADDY?");
// });
// event.emit("sayIt");


// 2: Ex:- Creste an event emitter instance and register a couple of callbacks
// event.on("sayIt",()=>{
//     console.log("Whoes you're DADDY?");
// });
// event.on("sayIt",()=>{
//     console.log("ohh yeah DADDY!");
// });
// event.on("sayIt",()=>{
//     console.log("Whoes you're DADDY?");
// });
// event.emit("sayIt");


// 3: Ex:- Registering for the event with callback parameters
event.on("name",(fName , lName)=>{
    console.log(`First Name is ${fName}, Last Name is ${lName}`);
});

event.emit("name","Neelmani","Shukla");
