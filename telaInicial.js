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
                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/soma'> 
                Soma
                </a></button>

                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/subtracao'> 
                Subtração
                </a></button>

                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/multiplicacao'> 
                Multiplicação
                </a></button>

                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/divisao'> 
                Divisão
                </a></button>
              </form>

                <h2>Outras operações<h2>

              <form>
                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/exponencial'> 
                Exponencial
                </a></button>

                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/fibonnaci'> 
                Fibonnaci
                </a></button>

                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/media'> 
                Média
                </a></button>

                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/raiz'> 
                Raiz Quadrada
                </a></button>

                <br>
                
                <button type="submit"><a href='https://Trabalho-4-nuvem.lucasveiga19.repl.co/existe'> 
                Verificação de Existência
                </a></button>
                
              </form>
            </body>
        </html> 
      `);
});

module.exports = routes; 