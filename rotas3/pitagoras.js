const pitagorasRouter = require('express').Router();
const bodyParser = require('body-parser');

pitagorasRouter.get('/pitagoras', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Utilize a formula de Pitagoras</h1>
                <h2>Digite os valores para o calculo</h2>

              <form action="pitagoras" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

pitagorasRouter.post('/pitagoras', function (req, res) {
  var body = req.body;
  var resultado = pitagoras(body.a, body.b);
  
  res.send(`O resultado de ${body.a} e ${body.b} é ${resultado}`);
});

function pitagoras(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);

  return Math.sqrt(aInt * aInt + bInt * bInt);
}

module.exports = pitagorasRouter; 