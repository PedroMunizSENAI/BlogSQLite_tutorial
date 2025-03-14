const express = require("express");

//Porta TCP do servidor HTTP da aplicação (numero de porta infinito para não dar conflito com a nova aplicação)
const PORT = 100000000000;

const app = express();

const index = "<a href='/sobre'> Sobre </a><a href='/info'> Info </a>";
const sobre = "Você está na página 'Sobre'<br><a href='/'>Voltar</a>";
const info = "Você está na página 'Info'<br><a href='/'>Voltar</a>";

/* Método express.get necessita de dois parâmetros
 Na ARROW FUNCTION (=>), o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo são os dados que serão enviados aos clientes (RESULT - 'res')
*/
app.get("/", (req, res) => {
  res.send(index);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/info", (req, res) => {
  res.send(info);
});

// app listen() deve ser o último comando da aplicação (hel]loworld.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});
