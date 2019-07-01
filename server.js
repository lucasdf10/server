
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

app.get('/autotreinamento/QA',(req,res)=>{

  var o = {};
  var key = "question";
  o[key] = [];
  

  var numQ = Math.floor(Math.random() * 20) + 1;
  
 

  for(var i=1;i<=numQ;i++){
    var answer = new Array();
    var numA = Math.floor(Math.random() * 4 + 1);
    numA++;
    
    for(j=1;j<=numA;j++){

      answer.push({title:`Resposta ${i*j}`});
    }
    var random = Math.floor(Math.random() * (numA - 1) + 1);
    var question = {
      title:`Pergunta ${i}`,
      option:random,
      answer:answer
    };

    o[key].push(question);
  }

	res.json(o);
});

app.get('/autotreinamento/links',(req,res)=>{

  var o = {};
  var key = "video";

  var video1 = {
    name:"Gerdau | Inovação",
    link:"https://www.youtube.com/watch?v=Rb5JwhIozkc"
  };

  var video2 = {
    name:"Gerdau | 1 edicação Hackaton",
    link:"https://www.youtube.com/watch?v=nR3P3wl9yIs"
  };

  var video3 = {
    name:"Gerdau | Digital Inovation",
    link:"https://www.youtube.com/watch?v=TFKWKwJ_vpE"
  };

  var video4 = {
    name:"Gerdau | Inovação na Mineração",
    link:"https://www.youtube.com/watch?v=TJDuHttoo8E"
  };

  o[key] = [];
  o[key].push(video1);
  o[key].push(video2);
  o[key].push(video3);
  o[key].push(video4);

  res.json(o);

});


const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
