const basicPromise = new Promise((resolve, rejesct) => resolve('basicPromise'));

const funcPromise = () => {
  return new Promise((resolve, reject) => resolve('funcPromise'));
};
const chainedPromise = (prom) => {
  resolvedProm = prom.then((message) => {
    return message;
  });
  return new Promise((resolve, reject) => {
    resolve(message);
  });
};
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    reject(Error('rejectedPromise'));
  });
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
