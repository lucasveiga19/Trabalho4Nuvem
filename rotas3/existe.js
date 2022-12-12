const existeRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

existeRouter.get('/existe', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Verificação de Existencia</h1>
                
              <form action="existe" method="post">
                <p>
                <h2>Digite o lado maior</h2>
                <input type="number" name="a" value="30" />
                <h2>e os dois menores do triangulo para saber se existe<h2>
                <input type="number" name="b" value="20" />
                <input type="number" name="c" value="10" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

existeRouter.use(bodyParser.json());
existeRouter.use(express.urlencoded());

existeRouter.post('/existe', function (req, res) {
  var body = req.body;
  var resultado = existe(body.a, body.b, body.c);
  
  res.send(`O resultado da verificação de ${body.a} e ${body.b} e ${body.c} é que ${resultado}`);
});

function existe(a, b, c) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  
  if (aInt + bInt <= cInt || aInt + cInt <= bInt || bInt + cInt <= aInt)
        return 'Não Existe';
  else
        return 'Existe';
}

module.exports = existeRouter; 