// WAYS OF EXECUTING or grabbing info
// callback - function called when result is ready
// 1. Callbacks
// 2. Promises
// 3. Async / Await



// Asynchronous
console.log('Before');
getUser(1, (user) => {

    // 2nd argument array of strings
    getRepositories(user.guitHubUsername, (repos) => {
        getCommits(repos, (commits) => {\
            // CALLBACK HELL - Very difficult to read or understand

        });
    });
});
console.log('After');



// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');



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