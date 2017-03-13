var express = require('express'); // library to create the webservers
var morgan = require('morgan'); // to output logs to the server
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article One| Kashish',
    heading:'Article One',
    date: '12 March,2017',
    content:`<p>
            This were I started to write some content in my first WebApp.
        </p>
        <p>
            This were I started to write some content in my first WebApp.
        </p>
        <p>
            This were I started to write some content in my first WebApp.
        </p>
    
`};  // use back quotes on both sides
// we will inject the data into the htmltemplate

function createTemplate(data){
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
        var htmlTemplate=
`
     <html>
        <head>
            <title>
                ${title}
            </title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>  
    
    <!--tag for mobile devices, it shows zoomed view sutiable to view in mobile devices--> 
     
     <link href="/ui/style.css" rel="stylesheet" />

        </head>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
        <h3>
            ${heading}
        </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </html>
`;    
    return htmlTemplate; 
}
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
// res.send('Article two requested and will be served here');
// & now chaning to text responses to showing a webpage
 app.get('/article-one',function(req,res){
  //  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    res.send(createTemplate(articleOne)); 
 });
 app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname,'ui','article-two.html'));
     
 });
 app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname,'ui','article-three.html'));
 });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
