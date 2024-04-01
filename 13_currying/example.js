function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending Email to ${to} with subject ${subject} and body ${body}`
      );
    };
  };
}

// MOre advanced version
const sendAutoEmailAdv = (to) => (subject) => (body) =>
  console.log(
    `Sending Email to ${to} with subject ${subject} and body ${body}`
  );

let step1 = sendAutoEmail("mukulpadwal.me@gmail.com");
let step2 = step1("New Order Confirmation...");
let step3 = step2("Hey Mukul, Here is something for you");
