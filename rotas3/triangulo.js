const trianguloRouter = require('express').Router();
const bodyParser = require('body-parser');

trianguloRouter.get('/triangulo', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Utilize a formula Area do Triangulo por Tipo</h1>
                <h2>Digite os valores para a confirmação</h2>

              <form action="triangulo" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="number" name="b" value="10" />
                <input type="number" name="c" value="15" />
                <h2>Digite o valor da altura caso o triangulo seja Isosceles</h2>
                <input type="number" name="d" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

trianguloRouter.post('/triangulo', function (req, res) {
  var body = req.body;
  var resultado = triangulo(body.a, body.b, body.c, body.d);
  
  res.send(`O resultado dos valores ${body.a} e ${body.b} e ${body.c} é que são  ${resultado}`);
});

function triangulo(a, b, c, d) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  var dInt = parseInt(d);
  
    if (aInt == bInt && bInt == cInt){
        var area = ((aInt * aInt) * Math.sqrt(3))/4;
        return area;
    }
    else if (aInt == bInt || bInt == cInt || cInt == aInt){
        if(aInt == bInt != cInt){
          var area = (cInt * dInt)/2;
          return area;
        } else if(aInt == cInt != bInt){
          var area = (bInt * dInt)/2;
          return area;
        } else if(cInt == bInt != aInt){
          var area = (aInt * dInt)/2;
          return area;
        }
    }
    else{
      var s = (aInt + bInt + cInt)/2;
      var area = Math.sqrt(s*(s-aInt)*(s-bInt)*(s-cInt));
      return area;
    }
}

module.exports = trianguloRouter; 