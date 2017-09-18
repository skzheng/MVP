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
})

app.post('/1', function(req,res){
  var question = req.body.question;
  var answer = req.body.answer;

  Questions.create({ question: question, answer:answer}, function(err,question){
    if(err) return err;
  });
})

app.put('/1', function(req,res){
  var id = req.body.id;
  Questions.findById({_id:id}, function(err, question){
    if(err) res.status(404).send('Could not find question')
      else {
        question.question = req.body.question || question.question;
        question.answer = req.body.answer || question.answer; 
        question.save()
        res.send('Question updated')
      }
  })
})

app.delete('/1', function(req, res){
  var id = req.body.id;
  Questions.findOneAndRemove({_id:id}, function(err,question){
    if(err) res.status(404).send('Could not find question')
    else res.send('Question deleted')
  })
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
