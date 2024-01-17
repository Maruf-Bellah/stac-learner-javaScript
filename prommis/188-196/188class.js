// fetch class

const BASE_URL = "https://jsonplaceholder.typicode.com/";

// let res = fetch(`${BASE_URL}/users/1`);
// console.log(res);

// fetch(`${BASE_URL}/users/1`)
//   .then((res) => {
//     console.log(res.json());
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// fetch(`${BASE_URL}/users/1`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     return Promise.resolve("Something working");
//   })
//   .then((str) => {
//     console.log(str);
//     return Promise.resolve("Second promise data");
//   })
//   .then((scnd) => {
//     console.log(scnd);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error("Error Occurred"));
        }
      }
    };
    xhr.send();
  });
}

let show = getRequest(`${BASE_URL}/users/1`);
// console.log(show);
getRequest(`${BASE_URL}/users/154`)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

//   callback function =================================

// getRequest(function () {
//   getRequest(function () {
//     getRequest(function () {
//       getRequest(function () {

//       });
//     });
//   });
// });
