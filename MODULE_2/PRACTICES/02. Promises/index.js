// First Example
let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2) {
        resolve("Success");
    } else {
        reject("Failed");
    };
});

p.then((message) => {
    console.log(`This is the then ${message}`);
}).catch((message) => {
    console.log(`This is the catch ${message}`);
});

// Second Example
const userLeft = false;
const userWatchingCatMeme = false;

const watchTutorialPromise = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":("
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: "WebDevSimplified < Cat"
            });
        } else {
            resolve("Thumbs up and Subscribed");
        };
    });
};

watchTutorialPromise().then((message) => {
    console.log(`Success ${message}`);
}).catch((error) => {
    console.log(`${error.name} ${error.message}`);
});

// Example 3
const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 recorded");
});

const recordeVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve ("Video 3 recorded");
});

Promise.all([
    recordVideoOne,
    recordeVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
});