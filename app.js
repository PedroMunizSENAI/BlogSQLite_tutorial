const express = require("express");

//Porta TCP do servidor HTTP da aplicação
const PORT = 8000;

const app = express();

const index = "<a href='/sobre'>Sobre</a><a href='/info'>Info</a>";

/* Método express.get necessita de dois parâmetros
 Na ARROW FUNCTION (=>), o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo são os dados que serão enviados aos clientes (RESULT - 'res')
*/
app.get("/", (req, res) => {
  res.send("Olá SESI!");
});

app.get("/sobre", (req, res) => {
  res.send("Você está na página Sobre");
});

app.get("/info", (req, res) => {
  res.send("Você está na página Info");
});

// app listen() deve ser o último comando da aplicação (hel]loworld.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});
