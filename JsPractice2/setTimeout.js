function setTime() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
setTime();

// const object = {
//   message: "hello world",
//   logMessage() {
//     console.log(this.message);
//   },
// };
// setTimeout(object.logMessage, 1000);
