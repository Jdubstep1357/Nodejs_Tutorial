// WAYS OF EXECUTING or grabbing info
// callback - function called when result is ready
// 1. Callbacks
// 2. Promises
// 3. Async / Await



console.log('Before');
getUser(1, getRepositories);
console.log('After');

// SOLUTION TO CALLBACK HELL

// 1st getRrepositories takes a user object
// 2nd getRepositories takes string and callback function
function getRepositories(user) {
    getRepositories(user.guitHubUsername, getCommits);
}


function getCommits(repos) {
    getCommits(repos, displayCommits);
}


// function gets array of commits and display commits to console
function displayCommits(commits) {
    console.log(commits)
}



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