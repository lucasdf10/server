module.exports = {

    async getPhoneCode(req,res){
        var phone = req.query.phone;
        //sendSms(phone);
        var o = {};
        var key = "code";
        o[key] = Math.floor(100000 + Math.random() * 900000).toString(); 
        res.json(o);
    },

    async user(req,res,next){
        console.log(req.body)
        res.json("ok");
    },


    async getCoworkings(req,res){
        var o = {};
        var key = "coworking";

        var coworking1 = {
            idCoworking:1,
            title:"First Decision",
            address:"Edificio Parque Brasilia, Sala 155 - SIG, Brasilia - DF",
            latitude:"-15.794716",
            longitude:"-47.910953"
        };


        var coworking2 = {
            idCoworking:2,
            title:"COWIP CLS 213",
            address:"CLS 213 BL C - Asa Sul, Brasilia - DF",
            latitude:"-15.830894",
            longitude:"-47.915811"
        };

        var coworking3 = {
            idCoworking:3,
            title:"COWIP CLS 208",
            address:"SHCS CLS 208 BL B - Asa Sul, Brasília, DF",
            latitude:"-15.819283",
            longitude:"-47.899775"
            
        };

        var coworking4 = {
            idCoworking:4,
            title:"COWIP CLS 203",
            address:"CLS 203 BL D - Asa Sul, Brasilia - DF",
            latitude:"-15.810156",
            longitude:"-47.899172"
            
        };

        var coworking5 = {
            idCoworking:5,
            title:"COWIP CLN 204",
            address:"CLN 204 Bloco B - Asa Norte - Brasília, DF",
            latitude:"-15.776875",
            longitude:"-47.878631"
            
        };

        var coworking6 = {
            idCoworking:6,
            title:"COWIP CLN 406",
            address:"CLN 406 BL E - Asa Norte, Brasília - DF",
            latitude:"-15.766616",
            longitude:"-47.878220"
            
        };

        var coworking7 = {
            idCoworking:7,
            title:"COWIP CLN 410",
            address:"CLN 410 BL C - Asa Norte, Brasília - DF",
            latitude:"-15.753921",
            longitude:"-47.882123"
            
        };
        
        o[key] = [];
        o[key].push(coworking1);
        o[key].push(coworking2);
        o[key].push(coworking3);
        o[key].push(coworking4);
        o[key].push(coworking5);
        o[key].push(coworking6);
        o[key].push(coworking7);

        res.json(o);
    },

    async getDaysBooked(req,res){
        var o = {};
        var key = "bookingDates";

        var num = 30;
        var randomDate = function randomDate(start, end) {
            var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join('-');
        }
        o[key] = [];

        for(var i=1;i<=num;i++){     
            var date = {
                bookingDate:randomDate( new Date(),new Date(2020,10,11))
            }     
            o[key].push(date);
        
        }
        res.json(o);
    },

    async getServicesAvailable(req,res){
        var o = {};
        var key = "bookingType";
        o[key] = [];
        var bookingtype = {
            id:1,
            title:"Mesa Individual",
            ds:"Breve descrição do serviço a ser utilizado pelo sistema.",
            price:30
        };

        o[key].push(bookingtype);
        bookingtype = {
            id:2,
            title:"Sala de Reunião",
            ds:"Breve descrição do serviço a ser utilizado pelo sistema.",
            price:40
        };

        o[key].push(bookingtype);
    
        res.json(o);
    }
}