const syncCallbacker = (a, b) => {
  if (typeof a !== 'function' || typeof b !== 'function') {
    throw Error;
  }
  let aResult = a();
  return b(aResult);
};

const asyncCallbacker = (a, b) => {
  if (typeof a !== 'function' || typeof b !== 'function') {
    throw Error;
  }
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    throw Error;
  }
  const Functionality = (data) => {
    a(
      data,
      (done = (random) => {
        b(random, done);
      })
    );
  };
  Functionality();
};

module.exports = { syncCallbacker, asyncCallbacker };
