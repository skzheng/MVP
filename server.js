const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const parser = require('body-parser');
const Questions = require('./model/questions.js');
const db = require('./db')

const app = express();
 
const compiler = webpack(webpackConfig);
app.use(parser.json());
app.use(express.static(__dirname + '/www'));
 


app.get('/1', function(req,res){
  Questions.find({})
  .then(function(questions){
    res.send(questions);
  });
  // .then( 
  //  console.log('hey')
  // //   )
  // res.writeHead(200);
  // res.end(data);
})

app.post('/1', function(req,res){
  var question = req.body.question;
  var answer = req.body.answer;

  Questions.create({ question: question, answer:answer}, function(err,question){
    if(err) return err;
  })
  // Post info to the Database;
  res.end('hello');
})

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
