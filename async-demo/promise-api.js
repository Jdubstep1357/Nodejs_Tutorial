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


// as soon as one promise in array is fuilfilled, first one done is shown
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));