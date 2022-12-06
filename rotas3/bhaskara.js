const bhaskaraRouter = require('express').Router();
const bodyParser = require('body-parser');

bhaskaraRouter.get('/bhaskara', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Utilize a equação de bhaskara</h1>
                <h2>Digite os valores para utilizar a fórmula</h2>

              <form action="bhaskara" method="post">
                <p>
                <input type="number" name="a" value="1" />
                <input type="number" name="b" value="10" />
                <input type="number" name="c" value="24" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

bhaskaraRouter.post('/bhaskara', function (req, res) {
  var body = req.body;
  var resultado = bhaskara(body.a, body.b, body.c);
  
  res.send(`O resultado de ${body.a} e ${body.b} e ${body.c} na fórmula são os valores positivos e negativos ${resultado}`);
});

function bhaskara(a, b, c) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  
  function delta (aInt, bInt, cInt)
  {
  	var delta1 = Math.pow(bInt, 2);
  	var delta2 = (delta1-4 * aInt * cInt);
  	return delta2
  }
  
  function positivo (aInt, bInt, cInt)
  {
  	var raizDelta = Math.sqrt(delta(aInt, bInt, cInt));
  	
  	var valor1 = -bInt + raizDelta;
  	
  	var valor2 = valor1 / (2 * aInt);
  	
  	var pos = valor2;
  	
  	return pos;
  }
  
  function negativo (aInt, bInt, cInt)
  {
  	var raizDelta = Math.sqrt(delta(aInt, bInt, cInt));
  	
  	var valor1 = -bInt - raizDelta;
  	
  	var valor2 = valor1 / (2 * aInt);
  	
  	var neg = valor2;
  	
  	return neg;
  }

  var pos = positivo(aInt, bInt, cInt);
  var neg = negativo(aInt, bInt, cInt);
  
  return pos + " " + neg;
	}


module.exports = bhaskaraRouter; 