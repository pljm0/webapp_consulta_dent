exports.isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Erro ao encerrar a sessão:', err);
      res.status(500).send('Erro ao encerrar a sessão');
    } else {
      res.redirect('/login');
    }
  });
};
