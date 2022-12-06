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

app.listen(3000, () => {
  console.log('server started');
});
