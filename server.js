const express = require('express');
const path = require('path');

const app = express();

var port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname,'dist/')));

app.get("*", function(req,res){
  res.render(path.join(__dirname,'dist/index.html'));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})
