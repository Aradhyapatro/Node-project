//jshint esversion:6
const buzz = () => {
    console.log('buzz');
};

const fizz = () => {
    console.log('fuzz');
};

const fiz = () => {
    console.log("12345");
};

const buzzfizz = () => {
    console.log('buzzfizz');
    setTimeout(fiz, 1000);
    buzz();
    fizz();
};

buzzfizz();

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Oops")), 1000);
});

promise.then(
    results => {
        console.log(results);
    }, error => {
        console.log(error);
    }
);