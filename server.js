var express = require('express'); // library to create the webservers
var morgan = require('morgan'); // to output logs to the server
var path = require('path');

var app = express();
app.use(morgan('combined'));
 //line 8,12,16 handles specific urls
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html')); // we send the content of the file
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
 // now adding 3 more URL handlers  and these are only text responses not html responses 
 app.get('/article-one',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
     
 });
 app.get('/article-two',function(req,res){
     res.send('Article two requested and will be served here');
     
 });
 app.get('/article-three',function(req,res){
     res.send('Article-three requested and will be served here');
     
 });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
