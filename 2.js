for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i))
}


























// The classic pitfall here is the Zero delays. setTimeout(callback, 0) doesn't mean that the callback will be fire after zero milliseconds.
// Here’s what happen on the event loop side:
//     Current Call Stack is set to the first setTimeout().
//     windows.setTimeout() is considered as a Web APIs (for better Non-Blocking I/O). So the call stack sends this part of code to correct Web APIs. After 0 milliseconds, the callback (here an anonymous function) would be sent to the Queue (not to the call stack).
//     As the call stack is free, for-loop can continue to the second setTimeout …(repeat after we meet this condition i < 4)…
//     Now the loop is over and i === 4. JS can now execute the callback queue one by one. Each console.log(i) will print the 4.
