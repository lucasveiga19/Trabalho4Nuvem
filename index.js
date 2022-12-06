const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./telaInicial');
const somaRouter = require('./rotas/soma');
const subtracaoRouter = require('./rotas/subtracao');
const multiplicaoRouter = require('./rotas/multiplicacao');
const divisaoRouter = require('./rotas/divisao');

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

app.listen(3000, () => {
  console.log('server started');
});
