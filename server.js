
const express = require('express');
const bodyParser = require('body-parser');
const qr = require('qr-image');
const ejs = require('ejs');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs')
// Set static folder
app.use(express.static('static'))

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const path = require('path');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/easytracking', (req, res) => {
  res.render('easytracking');
});

app.post('/easytracking', (req, res, next) => {
  // Get the text to generate QR code
  let qr_txt = req.body.qr_text;
  console.log(qr_txt);  // Generate QR Code from text
  var qr_png = qr.imageSync(qr_txt,{ type: 'png'})

  // Generate a random file name 
  let qr_code_file_name = new Date().getTime() + '.png';

  fs.writeFileSync('./static/qr/' + qr_code_file_name, qr_png, (err) => {
      if(err){
          console.log(err);
      }
      
  })

  // Send the link of generated QR code
  res.send({
      'qr_img': "qr/" + qr_code_file_name
  });

});


app.get('/autotreinamento/QA',(req,res)=>{

  var o = {};
  var key = "question";
  o[key] = [];
  

  var numQ = 10;
  
 

  for(var i=1;i<=numQ;i++){
    var answer = new Array();
    var numA = Math.floor(Math.random() * 4 + 1);
    numA++;
    
    for(j=1;j<=numA;j++){

      var x = Math.random();

      answer.push(
        {
          dsAnswer:`Resposta ${i*j}`,
          flOption:Math.round(x)
    
    });
    }
    var random = Math.floor(Math.random() * (numA - 1) + 1);
    var question = {
      dsQuestion:`Pergunta ${i}`,
      answer:answer
    };

    o[key].push(question);
  }

	res.json(o);
});

app.get('/autotreinamento/links',(req,res)=>{

  var o = {};
  var key = "training";

  var training = {
    idTraining:1,
    dsTraining:"Gerdau | Inovação",
    trainingType:"Coorporativo",
    trainingStatus:{
      idTrainingStatus:1,
      dsTrainingStatus:"Pendente"
    },
    // plant: {
    //   idPlant:189,
    //   dsPlant:"Varzea do Lopes"
    // },
    // bay:{
    //   idBay:41,
    //   dsBay:"ESTOQUE 8-A"
    // },
    dsUrl:"http://lucasfeitosa.online/videos/Aula1.mp4",
    nrQuestions:10,
    nrMinApproval:7,
    dtExpireTraining:"2020-07-23",
    
  };


  var training2 = {
    idTraining:2,
    dsTraining:"Gerdau | Digital Inovation",
    trainingType:"Basico",
    plant: {
      idPlant:189,
      dsPlant:"Varzea do Lopes"
    },
    trainingStatus:{
      idTrainingStatus:1,
      dsTrainingStatus:"Pendente"
    },
    // bay:{
    //   idBay:272,
    //   dsBay:"ESTOQUE 8-B"
    // },
    dsUrl:"http://lucasfeitosa.online/videos/Aula2.mp4",
    nrQuestions:10,
    nrMinApproval:8,
    dtExpireTraining:"2020-07-23",
    
  };

  var training3 = {
    idTraining:3,
    dsTraining:"Gerdau | 1 edicação Hackaton",
    trainingType:"Especifico",
    plant: {
      idPlant:189,
      dsPlant:"Varzea do Lopes"
    },
    trainingStatus:{
      idTrainingStatus:2,
      dsTrainingStatus:"Concluído"
    },
    bay:{
      idBay:266,
      dsBay:"ESTOQUE 6-A"
    },
    dsUrl:"http://lucasfeitosa.online/videos/Aula3.mp4",
    nrQuestions:10,
    nrMinApproval:6,
    dtExpireTraining:"2020-07-23",
    
  };

  o[key] = [];
  o[key].push(training);
  o[key].push(training2);
  o[key].push(training3);

  res.json(o);

});


const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
