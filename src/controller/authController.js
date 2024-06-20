const bcrypt = require('bcrypt');
const { Usuarios } = require('../model');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Usuarios.findOne({ where: { username } });
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
  
  // Verifica se o nome de usuário já está em uso
  const existingUser = await Usuarios.findOne({ where: { username } });
  if (existingUser) {
    res.render('register', { error: 'Nome de usuário já está em uso' });
    return;
  }

  // Se não houver nenhum usuário com o mesmo nome, registra o novo usuário
  const hashedPassword = await bcrypt.hash(password, 10);
  await Usuarios.create({ username, password: hashedPassword });
  res.redirect('/login');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
