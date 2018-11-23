var express = require('express'),
  app = express(),
  Bundler = require('parcel-bundler'),
  path = require('path'),
  port = process.env.PORT || 5000;

const filePath = path.resolve(__dirname, 'client', 'index.html');

app.get('/hello',(req, res) => {
  console.log('request received')
  res.status(200).send('Hello world')
})

let bundler = new Bundler( filePath );
app.use(bundler.middleware());

app.listen( port, () => {
  console.log( 'Listening on port ' + port );
})