// hello.js

function hello() {
    return "Hello!";
}

function helloworld() {
    return "Hello, World!";
}

// Export the functions so they can be imported elsewhere
module.exports = { hello, helloworld };
