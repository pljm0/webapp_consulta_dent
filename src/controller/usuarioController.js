const bcrypt = require('bcrypt');
const { Usuarios } = require('../model');


exports.atualizarUsuario = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { email, password, confirmPassword } = req.body;

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      return res.render('atualizarUsuario', { email, error: 'As senhas não coincidem' });
    }

    // Hash da nova senha, se fornecida
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    // Atualizar o email e a senha do usuário
    await Usuarios.update({ email, password: hashedPassword }, { where: { id: userId } });

    res.redirect('/'); // ou redirecionar para onde desejar após a atualização
  } catch (error) {
    console.error('Erro ao atualizar o cadastro do usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const { Usuario } = require('../model');

exports.mostrarFormularioAtualizacao = async (req, res) => {
    try {
      // Obter o usuário atual
      const userId = req.session.userId;
      const usuario = await Usuarios.findByPk(userId);
  
      // Verificar se o usuário foi encontrado
      if (!usuario) {
        return res.status(404).send('Usuário não encontrado');
      }
  
      // Passar o email do usuário para o modelo
      res.render('atualizarUsuario', { email: usuario.email });
    } catch (error) {
      console.error('Erro ao mostrar o formulário de atualização do usuário:', error);
      res.status(500).send('Erro interno do servidor');
    }
  };
  



