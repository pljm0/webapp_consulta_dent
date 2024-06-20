const { Consulta } = require('../model');
const { isAuthenticated } = require('../middleware/auth');


exports.listarConsultas = async (req, res) => {
  const userId = req.session.userId;
  const consultas = await Consulta.findAll({ where: { userId } });
  res.render('index', { consultas });
};

exports.criarConsulta = (req, res) => {
  res.render('criarConsulta');
};

exports.salvarConsulta = async (req, res) => {
  const userId = req.session.userId;
  const { titulo, clinica, data, hora } = req.body;
  await Consulta.create({ titulo, clinica, data, hora, userId });
  res.redirect('/');
};

exports.editarConsulta = async (req, res) => {
  const consulta = await Consulta.findByPk(req.params.id);
  res.render('editarConsulta', { consulta });
};

exports.atualizarConsulta = async (req, res) => {
  const { titulo, clinica, data, hora } = req.body;
  await Consulta.update({ titulo, clinica, data, hora }, { where: { id: req.params.id } });
  res.redirect('/');
};

exports.excluirConsulta = async (req, res) => {
  await Consulta.destroy({ where: { id: req.params.id } });
  res.redirect('/');
};
