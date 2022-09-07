exports.isTimeout = (req, res, next) => {
    setTimeout(() => {
        next();
    }, 500)
  };