const express = require('express');
const path = require('path');

const app = express();

console.log(path.join(__dirname,'dist/'));

app.use(express.static(path.join(__dirname,'dist/')));

const VIEWS = path.join(__dirname, 'views');

app.get("*", function(req,res){
  //res.sendFile(path.join(__dirname ,'/dist/index.html'));
  res.sendFile('index.html', { root : VIEWS });
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server on port %d in %s mode", this.address().port, app.settings.env);
})
