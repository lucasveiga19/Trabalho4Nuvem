const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./telaInicial');
const somaRouter = require('./rotas/soma');
const subtracaoRouter = require('./rotas/subtracao');
const multiplicaoRouter = require('./rotas/multiplicacao');
const divisaoRouter = require('./rotas/divisao');

const exponencialRouter = require('./rotas2/exponencial');
const fibonnaciRouter = require('./rotas2/fibonnaci');
const mediaRouter = require('./rotas2/media');
const raizRouter = require('./rotas2/raiz');

const existeRouter = require('./rotas3/existe');
const bhaskaraRouter = require('./rotas3/bhaskara');
const tipoRouter = require('./rotas3/tipo');
const pitagorasRouter = require('./rotas3/pitagoras');
const circuloRouter = require('./rotas3/circulo');
const progressaoRouter = require('./rotas3/progressao');
const trianguloRouter = require('./rotas3/triangulo');

app.use(bodyParser.json());
app.use(express.urlencoded());

app.use('/', routes);
app.get('/soma', somaRouter);
app.post('/soma', somaRouter);

app.get('/subtracao', subtracaoRouter);
app.post('/subtracao', subtracaoRouter);

app.get('/multiplicacao', multiplicaoRouter);
app.post('/multiplicacao', multiplicaoRouter);

app.get('/divisao', divisaoRouter);
app.post('/divisao', divisaoRouter);

app.get('/exponencial', exponencialRouter);
app.post('/exponencial', exponencialRouter);

app.get('/fibonnaci', fibonnaciRouter);
app.post('/fibonnaci', fibonnaciRouter);

app.get('/media', mediaRouter);
app.post('/media', mediaRouter);

app.get('/raiz', raizRouter);
app.post('/raiz', raizRouter);

app.get('/existe', existeRouter);
app.post('/existe', existeRouter);

app.get('/bhaskara', bhaskaraRouter);
app.post('/bhaskara', bhaskaraRouter);

app.get('/tipo', tipoRouter);
app.post('/tipo', tipoRouter);

app.get('/pitagoras', pitagorasRouter);
app.post('/pitagoras', pitagorasRouter);

app.get('/circulo', circuloRouter);
app.post('/circulo', circuloRouter);

app.get('/progressao', progressaoRouter);
app.post('/progressao', progressaoRouter);

app.get('/triangulo', trianguloRouter);
app.post('/triangulo', trianguloRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server started');
});
