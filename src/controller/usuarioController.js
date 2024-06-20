const bcrypt = require('bcrypt');
const { Usuarios } = require('../model');


exports.atualizarUsuario = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.render('atualizarUsuario', { email, error: 'As senhas não coincidem' });
    }

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    await Usuarios.update({ email, password: hashedPassword }, { where: { id: userId } });

    res.redirect('/'); 
  } catch (error) {
    console.error('Erro ao atualizar o cadastro do usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const { Usuario } = require('../model');

exports.mostrarFormularioAtualizacao = async (req, res) => {
    try {
      const userId = req.session.userId;
      const usuario = await Usuarios.findByPk(userId);
  
      if (!usuario) {
        return res.status(404).send('Usuário não encontrado');
      }
  
      res.render('atualizarUsuario', { email: usuario.email });
    } catch (error) {
      console.error('Erro ao mostrar o formulário de atualização do usuário:', error);
      res.status(500).send('Erro interno do servidor');
    }
  };
  



