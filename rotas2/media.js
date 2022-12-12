const mediaRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

mediaRouter.get('/media', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Valores Média</h1>
                <h2>Digite três numeros para ver sua média<h2>
              <form action="media" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="number" name="b" value="20" />
                <input type="number" name="c" value="30" /> 
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

mediaRouter.use(bodyParser.json());
mediaRouter.use(express.urlencoded());

mediaRouter.post('/media', function (req, res) {
  var body = req.body;
  var resultado = media(body.a, body.b, body.c);
  
  res.send(`O resultado da media de ${body.a} e ${body.b} e ${body.c} é ${resultado}`);
});

function media(a, b, c) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  return (aInt + bInt + cInt)/3;
}

module.exports = mediaRouter; 