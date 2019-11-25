module.exports = {

    async getSports(req,res){
        
        var o = {};
        var key = "sports";
        o[key] = [];

        var sport = {
            idSport:1,
            dsSport:"Futebol feminino",
            address:"Minas tênis clube",
            latitude:"-15.753437",
            longitude:"-47.869189",
            image:"https://conteudo.cbf.com.br/cdn/thumbs/910x0/201804/20180416213337_0.jpeg",
            price:"R$ 50,00"
        }

        o[key].push(sport);

        sport = {
            idSport:1,
            dsSport:"Hipismo",
            address:"Centro Hípico do Parque",
            latitude:"-15.805016",
            longitude:"-47.922242",
            image:"https://s3.amazonaws.com/jgdprod-blogs-us/blogs/wp-content/uploads/sites/109/2018/03/Hipismo.jpeg",
            price:"R$ 60,00"
        }

        o[key].push(sport);

        sport = {
            idSport:1,
            dsSport:"Hóquei no gelo",
            address:"SGAN Quadra 2",
            latitude:"-15.759364",
            longitude:"-47.908304",
            image:"https://267557-830227-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/quem-inventou-o-hoquei-no-gelo-667x400.jpg",
            price:"R$ 75,00"
        }

        o[key].push(sport);

        sport = {
            idSport:1,
            dsSport:"Caiaque",
            address:"Deck da Asa Norte",
            latitude:"-15.733191",
            longitude:"-47.886390",
            image:"https://dbui4lb3qzbcx.cloudfront.net/imagens/db29859eb260eaf1f980a18149c16feb.jpeg",
            price:"R$ 70,00"
        }

        o[key].push(sport);

        sport = {
            idSport:1,
            dsSport:"Krav Maga",
            address:"W3 Sul, 510",
            latitude:"-15.816854",
            longitude:"-47.911934",
            image:"https://kravmaga.com.br/wp-content/uploads/2019/02/krav-maga-mestre-kobi-2-min.jpg",
            price:"R$ 80,00"
        }

        o[key].push(sport);
        res.json(o);
    }


}