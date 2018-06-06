const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

var port = process.env.port || 8080

app.use(express.static(path.join(__dirname,'dist/')));

app.get("*", function(req,res){
  res.render(path.join(__dirname,'dist/index.html'));
})
app.set('port',port);

const server = http.createServer(app);

server.listen(port, function(){
  console.log("app running " + port);
})
