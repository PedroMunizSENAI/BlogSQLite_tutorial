const express = require("express"); //Importa biblioteca express
const sqlite3 = require("sqlite3"); //Importa biblioteca express

const app = express(); //Instância para uso do Express
//Cria conexão com o Banco de Dados
const db = new sqlite3.Database("user.db"); //Instância para uso do SqLite

//Porta TCP do servidor HTTP da aplicação
const PORT = 8000;

db.serialize(() => {
  //Esse método permite enviar comandos SQL em modo 'sequencial'
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

const home =
  "<a href='/'> Home </a><a href='/sobre'> Sobre </a><a href='/login'> Login </a><a href='/cadastro'> Cadastro </a>";
const sobre = "Você está na página 'Sobre' <br><a href='/'>Voltar</a>";
const login = "Você está na página 'Login' <br><a href='/'>Voltar</a>";
const cadastro = "Você está na página 'Cadastro' <br><a href='/'>Voltar</a>";

/* Método express.get necessita de dois parâmetros
 Na ARROW FUNCTION (=>), o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo são os dados que serão enviados aos clientes (RESULT - 'res')
*/
app.get("/", (req, res) => {
  res.send(home);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/login", (req, res) => {
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  res.send(cadastro);
});

// app listen() deve ser o último comando da aplicação (hel]loworld.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});
