// Asynchronous JavaScript Concepts

// 1. Callbacks
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Example of a callback function
function fetchDataCallback(url, callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" }; // Simulated fetched data
        callback(data); // Invoke the callback with the fetched data
    }, 1000); // Simulate a 1 second delay for data fetching
}

fetchDataCallback("https://api.example.com/user", (data) => {
    console.log("Callback:", data);
});

// 2. Promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate a success condition
            if (success) {
                const data = { id: 2, name: "Jane Doe" }; // Simulated fetched data
                resolve(data); // Resolve the promise with the data
            } else {
                reject("Failed to fetch data"); // Reject the promise with an error message
            }
        }, 1000); // Simulate a 1 second delay for data fetching
    });
}

fetchDataPromise("https://api.example.com/user")
    .then((data) => {
        console.log("Promise resolved:", data);
    })
    .catch((error) => {
        console.log("Promise rejected:", error);
    });

// 3. Async/Await
// Async/Await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

async function fetchDataAsync(url) {
    try {
        const data = await fetchDataPromise(url); // Wait for the promise to resolve
        console.log("Async/Await:", data);
    } catch (error) {
        console.log("Async/Await Error:", error);
    }
}

fetchDataAsync("https://api.example.com/user");

// 4. Chaining Promises
// Promises can be chained to perform a series of asynchronous operations in sequence.

fetchDataPromise("https://api.example.com/user")
    .then((data) => {
        console.log("First promise resolved:", data);
        return fetchDataPromise("https://api.example.com/posts"); // Return another promise
    })
    .then((data) => {
        console.log("Second promise resolved:", data);
    })
    .catch((error) => {
        console.log("Chaining error:", error);
    });

// 5. Handling multiple promises with Promise.all
// Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or rejects if any of the promises in the array reject.

const promise1 = fetchDataPromise("https://api.example.com/user");
const promise2 = fetchDataPromise("https://api.example.com/posts");

Promise.all([promise1, promise2])
    .then((results) => {
        console.log("Promise.all results:", results); // Both promises have resolved
    })
    .catch((error) => {
        console.log("Promise.all error:", error); // One of the promises rejected
    });

// 6. Handling multiple promises with Promise.race
// Promise.race takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

Promise.race([promise1, promise2])
    .then((result) => {
        console.log("Promise.race result:", result); // The first promise that resolves
    })
    .catch((error) => {
        console.log("Promise.race error:", error); // The first promise that rejects
    });
