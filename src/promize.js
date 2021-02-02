const Promize = function (executor) {
  if (executor === null || executor === undefined) {
    throw Error;
  }
  executor((resolve = () => {}), (reject = () => {}));

  this.then = (val) => {
    return executor(val);
  };
};

module.exports = Promize;
