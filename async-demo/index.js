
console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

// WAYS OF EXECUTING WITHOUT WAITING
// 1. Callbacks
// 2. Promises
// 3. Async / Await

function getUser(id) {
    // does not show id due to it executing AFTER normally called
setTimeout(() => {
    console.log('Reading a user from the database');
    return { id: id, guitHubUsername: 'mosh' };
}, 2000); 

    return 1;
}