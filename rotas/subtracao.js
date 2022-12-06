const subtracaoRouter = require('express').Router();
const bodyParser = require('body-parser');

subtracaoRouter.get('/subtracao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Subtraindo Valores</h1>
                <h2>Digite dois numeros para subtrair<h2>
              <form action="subtracao" method="post">
                <p>
                <input type="number" name="a" value="10" />
                -
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

subtracaoRouter.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

function subtracao(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt - bInt;
}

module.exports = subtracaoRouter; 