const express = require("express");

//Porta TCP do servidor HTTP da aplicação
const PORT = 3000;

/* Método express.get necessita de dois parâmetros
 Na ARROW FUNCTION (=>), o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo são os dados que serão enviados aos clientes (RESULT - 'res')
*/
app.get("/", (req, res) => {
  res.send("Olá SESI!");
});

const app = express();

// app listen() deve ser o último comando da aplicação (hel]loworld.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});
