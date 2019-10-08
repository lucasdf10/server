module.exports = {
    async cowip(req,res){
        var o = {};
        var key = "coworking";

        var coworking1 = {
            idCoworking:1,
            address:"Edificio Parque Brasilia, Sala 155 - SIG, Brasilia - DF",
            latitude:"-15.794716",
            longitude:"-47.910953"
        };


        var coworking2 = {
            idCoworking:2,
            address:"CLS 213 BL C - Asa Sul, Brasilia - DF",
            latitude:"-15.830894",
            longitude:"-47.915811"
        };

        var coworking3 = {
            idCoworking:3,
            address:"SHCS CLS 208 BL B - Asa Sul, Brasília, DF",
            latitude:"-15.819283",
            longitude:"-47.899775"
            
        };

        var coworking4 = {
            idCoworking:4,
            address:"CLS 203 BL D - Asa Sul, Brasilia - DF",
            latitude:"-15.810156",
            longitude:"-47.899172"
            
        };

        var coworking5 = {
            idCoworking:5,
            address:"CLN 204 Bloco B - Asa Norte - Brasília, DF",
            latitude:"-15.776875",
            longitude:"-47.878631"
            
        };

        var coworking6 = {
            idCoworking:6,
            address:"CLN 406 BL E - Asa Norte, Brasília - DF",
            latitude:"-15.766616",
            longitude:"-47.878220"
            
        };

        var coworking7 = {
            idCoworking:7,
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
    }
}