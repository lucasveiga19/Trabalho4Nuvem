const progressaoRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

progressaoRouter.get('/progressao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Utilize a Progressão Aritmética </h1>
                <h2>Diga os dois primeiros valores da Progressão e a posição do valor que quer saber</h2>

              <form action="progressao" method="post">
                <p>
                <h2>Valores da Progressão</h2>
                <input type="number" name="a" value="1" />
                <input type="number" name="b" value="2" />
                <h2>Valor da Posição</h2>
                <input type="number" name="c" value="3" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

progressaoRouter.use(bodyParser.json());
progressaoRouter.use(express.urlencoded());

progressaoRouter.post('/progressao', function (req, res) {
  var body = req.body;
  var resultado = progressao(body.a, body.b, body.c);
  
  res.send(`O resultado os valores da progressão ${body.a} e ${body.b} e da posição ${body.c} são  ${resultado}`);
});

function progressao(a, b, c) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  
  var diff = bInt - aInt;
  var fact = (cInt - 1) * diff;
  var result = aInt + fact;

  return result;
}

module.exports = progressaoRouter; 