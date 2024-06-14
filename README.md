# WebApp Consulta Dent

Este é um projeto de aplicativo web para gerenciamento de consultas odontológicas. O aplicativo permite que dentistas registrem consultas, acompanhem o histórico de consultas e organizem sua agenda.

## Funcionalidades

- Autenticação de usuário
- Registro de consultas
- Visualização do histórico de consultas
- Edição e exclusão de consultas

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM para interagir com o banco de dados)
- SQLite (Banco de dados)
- Mustache Express (motor de visualização)
- HTML, CSS, JavaScript

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto
  - `config/`: Configurações do banco de dados e outros
  - `controller/`: Controladores para manipular a lógica de negócios
  - `middleware/`: Middlewares para autenticação e outros
  - `model/`: Definições de modelo para interação com o banco de dados
  - `routes/`: Rotas para definir os pontos de extremidade da API
  - `views/`: Visualizações HTML usando o Mustache Express
- `public/`: Contém arquivos estáticos como CSS, JavaScript e imagens
- `index.js`: Ponto de entrada da aplicação

