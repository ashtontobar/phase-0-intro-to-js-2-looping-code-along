// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);

//First Assignment
// let messages = [];
// const people = ["Guadalupe", "Ollie", "Aki"];
// let eventType = "surprise";

let messages = [];

function writeCards(people, eventType) {
    // debugger;
    for (let i = 0; i < people.length; i++) {
    let message = `Thank you, ${people[i]}, for the wonderful ${eventType} gift!`;
      messages.push(message);
  }
  return messages;
}



//Second Assignment - COMPLETE

function countDown(startNum) {
  while (startNum >= 0) {
    console.log(startNum--);
  }
}
countDown(4);
