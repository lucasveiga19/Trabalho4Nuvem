const exponencialRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

exponencialRouter.get('/exponencial', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Exponencial Valores</h1>
                <h2>Digite dois numeros para o exponencial<h2>
              <form action="exponencial" method="post">
                <p>
                <input type="number" name="a" value="10" />
                **
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

exponencialRouter.use(bodyParser.json());
exponencialRouter.use(express.urlencoded());

exponencialRouter.post('/exponencial', function (req, res) {
  var body = req.body;
  var resultado = exponencial(body.a, body.b);
  
  res.send(`O resultado da Exponencial de ${body.a} e ${body.b} é ${resultado}`);
});

function exponencial(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt ** bInt;
}

module.exports = exponencialRouter; 