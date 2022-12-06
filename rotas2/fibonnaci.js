const fibonnaciRouter = require('express').Router();
const bodyParser = require('body-parser');

fibonnaciRouter.get('/fibonnaci', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Fibonnaci Valor</h1>
                <h2>Digite até que número quer ver a sequência de Fibonnaci<h2>
              <form action="fibonnaci" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

fibonnaciRouter.post('/fibonnaci', function (req, res) {
  var body = req.body;
  var resultado = fibonnaci(body.a);
  
  res.send(`O resultado do fibonnaci de ${body.a} é ${resultado}`);
});

function fibonnaci(a){
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < a; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

module.exports = fibonnaciRouter; 