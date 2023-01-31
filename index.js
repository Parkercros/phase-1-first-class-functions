function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function named() {
    console.log("The Boy is Parker.")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('The boy has no name.')
  }
}