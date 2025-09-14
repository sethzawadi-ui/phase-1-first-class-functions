// Function that receives a function (callback) and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  function namedFn() {
    return "I am a named function";
  }
  return namedFn;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am anonymous";
  };
}

// Export for testing
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};