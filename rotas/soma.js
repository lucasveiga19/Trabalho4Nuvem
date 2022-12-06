const somaRouter = require('express').Router();
const bodyParser = require('body-parser');

somaRouter.get('/soma', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Somando Valores</h1>
                <h2>Digite dois numeros para somar testeee<h2>
              <form action="soma" method="post">
                <p>
                <input type="number" name="a" value="10" />
                +
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

somaRouter.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

function soma(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt + bInt;
}

module.exports = somaRouter; 