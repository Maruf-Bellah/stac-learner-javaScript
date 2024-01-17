// promise hocche ekta constractor function
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "One");
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Two");
// });
// // console.log(p1);
// // console.log(p2);

// p1.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });

// p2.then((v) => {
//   console.log(v);
// });

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("I have Got an I Phone");
      } else {
        // reject("You have Failed");
        reject(new Error("Something is wrong"));
      }
    }, 1000);
  });
}

// console.log(getIphone(false));

// let phone = getIphone(fal);
// console.log(phone);

getIphone(false)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
