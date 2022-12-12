const circuloRouter = require('express').Router();
const bodyParser = require('body-parser');
const express = require('express');

circuloRouter.get('/circulo', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Utilize a formula Area e Comprimento do Circulo </h1>
                <h2>Digite o valor do raio para realizar o calculo </h2>

              <form action="circulo" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

circuloRouter.use(bodyParser.json());
circuloRouter.use(express.urlencoded());

circuloRouter.post('/circulo', function (req, res) {
  var body = req.body;
  var resultado = circulo(body.a);
  
  res.send(`O resultado do raio ${body.a} tem como valores a area e o comprimento ${resultado}`);
});

function circulo(a) {
  var aInt = parseInt(a);
  
  function calcularArea(myRadius){
    var area = (myRadius * myRadius * Math.PI);
    return area;   
  }

  function calcularComprimento(myRadius){
    var comprimento = (myRadius * 2 * Math.PI);
    return comprimento;   
  }

  var area = calcularArea(aInt);
  var comprimento = calcularComprimento(aInt);
  
  return area + " e " + comprimento;
}

module.exports = circuloRouter;