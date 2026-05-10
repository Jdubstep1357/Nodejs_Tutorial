
const p = new Promise((resolve, reject) => {
    // kick off some async work
    // Ex: call database, set timer, call API, Ect
    // Once done return value

    setTimeout(() => {
    // resolve(1);
    reject(new Error('message'))

    }, 2000);

});


// consume Promise

p
    // if successful
    .then(result => console.log('Result', result))
    // if error
    .catch(err => console.log('Error', err.message));