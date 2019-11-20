module.exports = { 

    async getStocks(req,res){

        var o = {};
        var key = "stocks";
        o[key] = [];

        var stock = {
            idStock:1,
            dsStock:"Consultoria",
            stockStatus:0,
            epc:"450132674000",
            itens:[
                {
                    idItem:1,
                    itemStatus:0,
                    dsItem:"Monitor",
                    epc:"440132674000",
                },
                {
                    idItem:2,
                    dsItem:"Mesa",
                    itemStatus:0,
                    epc:"440132674001",
                },
                {
                    idItem:3,
                    dsItem:"Cadeira",
                    itemStatus:0,
                    epc:"440132674002",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idStock:2,
            dsStock:"Diretoria",
            stockStatus:1,
            epc:"450132674001",
            itens:[
                {
                    idItem:4,
                    dsItem:"Controle",
                    itemStatus:0,
                    epc:"440132674003",
                },
                {
                    idItem:5,
                    dsItem:"Ar Condicionado",
                    itemStatus:0,
                    epc:"440132674004",
                },
                {
                    idItem:6,
                    dsItem:"Computador",
                    itemStatus:0,
                    epc:"440132674005",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idStock:3,
            dsStock:"Suporte",
            stockStatus:2,
            epc:"450132674002",
            itens:[
                {
                    idItem:7,
                    dsItem:"Gabinete",
                    itemStatus:0,
                    epc:"440132674006",
                },
                {
                    idItem:8,
                    dsItem:"Alien",
                    itemStatus:0,
                    epc:"440132674007",
                },
                {
                    idItem:9,
                    dsItem:"Carregador MAC",
                    itemStatus:0,
                    epc:"440132674008",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idStock:4,
            dsStock:"Treinamento",
            stockStatus:3,
            epc:"450132674003",
            itens:[
                {
                    idItem:10,
                    dsItem:"Teclado",
                    itemStatus:0,
                    epc:"440132674009",
                },
                {
                    idItem:11,
                    dsItem:"Mouse",
                    itemStatus:0,
                    epc:"440132674010",
                },
                {
                    idItem:12,
                    dsItem:"CPU",
                    itemStatus:0,
                    epc:"440132674011",
                },
            ]
        };
        o[key].push(stock);



        res.json(o);

    }



}