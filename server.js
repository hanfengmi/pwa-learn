const Koa = require('koa');
const Static = require('koa-static');
const path = require('path');  
const cors = require('koa2-cors');

const app = new Koa();

const staticPath = './';

app.use(cors());

app.use(Static(path.resolve(__dirname, staticPath)));

app.listen(8081);
console.log('listening 8081')