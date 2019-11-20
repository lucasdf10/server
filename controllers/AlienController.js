module.exports = { 

    async getStocks(req,res){

        var o = {};
        var key = "stocks";
        o[key] = [];

        var stock = {
            idStock:1,
            dsStock:"Consultoria",
            epc:"450132674000",
            items:[
                {
                    idItem:1,
                    dsItem:"Monitor",
                    epc:"440132674000",
                },
                {
                    idItem:2,
                    dsItem:"Mesa",
                    epc:"440132674001",
                },
                {
                    idItem:3,
                    dsItem:"Cadeira",
                    epc:"440132674002",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idStock:2,
            dsStock:"Diretoria",
            epc:"450132674001",
            items:[
                {
                    idItem:4,
                    dsItem:"Controle",
                    epc:"440132674004",
                },
                {
                    idItem:5,
                    dsItem:"Ar Condicionado",
                    epc:"440132674005",
                },
                {
                    idItem:6,
                    dsItem:"Computador",
                    epc:"440132674006",
                },
            ]
        };
        o[key].push(stock);
        res.json(o);

    }



}