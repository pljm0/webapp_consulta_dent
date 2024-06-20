const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const path = require('path');
const consultaRoutes = require('./src/routes/consultaRoutes');
const db = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'seu_segredo_super_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoutes);
app.use('/', consultaRoutes);

db.sync().then(() => {
  console.log('Banco de dados sincronizado');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
