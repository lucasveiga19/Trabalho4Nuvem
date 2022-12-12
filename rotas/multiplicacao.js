const multiplicaoRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

multiplicaoRouter.get('/multiplicacao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Multiplicação Valores</h1>
                <h2>Digite dois numeros para multiplicar<h2>
              <form action="multiplicacao" method="post">
                <p>
                <input type="number" name="a" value="10" />
                *
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

multiplicaoRouter.use(bodyParser.json());
multiplicaoRouter.use(express.urlencoded());

multiplicaoRouter.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

function multiplicacao(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt * bInt;
}

module.exports = multiplicaoRouter; 