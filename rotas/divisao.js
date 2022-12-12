const divisaoRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

divisaoRouter.get('/divisao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Divisão Valores</h1>
                <h2>Digite dois numeros para dividir<h2>
              <form action="divisao" method="post">
                <p>
                <input type="number" name="a" value="10" />
                /
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

divisaoRouter.use(bodyParser.json());
divisaoRouter.use(express.urlencoded());

divisaoRouter.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  
  res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
});

function divisao(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt / bInt;
}

module.exports = divisaoRouter; 