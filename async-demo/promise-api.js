const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2');
        resolve(2);
    }, 2000);
});


// After both promises complete, do something
Promise.all([p1, p2])
    .then(result => console.log(result));