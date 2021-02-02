const basicPromise = new Promise((resolve, rejesct) => resolve('basicPromise'));

const funcPromise = () => {
  return new Promise((resolve, reject) => resolve('funcPromise'));
};
const chainedPromise = (prom) => {
  let newProm = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(prom);
    }, 250);
  });
  return new Promise((resolve, reject) => {
    newProm.then((success) => {
      return success;
    });
  });
};
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    reject(Error('rejectedPromise'));
  });
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
