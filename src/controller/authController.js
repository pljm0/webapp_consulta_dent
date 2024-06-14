const bcrypt = require('bcrypt');
const { Usuario } = require('../model');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Usuario.findOne({ where: { username } });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Usuário ou senha inválidos' });
  }
};

exports.showRegister = (req, res) => {
  res.render('register');
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await Usuario.create({ username, password: hashedPassword });
  res.redirect('/login');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
