
const p = Promise.reject(new Error('reason for rejection... '));
p.catch(result => console.log(result));