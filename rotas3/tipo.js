const tipoRouter = require('express').Router();
const bodyParser = require('body-parser');

tipoRouter.get('/tipo', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Utilize a verificação de tipo do Triangulo</h1>
                <h2>Digite os valores para a confirmação</h2>

              <form action="tipo" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="number" name="b" value="10" />
                <input type="number" name="c" value="32" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

tipoRouter.post('/tipo', function (req, res) {
  var body = req.body;
  var resultado = tipo(body.a, body.b, body.c);
  
  res.send(`O resultado de ${body.a} e ${body.b} e ${body.c} é que são  ${resultado}`);
});

function tipo(a, b, c) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  
    if (aInt == bInt && bInt == cInt){
        return "Triangulo Equilatero";
    }
    else if (aInt == bInt || bInt == cInt || cInt == aInt){
        return "Triangulo Isosceles";
    }
    else{
        return "Triangulo Escaleno";
    }
}

module.exports = tipoRouter; 