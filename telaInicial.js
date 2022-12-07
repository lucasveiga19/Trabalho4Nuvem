const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Algoritmos Matematicos</h1>
                <h2>As 4 principais operações<h2>
              <form>
                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/soma'> 
                Soma
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/subtracao'> 
                Subtração
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/multiplicacao'> 
                Multiplicação
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/divisao'> 
                Divisão
                </a></button>
              </form>

                <h2>Outras operações<h2>

              <form>
                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/exponencial'> 
                Exponencial
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/fibonnaci'> 
                Fibonnaci
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/media'> 
                Média
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/raiz'> 
                Raiz Quadrada
                </a></button>

                <br>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/bhaskara'> 
                Bhaskara
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/progressao'> 
                Progressão Aritmética
                </a></button>
              </form>
              
               <h2>Operações Geometricas<h2>

              <form>
                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/existe'> 
                Verificação de Existência de Triangulo
                </a></button>
                <br>
                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/tipo'> 
                Verificação de Tipo de Triangulo
                </a></button>
                
                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/pitagoras'> 
                Pitagoras
                </a></button>
                <br>
                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/circulo'> 
                Area e Comprimento do Circulo
                </a></button>

                <button type="submit"><a href='https://trabalho-4-nuvem.vercel.app/triangulo'> 
                Area do Triangulo por Tipo
                </a></button>
              </form>

            </body>
        </html> 
      `);
});

module.exports = routes; 