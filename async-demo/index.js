// Synchronous or blocking program
// 2nd line has to wait for 1st line to finish execution
console.log('Before');
// Asynchronous. or non blocking function // schedule task to be performed in future
// displayed LAST after After
setTimeout(() => {
    console.log('Reading a user from the database');
}, 2000);
 
console.log('After');

