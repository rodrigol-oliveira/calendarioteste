const express = require('express');
const BodyParser = require('body-parser');
const hostname = '0.0.0.0';
const port = 3000;
const app = express();

app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
app.set('view engine','ejs');

app.use(express.static('public'));


app.get("/", function(req,res){
  res.render('index');
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});