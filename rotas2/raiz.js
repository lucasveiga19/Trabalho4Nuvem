const raizRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

raizRouter.get('/raiz', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Raiz Valores</h1>
                <h2>Digite um valor para saber sua raiz quadrada<h2>
              <form action="raiz" method="post">
                <p>
                √
                <input type="number" name="a" value="49" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

raizRouter.use(bodyParser.json());
raizRouter.use(express.urlencoded());

raizRouter.post('/raiz', function (req, res) {
  var body = req.body;
  var resultado = raiz(body.a);
  
  res.send(`O resultado da raiz quadrada de ${body.a} é ${resultado}`);
});

function raiz(a) {
  return Math.sqrt(a);
}

module.exports = raizRouter; 