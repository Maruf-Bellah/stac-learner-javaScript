// promise er kaj k async aro sohoj kore diyese

async function test() {
  return "amar sonar bangla";
}
// console.log(test());

// test().then((v) => {
//   console.log(v);
// });

// test().then((v) => alert(v));

// let p1 = new Promise((resolve) => {
//   setTimeout(resolve, 5000, "Test valus");
// });

// async function myAsyncFunc() {
//   let v = await p1;
//   //   console.log(test());
//   console.log(v);
// }

// myAsyncFunc();

async function funcData() {
  //   let res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   //   console.log(res.json());
  //   let data = await res.json();

  //   let names = data.map((u) => u.name);
  //   console.log(names);

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    let names = data.map((u) => u.name);
    console.log(names);
  } catch (e) {
    console.log(e.message);
  }
}

// funcData();

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

async function promiseAll() {
  let result = await Promise.all(promises);
  console.log(result);
}

promiseAll();
