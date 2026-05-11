// Rewrite code with async and await





getCustomer(1, (customer) => {


async function displayCustomerInfo() {
    try {


        // 1. customer id
        // 2. checks if user is gold or not
        // 3. 

        const user = getCustomer(1);


    }
    catch (err) {
        console.log('Error', err.message);
    }
}


// OLD CODe
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });


// ASYNC AND AWAIT REAL
async function notifyCustomer() {
    const cusomter = await getCustomer(1);
    console.log('Customer: '. customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent');
    }
}

notifyCustomer();






function getCustomer(id) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
        });
    }, 4000);  
    })

}

function getTopMovies(resolve, reject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });

}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}