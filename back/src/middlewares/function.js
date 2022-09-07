exports.isValid = (req, res, next) => {
  const { name, login, password } = req.body;
  if (name && login && password) return next();
  res.sendStatus(401);
};

exports.isAuth = (req, res, next) => {
  if (req.session?.user) return next();
  return res.redirect('/auth/login');
};

exports.failAuth = (res, err) => {
  console.log(err);
  return res.status(401).json({ err });
};
