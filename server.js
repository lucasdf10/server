
const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/easytracking', (req, res) => {
  res.json({ ok: true });
});

app.get('/autotreinamento',(req,res)=>{

  var o = {};
  var key = "question";
  o[key] = [];
  

  var mumQ = Math.floor(Math.random() * 20) + 1 
  var numA = Math.floor(Math.random() * 5) + 2 

  for(var i=1;i<=numQ;i++){
    var answer = new Array();
    for(j=1;j<numA;j++){

      answer.push({title:`Resposta ${i*j}`});
    }
    var random = Math.floor(Math.random() * 4) + 1  
    var question = {
      title:`Pergunta ${i}`,
      option:random,
      answer:answer
    };

    o[key].push(question);
  }

	res.json(o);
})


const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
