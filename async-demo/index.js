
console.log('Before');
getUser(1, (user) => {

    // 2nd argument array of strings
    getRepositories(user.guitHubUsername, (repos) => {
        console.log('Repos', repos);
    });
});
console.log('After');

// WAYS OF EXECUTING or grabbing info
// 1. Callbacks
// 2. Promises
// 3. Async / Await

// callback - function called when result is ready

function getUser(id, callback) {
setTimeout(() => {
    console.log('Reading a user from the database');
    callback({ id: id, guitHubUsername: 'mosh' });
}, 2000); 

}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling Github API... ');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);

}