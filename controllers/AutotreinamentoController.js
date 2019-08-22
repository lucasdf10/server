module.exports = {
    async questionAndAnswers(req,res) {
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
    },

    async links(req,res){
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
    }
}