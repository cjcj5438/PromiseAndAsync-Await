// let p1 = Promise.resolve({name: 'xixi', age: 'XXXX'});

// p1.then(result => {
//     console.log(result);
// });


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 500);
});

let pp = Promise.resolve(p);

pp.then(result => {
    console.log(result);
});

console.log(pp == p);
